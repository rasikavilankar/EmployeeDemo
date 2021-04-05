// import {createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
// import { persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage'
// import {rootReducer} from './reducers/RootReducer';

// let middleWare = [thunk];

// const persistConfig = {
//     key: 'root',
//     storage
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const persistStoreReducer = persistReducer(persistConfig, rootReducer)

// export const configStore = createStore(persistStoreReducer
//     ,applyMiddleware(...middleWare));

// export let persistor = persistStore(configStore);

import { createStore } from 'redux'
import { persistStore, persistReducer, persistCombineReducers } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import {AsyncStorage} from 'react-native'
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
