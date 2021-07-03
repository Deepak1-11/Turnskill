
import userReducer from '../features/userSlice';
import themeReducer from '../features/themeSlice';
import videoReducer from '../features/videoSlice';

import {createStore , combineReducers}  from 'redux';

function saveToLocalStorage(state){


  try{

    const serializedState = JSON.stringify(state);
    localStorage.setItem('state',serializedState)

  }catch(e){

    console.log(e);




  }
}

function loadFromLocalStorage(){

try{
  const serializedState = localStorage.getItem('state');
  if(serializedState==null)
  return undefined;

  return JSON.parse(serializedState);

}catch(e){
  console.log(e);

  return undefined;


}


}


const persistedState = loadFromLocalStorage();

const rootReducer =  combineReducers({
 

  user:userReducer,
  theme:themeReducer,
  video:videoReducer
  
  
});


export  const store = createStore(
  rootReducer,
  persistedState,
)

store.subscribe(()=>saveToLocalStorage(store.getState()))



