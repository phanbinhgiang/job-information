import { createSlice } from '@reduxjs/toolkit';

import links from '../../utils/link';

const initialState = {
  linkActive: links[0].text,
};

const linkActiveSlice = createSlice({
  name: 'linkActive',
  initialState,
  reducers: {
    changeLinkActive: (state, { payload }) => {
      state.linkActive = payload;
    },
  },
});

export const { changeLinkActive } = linkActiveSlice.actions;
export default linkActiveSlice.reducer;
