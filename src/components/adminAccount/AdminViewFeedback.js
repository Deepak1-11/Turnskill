import React from "react";

import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FeedbackCard from "../FeedbackCard";
import "./FeedbackStyle.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "50px",
    paddingTop: "10px",
    fontSize: " 2em",
    fontStyle: "bold",
  },
});
const LiveSessionPage = () => {
  const classes = useStyles();
  return (
    <>
      <Toolbar>
        <Typography className={classes.root} variant="h6">
          View Feedback: Submitted by Users
        </Typography>
      </Toolbar>

      <div>
        <FeedbackCard />
      </div>
      <div className="overallFeedbackResponseBox"></div>
    </>
  );
};

export default LiveSessionPage;
