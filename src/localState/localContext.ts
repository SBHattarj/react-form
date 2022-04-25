import {createContext} from 'react'
import {atom} from 'recoil'

export const defaultLocalState = atom<any>({
    key: 'defaultLocalState',
    default: undefined
})
export const LocalContext = createContext(defaultLocalState)
