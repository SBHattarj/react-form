import {useRecoilState, RecoilState} from 'recoil'

export default function useLocalState<T>(State: RecoilState<T>) {
    return useRecoilState(State);
}