import { createSlice } from '@reduxjs/toolkit';


const initialState = {
 
     session:null
  
  
};



export const sessionSlice = createSlice({
  name: 'session',
  initialState,
 
  reducers: {
   
    totalSessions: (state, action) => {
      state.session = action.payload;
    },

   
  },
 
 
});

export const { totalSessions } = sessionSlice.actions;


export const selectSession = (state) => state.session.session;


export default sessionSlice.reducer;
