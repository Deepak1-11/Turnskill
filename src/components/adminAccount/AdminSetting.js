import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
      <Typography className={classes.root} variant="h6">Admin Settings</Typography>

    </Toolbar>

   
    
   <div className="form">
      <table>
        <tr>
          <td><label>Admin Email</label></td>
          <td><input type="texta" placeholder="Enter Admin Username"/></td>
        </tr>
        <tr>
          <td><label> Admin Password </label></td>
          <td> <input type="password" placeholder="Enter Admin Password"/></td>
        </tr>
        <tr>
          <td><label>Confirm Password </label></td>
          <td><input type="password" placeholder="Re-enter Password"/></td>
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