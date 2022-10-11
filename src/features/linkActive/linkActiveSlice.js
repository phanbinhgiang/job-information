import { createSlice } from '@reduxjs/toolkit';

import { getLinkActiveFromLocalStorage } from '../../utils/localStorage';
import { changeLinkActiveLocalStorage } from '../../utils/localStorage';
import links from '../../utils/link';

const initialState = {
  linkActive: getLinkActiveFromLocalStorage(),
};

const linkActiveSlice = createSlice({
  name: 'linkActive',
  initialState,
  reducers: {
    changeLinkActive: (state, { payload }) => {
      state.linkActive = payload;
      changeLinkActiveLocalStorage(payload);
    },
    setLinkDefault: (state) => {
      state.linkActive = links[0].text;
    },
  },
});

export const { changeLinkActive, setLinkDefault } = linkActiveSlice.actions;
export default linkActiveSlice.reducer;
