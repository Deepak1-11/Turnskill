import React,{useState,useEffect} from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import './AdminFormPageStyle.css';
import db from '../Firebase';
import { useSelector } from 'react-redux';
import { selectSession } from '../../features/sessionSlice';
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

  const [users, setUsers] = useState([]);

  const sessions = useSelector(selectSession);
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) =>
      setUsers(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data:doc.data()
         
        }))
      )
    );
  }, []);
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
       <td>{users.length}</td>
     </tr>
     <tr>
       <td><label>Total Live Session Recordings</label></td>
       <td>{sessions.livecount}</td>
     </tr>
     <tr>
       <td><label>Total 1-1 Session Recordings</label></td>
       <td>{sessions.privatecount}</td>
     </tr>
     <tr>
       <td><label>Total Courses Uploaded</label></td>
       <td>{sessions.livecount+sessions.privatecount}</td>
     </tr>
     
   </table>
     
       
        </div>
    
       </>
    );
}
 
export default LiveSessionPage;