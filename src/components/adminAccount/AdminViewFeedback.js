import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TableTemplate from './TableComponents/TableTemplate';
import './FeedbackStyle.css';

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
      <Typography className={classes.root} variant="h6">View Feedback: Submitted by Users</Typography>

    </Toolbar>

   
    
   <div>
    <TableTemplate/>
        </div>
    <div className="overallFeedbackResponseBox">
        <div className="headingFeedbackResponseBox" >Overall Feedback Response</div>
        <div>Total Positive : 80%</div>
        <div>Total Negative : 10%</div>
        <div>Total Neutral  : 10%</div>
    </div>
       </>
    );
}
 
export default LiveSessionPage;