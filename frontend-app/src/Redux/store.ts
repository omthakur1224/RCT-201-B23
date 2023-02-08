import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux/es/exports';
import {combineReducers, legacy_createStore} from 'redux'
import { AppReducer } from './app/app.reducer';
const rootReducers=combineReducers({
    AppReducer
})
export const store= legacy_createStore(rootReducers);

export type APP_DISPATCH = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => APP_DISPATCH = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;