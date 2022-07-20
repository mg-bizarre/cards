import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getUserProfile = createAsyncThunk('profile/getUserProfile', async (id) => {
  const response = await fetch(`https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/${id}`);
  const data = await response.json();
  return { id, fetchedDate: Date.now(), data };
});

export const postSlice = createSlice({
  name: 'profile',
  initialState: {
    currentProfile: null,
    profiles: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setCurrentProfile: (state, action) => {
      state.currentProfile = state.profiles.find((profile) => {
        return Number(profile.id) === Number(action.payload);
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUserProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched posts to the array
        state.currentProfile = action.payload;
        state.profiles = state.profiles.concat(action.payload);
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setCurrentProfile } = postSlice.actions;

export default postSlice.reducer;
