import  {useMemo, ReactNode, useId} from 'react'
import {atom, RecoilState} from 'recoil'
import {LocalContext} from './localContext'

function createLocalStateProvider<T>(State: RecoilState<T>) {
    return ({children}: {children: ReactNode}) => <LocalContext.Provider value={State} >{children}</LocalContext.Provider>
}

export default function useLocalStateProvider<T>(innitialValue: T): [RecoilState<T>, ({ children }: { children: ReactNode; }) => JSX.Element] {
    const key = useId()
    const LocalState = useMemo(() => atom({
        key,
        default: innitialValue
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [])
    const LocalStateProvider = createLocalStateProvider(LocalState)
    return [LocalState, LocalStateProvider]
}
