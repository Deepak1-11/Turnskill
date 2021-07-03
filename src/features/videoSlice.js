import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  video: {
      url:"https://youtu.be/jD_pblIYW1w",
      title:"The Art of being Yourself"
  }
  
};



export const videoSlice = createSlice({
  name: 'video',
  initialState,
 
  reducers: {
   
    videoIn: (state, action) => {
      state.video = action.payload;
    },

  
  },
 
 
});

export const { videoIn} = videoSlice.actions;


export const selectVideo = (state) => state.video.video;


export default videoSlice.reducer;
