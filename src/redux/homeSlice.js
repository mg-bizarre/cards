import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('home/fetchPosts', async (page) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
});

export const homeSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: null,
    nextPage: 1,
    totalPages: 2,
    fetchedDate: 0,
    status: 'idle',
    error: null,
  },
  reducers: {
    //
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (state.posts === null) {
          state.posts = action.payload;
        }

        state.nextPage += 1;
        state.fetchedDate = Date.now();
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// export const {  } = homeSlice.actions;

export default homeSlice.reducer;
