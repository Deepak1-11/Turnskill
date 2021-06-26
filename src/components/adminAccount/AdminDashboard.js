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
      <Typography className={classes.root} variant="h6">Admin Dasboard</Typography>

    </Toolbar>

   
    
   <div className="form">
   <table>
     <tr>
       <td><label>Total Users Registered</label></td>
       <td>5</td>
     </tr>
     <tr>
       <td><label>Total Live Session Recordings</label></td>
       <td>2</td>
     </tr>
     <tr>
       <td><label>Total 1-1 Session Recordings</label></td>
       <td>3</td>
     </tr>
     <tr>
       <td><label>Total Courses Uploaded</label></td>
       <td>4</td>
     </tr>
     
   </table>
     
       
        </div>
    
       </>
    );
}
 
export default LiveSessionPage;