import { configureStore } from "@reduxjs/toolkit";

import globalReducer from "./global/globalSlice";
import userReducer from "./user/userSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      global: globalReducer,
      user: userReducer,
    },
  });

// Optionally, if you need these types in your project:
export type RootState = ReturnType<ReturnType<typeof makeStore>["getState"]>;
export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];
