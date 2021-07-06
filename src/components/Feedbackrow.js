import React from "react";

function Feedbackrow({ key, feedback, sentiment, userid, title }) {
  return (
    <div>
      <div
        className="feedbackrow"
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "4px",
          paddingTop: "4px",
          margin: "8px",
          backgroundColor: sentiment > 80 ? "green" : "red",
          color: "white",
        }}
      >
        <p>{userid}</p>
        <p>{title}</p>
        <p>{feedback}</p>
        <p>{sentiment}</p>
        <p>{sentiment > 80 ? "Good 👍🏽" : "Bad 👎🏽"}</p>
      </div>
    </div>
  );
}

export default Feedbackrow;
