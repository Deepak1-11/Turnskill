import './LiveSessions.css';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TableTemplate from './TableComponents/TableTemplate';

const useStyles = makeStyles({
    
    abRoot: {
      backgroundColor: "#9a0036",
    
    },
  });


const LiveSessions = (props) => {
  const classes = useStyles();
  return (
     <>
        
      
  <AppBar position="fixed" className={classes.abRoot}>
    <Toolbar>
      <Typography variant="h6">Attended LiveSessions</Typography>

    </Toolbar>
  </AppBar>
  <Toolbar />
  <br/>
  <Container maxWidth="md">
  <TableTemplate {...props}  />
  </Container>
     </>
  );
}

export default LiveSessions;
