import { configureStore } from '@reduxjs/toolkit';

import userSlice from './features/user/userSlice';
import linkActiveSlice from './features/linkActive/linkActiveSlice';
import jobSlice from './features/job/jobSlice';

export const store = configureStore({
  reducer: {
    linkActive: linkActiveSlice,
    user: userSlice,
    job: jobSlice,
  },
});
