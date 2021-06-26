import './LiveSessions.css';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TableTemplate from './TableComponents/TableTemplate';

const useStyles = makeStyles({

    root: {
        width: "100%",
        height: "50px",
        paddingTop: "10px",
        fontSize: " 2em",
        fontStyle: "bold"

    },
});

function Onetwoone() {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="md">

                <Toolbar>
                    <Typography className={classes.root} variant="h6">Attended 1-1 Sessions</Typography>

                </Toolbar>

                <TableTemplate />
            </Container>
        </>
    )
}

export default Onetwoone
