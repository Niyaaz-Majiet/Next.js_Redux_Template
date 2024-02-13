import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './rootReducer';

export const setUpStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type AppStore = ReturnType<typeof setUpStore>
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch']