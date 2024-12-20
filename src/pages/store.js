import { configureStore } from '@reduxjs/toolkit';
import salesReducer from './sale';

export const store = configureStore({
    reducer: {
        sales: salesReducer,
    },
});

export default store;