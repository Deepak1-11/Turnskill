import { useState } from "react";

import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import "./AdminFormPageStyle.css";
import db from "../Firebase";
import { useHistory } from "react-router-dom";
import firebase from 'firebase';

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
  const [videotitle, setVideotitle] = useState("");
  const [courseid, setCourseid] = useState("");
  const [url, setUrl] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("Live Session");
  const [speaker, setSpeaker] = useState("");
  const [rating, setRating] = useState("");

  const history = useHistory();

  const handleUpload = () => {
    if (url && videotitle && courseid && type)
    {

     
      db.collection(type==="Live Session"?"livesessions":"privatesessions")
        .add({
          videotitle: videotitle,
          courseid: courseid,
          url: url,
           timestamp:firebase.firestore.FieldValue.serverTimestamp(),
          type: type,
          speaker:speaker,
          rating:rating
        })
        .then(() => {
          setCourseid("");
          setVideotitle("");
          setDate("");
          setUrl("");
          setType("Live Session");
        })
        .then(history.push("/adminaccount"))

        .catch((err) => alert(err.message));

      }
    else 
    alert("Please fill all details");
  };
  const classes = useStyles();
  return (
    <>
      <Toolbar>
        <Typography className={classes.root} variant="h6">
          Upload Video
        </Typography>
      </Toolbar>

      <div className="form">
        <table>
          <tr>
            <td>
              <label>Video Title </label>
            </td>
            <td>
              <input
                onChange={(e) => setVideotitle(e.target.value)}
                type="texta"
                placeholder="Enter Video Title"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label> Course ID </label>
            </td>
            <td>
              <input
                onChange={(e) => setCourseid(e.target.value)}
                placeholder="Enter Course ID"
              />
            </td>
          </tr>
          <tr>
          <td>
            <label> Speaker/Coach </label>
          </td>
          <td>
            <input
              onChange={(e) => setSpeaker(e.target.value)}
              placeholder="Enter Speaker Name"
            />
          </td>
        </tr>
          <tr>
            <td>
              <label> Video URL </label>
            </td>
            <td>
              <input
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter Video URL"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label> Rating </label>
            </td>
            <td>
              <input
                onChange={(e) => setRating(e.target.value)}
                placeholder="Enter Rating"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label> Date and Time of Session </label>
            </td>
            <td>
              <TextField
                id="datetime-local"
                onChange={(e) => setDate(e.target.value)}
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Type of Session</label>
            </td>
            <td>
              {" "}
              <select onChange={(e) => setType(e.target.value)}>
                <option value="livesession">Live Session</option>
                <option value="1-1 Session">1-1 Session</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={handleUpload}
                style={{ height: "60px" }}
                type="submit"
                value="Save Changes"
              >
                Upload
              </button>
            </td>
            <td></td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default LiveSessionPage;
