import { createStore } from 'redux'
import { persistStore, persistReducer, persistCombineReducers } from 'redux-persist'
import rootReducer from './RootReducers'
import createSensitiveStorage from 'redux-persist-sensitive-storage'

const sensitiveStorage = createSensitiveStorage({
    keychainService: "myKeychain",
    sharedPreferencesName: "mySharedPrefs"
});

const persistConfig = { key: 'root', storage: sensitiveStorage }

const persistStoreReducer = persistReducer(persistConfig, rootReducer)

export let storePersist = createStore(persistStoreReducer)

export let persistor = persistStore(storePersist)
