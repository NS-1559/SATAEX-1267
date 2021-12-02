import type { AppDispatch, AppState } from '@app/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useAppDispatch = (): AppDispatch => useDispatch();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
