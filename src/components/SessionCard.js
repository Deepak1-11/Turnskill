import React from "react";
import "./SessionCard.css";
import StarIcon from "@material-ui/icons/Star";
import { useDispatch } from "react-redux";
import { videoIn } from "../features/videoSlice";
import { Link } from "react-router-dom";

function SessionCard({
  key,
  title,
  courseid,
  url,
  time,
  type,
  speaker,
  rating,
}) {
  const dispatch = useDispatch();
  const newurl = `https://img.youtube.com/vi/${url}/0.jpg`;

  const videourl = `https://youtu.be/${url}`;

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
  return (
    <Link style={{ textDecoration: "none" }} to="/videodisplay">
      <div className="sessioncard" onClick={handleVideo}>
        <img className="cardimg" src={newurl} alt="img" />

        <div className="card__desc">
          <div className="card__title">
            <h3>
              <strong> {title}</strong>
            </h3>
            <div className="card__rating">
              <h6>
                {rating1.map((star) => (
                  <StarIcon style={{ color: "yellow" }} />
                ))}
              </h6>
            </div>
          </div>
          <div className="card__details">
            <h4>{type}</h4>
            <h4>{key}</h4>
            <h4>{speaker}</h4>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SessionCard;
