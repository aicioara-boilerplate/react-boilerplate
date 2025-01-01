import storage from 'redux-persist/es/storage';
import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import getRootReducer from 'reducers/reducers.jsx';

export default (history) => {
    const rootReducer = getRootReducer(history)

    const persistedReducer = persistReducer({
        key: 'polls',
        storage: storage,
        whitelist: [''],
        // whitelist: ['nameOfAReducer'],
    }, rootReducer);

    const store = createStore(
        persistedReducer,
        {},
        compose(
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        )
    );

    const persistor = persistStore(store);

    return {store, persistor};
};