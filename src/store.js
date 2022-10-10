import { configureStore } from '@reduxjs/toolkit';

import userSlice from './features/user/userSlice';
import linkActiveSlice from './features/linkActive/linkActiveSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    linkActive: linkActiveSlice,
  },
});
