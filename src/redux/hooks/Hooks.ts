import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, Rootstate } from '../store/store'
// import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<Rootstate> = useSelector