import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './FormPageStyle.css';

const useStyles = makeStyles({
    
  root: {
    width:"100%",
    height:"50px",
    paddingTop:"10px",
    fontSize:" 2em",
    fontStyle:"bold"
  
  },
  });
const UserSetting= () => {
  const classes = useStyles();
  return (
     <>
        
        
  
        <Toolbar>
      <Typography className={classes.root} variant="h6">User Settings</Typography>

    </Toolbar>

  
 <div className="form">
   <table>
     <tr>
       <td><label>First Name</label></td>
       <td><input type="texta" placeholder="Enter first"/></td>
     </tr>
     <tr>
       <td><label>Last Name</label></td>
       <td><input type="texta" placeholder="Enter last name"/></td>
     </tr>
     <tr>
       <td><label>Email ID</label></td>
       <td><input type="texta" placeholder="Enter email id"/></td>
     </tr>
     <tr>
       <td><label>Password</label></td>
       <td><input type="password" placeholder="Enter Password"/></td>
     </tr>
     <tr>
       <td><label>Skill 1</label></td>
       <td><input type="texta" placeholder="Enter Skill 1"/></td>
     </tr>
     <tr>
       <td><label>Skill 2</label></td>
       <td><input type="texta" placeholder="Enter Skill 2"/></td>
     </tr>
     <tr>
       <td><label>Skill 3</label></td>
       <td><input type="texta" placeholder="Enter Skill 3"/></td>
     </tr>
   </table>
     
      <button type="submit" value="Save Changes">Save Changes</button>
      </div>

     </>
    );
}
 
export default UserSetting;