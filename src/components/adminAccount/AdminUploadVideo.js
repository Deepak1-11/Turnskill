import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


import './AdminFormPageStyle.css';

const useStyles = makeStyles({
    
     
  root: {
    width:"100%",
    height:"50px",
    paddingTop:"10px",
    fontSize:" 2em",
    fontStyle:"bold"
  
  },
  });
const LiveSessionPage = () => {
    const classes = useStyles();
    return (
       <>
          
        
     
          <Toolbar>
      <Typography className={classes.root} variant="h6">Upload Video</Typography>

    </Toolbar>
    
    
   <div className="form">
   <table>
        <tr>
          <td><label>Video Title   </label></td>
          <td><input type="texta" placeholder="Enter Video Title"/></td>
        </tr>
        <tr>
          <td><label> Course ID  </label></td>
          <td><input type="url" placeholder="Enter Course ID"/></td>
        </tr>
        <tr>
          <td><label> Video URL  </label></td>
          <td><input type="url" placeholder="Enter Video URL"/></td>
        </tr>
        <tr>
          <td><label> Date and Time of Session </label></td>
          <td><TextField
            id="datetime-local"
        
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
        /></td>
        </tr>
        <tr>
          <td><label>Type of Session</label></td>
          <td> <select >
        <option value="livesession">Live Session</option>
        <option value="1-1session">1-1 Session</option>             
        </select></td>
        </tr>
        <tr>
          <td><button type="submit" value="Save Changes">Save Changes</button></td>
          <td></td>
        </tr>
       </table>
      
       </div>
    
       </>
    );
}
 
export default LiveSessionPage;