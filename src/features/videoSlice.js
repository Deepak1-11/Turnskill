import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  video: {
      url:"https://youtu.be/pRWD-YpseSU",
      title:"Obsession with speed"
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
