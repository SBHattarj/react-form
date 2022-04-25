import  {useMemo, useState, useEffect, createContext, useCallback, ReactNode, useId} from 'react'
import {atom, RecoilState} from 'recoil'

export default function useLocalStateProvider<T>(innitialValue: T) {
    const key = useId()
    const LocalState = useMemo(() => atom({
        key,
        default: innitialValue
    }), [])
    const StateContext = useMemo(() => createContext(LocalState), [])
    const LocalStateProvider = useCallback(({children}: {children:  ReactNode}) =>
        <StateContext.Provider value={LocalState}>{children}</StateContext.Provider>
    , [LocalState])
    return [LocalState, LocalStateProvider]
}
