import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux/es/exports';
import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunk from 'redux-thunk';
import { appReducer } from './app/app.reducer';
import { authReducer } from './auth/auth.reducer';

const rootReducers=combineReducers({
    appReducer,
    authReducer

})
export const store= legacy_createStore(rootReducers,applyMiddleware(thunk));

export type APP_DISPATCH = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => APP_DISPATCH = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;