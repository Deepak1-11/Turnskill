import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
const Feedback = () => {
    const classes = useStyles();
    return (
       <>
          
          
    
          <Toolbar>
        <Typography className={classes.root} variant="h6">Give Feedback</Typography>

      </Toolbar>
 
    
   <div className="form">
       <div className="form-field">
        <label>
        Please enter your feedback below.      
        </label>
        </div>
        {/* <div className="form-field">
          <label>
          Enter the session name
          </label>&nbsp;&nbsp;&nbsp;
          <input list="sessionName" name="sessionName" />
          <datalist id="sessionName">
            <option value="liveSession1"/>
            <option value="liveSession2"/>
            <option value="CourseName1"/>
            <option value="CourseName2"/>
            <option value="1-1Session1"/>
            <option value="1-1Session2"/>
          </datalist>
        </div> */}
        <div id="feedbackbox">
        {/* <label>
        Enter Feedback   
        </label><br/> */}
        <textarea rows="7" cols="80" placeholder="Write your feedback here" style={{resize: "none"}}  maxlength="150"></textarea>
        </div>
        <button type="submit" value="Save Changes">Send Feedback</button>
        </div>

       </>
    );
}
 
export default Feedback;