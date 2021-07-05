import React, { useEffect, useState } from "react";
import db from "./Firebase";
import SessionCard from "./SessionCard";

function LiveSessions() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    db.collection("livesessions").onSnapshot((snapshot) =>
      setSessions(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          videotitle: doc.data().videotitle,
          courseid: doc.data().courseid,
          url: doc.data().url,
          timestamp: doc.data().timestamp,
          type: doc.data().type,
          speaker:doc.data().speaker,
          rating:doc.data().rating
        }))
      )
    );
  }, []);

  console.log(sessions);
  return (
    <div className="livesession" style={{display:'flex',width:"100%",flexWrap:"wrap"}}>
      {sessions.map((session) => (
        <SessionCard
          key={session.id}
          title={session.videotitle}
          courseid={session.courseid}
          url={session.url}
          time={session.timestamp}
          type={session.type}
          speaker={session.speaker}
          rating={session.rating}
        />
      ))}
    </div>
  );
}

export default LiveSessions;

/*import './LiveSessions.css';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TableTemplate from './TableComponents/TableTemplate';

const useStyles = makeStyles({
    

  root: {
    width:"100%",
    height:"50px",
    paddingTop:"10px",
    fontSize:" 2em",
    fontStyle:"bold"
  
  },
  });
const LiveSessions = ()  => {
    const classes = useStyles();
    return (
       <>
          
        
    
      
    
    <Container maxWidth="md">
    
    <Toolbar>
        <Typography className={classes.root} variant="h6">Attended Live Sessions</Typography>

      </Toolbar>
 
    <TableTemplate  />
    </Container>
       </>
    );
}
 

export default LiveSessions;*/
