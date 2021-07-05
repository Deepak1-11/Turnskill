import React from "react";
import "./SessionCard.css";
import StarIcon from "@material-ui/icons/Star";
import { useDispatch, useSelector } from "react-redux";
import { videoIn } from "../features/videoSlice";
import { Link } from "react-router-dom";
import db from "./Firebase";
import firebase from "firebase";
import { selectUser } from "../features/userSlice";

function SessionCard({
  key,
  title,
  courseid,
  url,
  time,
  type,
  speaker,
  rating,
  coursecard
}) {
  const dispatch = useDispatch();
  const newurl = `https://img.youtube.com/vi/${url}/0.jpg`;

  const videourl = `https://youtu.be/${url}`;
  const user = useSelector(selectUser);

  let rating1 = [];

  while (rating > 0) {
    rating1.push("star");
    rating--;
  }

  console.log(title);

  const handleVideo = () => {
    dispatch(
      videoIn({
        url: videourl,
        title: title,
      })
    );
  };

  const handleCourseIn = ()=>{

    db.collection("courses").doc(user.uid).collection("mycourses")
    .add({
      videotitle: title,
      courseid: courseid,
      url: url,
       timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      type: type,
      speaker:speaker,
      rating:rating
    })


  }
  return (
    <Link style={{ textDecoration: "none" }} to="/videodisplay">
      <div className="sessioncard" onClick={handleVideo}>
        <img className="cardimg" src={newurl} alt="img" />

        <div className="card__desc">
          <div className="card__title">
            <h4>
              <strong> {title}</strong>
            </h4>
            <div className="card__rating">
              <h6>
                {rating1.map((star) => (
                  <StarIcon style={{ color: "yellow" }} />
                ))}
              </h6>
            </div>
          </div>
          <div className="card__details">
            <h5>{type}</h5>
            
            <div className="enroll_div">
            <h5>{speaker}</h5>
          {!coursecard?  <button className="enrollnow" onClick={handleCourseIn}>Add to list</button>:<button className="enrollnow" >Watch Now</button>}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SessionCard;
