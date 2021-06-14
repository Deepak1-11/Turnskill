import { createSlice } from '@reduxjs/toolkit';

const dark ={
    theme_type:"dark",
    background__color:"#333333",
    color:"grey"
}

const light ={
    theme_type:"light",
    background__color:"white",
    color:"black"

}

const initialState = {
  theme: dark
  
};


export const themeSlice = createSlice({
  name: 'theme',
  initialState,
 
  reducers: {
   
    darkTheme: (state, action) => {
      state.theme = dark;
    },

    lightTheme: (state,action)=>{
      state.theme=light;
    }
  },
 
 
});

export const { darkTheme, lightTheme } = themeSlice.actions;


export const selectTheme = (state) => state.theme.theme;


export default themeSlice.reducer;
