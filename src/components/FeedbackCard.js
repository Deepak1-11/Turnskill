import React, { useEffect, useState } from "react";
import "./FeedbackCard.css";
import Feedbackrow from "./Feedbackrow";
import db from "./Firebase";

function FeedbackCard() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    db.collection("feedbacks").onSnapshot((snapshot) =>
      setFeedbacks(
        snapshot.docs.map((doc) => ({
          userid: doc.data().userid,
          videotitle: doc.data().videotitle,
          sentiment_score: doc.data().sentiment_score,
          feedback: doc.data().feedback,
        }))
      )
    );
  }, []);

  let good = 0;
  let bad = 0;

  feedbacks.forEach((feedback) => {
    if (feedback.sentiment_score > 80) {
      good++;
    } else {
      bad++;
    }
  });

  return (
    <div className="feedbackcard">
      {feedbacks.map((obj) => (
        <Feedbackrow
          key={obj.videotitle}
          feedback={obj.feedback}
          sentiment={obj.sentiment_score}
          userid={obj.userid}
          title={obj.videotitle}
        />
      ))}

      <div className="headingFeedbackResponseBox" style={{ marginTop: "50px" }}>
        Overall Feedback Response
      </div>
      <div>
        <h4>Total Positive : {Math.trunc((good / (good + bad)) * 100)}%</h4>
      </div>
      <div>
        <h4>Total Negative : {Math.trunc((bad / (good + bad)) * 100)}%</h4>
      </div>
    </div>
  );
}

export default FeedbackCard;
