import {useRecoilState, SetterOrUpdater} from 'recoil'
import { useContext } from 'react';
import { defaultLocalState, LocalContext } from './localContext';



export default function useLocalState<T>(defaultValue: T) {
    const State = useContext(LocalContext)
    const recoilState = useRecoilState(State);
    const setState = State === defaultLocalState ? (value: T) => undefined : recoilState[1]
    return [(recoilState[0] ?? defaultValue), setState] as [T, SetterOrUpdater<T>]
}