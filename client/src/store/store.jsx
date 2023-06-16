import { configureStore } from "@reduxjs/toolkit";
import { api } from '../api/api.tsx';

const stringMiddleware = () => (next) => (action) => {
    if(typeof action === 'string'){
        return next({
            type: action
        })
    }
    return next(action)
}

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware, stringMiddleware)
})

export default store;
