import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getPost = createAsyncThunk('post/getPost', async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();
  return { id, fetchedDate: Date.now(), data };
});

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    currentPost: null,
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setCurrentPost: (state, action) => {
      state.currentPost = state.posts.find((post) => {
        return Number(post.id) === Number(action.payload);
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched posts to the array
        state.currentPost = action.payload;
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(getPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setCurrentPost } = postSlice.actions;

export default postSlice.reducer;
