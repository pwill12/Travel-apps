import { configureStore, combineReducers } from "@reduxjs/toolkit";


import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import UserSlice from "../user/UserSlice";
import RegisterSlice from "../user/RegisterSlice";
import { AsyncLocalStorage } from "async_hooks";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    blacklist: ['registeruser']
};

const RegisterConfig = {
    key: 'registeruser',
    version: 1,
    storage,
    blacklist: ['error']
};

const rootReducer = combineReducers({user: UserSlice, registeruser: persistReducer(RegisterConfig, RegisterSlice)});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);
export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
