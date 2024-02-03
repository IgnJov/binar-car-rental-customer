import { configureStore } from '@reduxjs/toolkit'
import bankReducer from "../redux/features/bankSlice";
import getOrderReducer from './features/getOrderSlice';
import createOrderReducer from './features/createOrderSlice';
import slipUploadReducer from "../redux/features/slipSlice";

export const store = configureStore({
  reducer: {
    bank: bankReducer,
    createOrderSlice: createOrderReducer,
    getOrderSlice: getOrderReducer,
    slip: slipUploadReducer,
  },
});
