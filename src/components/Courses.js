import { useEffect, useState, Suspense } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import SessionCard from "./SessionCard";
import "./Courses.css";
import db from "./Firebase";
import { formatMs } from "@material-ui/core";
import { LocalDining } from "@material-ui/icons";

function Courses() {
  const [courses, setCourses] = useState([]);
  const user = useSelector(selectUser);

 

  useEffect(() => {
    db.collection("courses")
      .doc(user.uid)
      .collection("mycourses")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setCourses(
          snapshot.docs.map((doc) => ({
            videotitle: doc.data().videotitle,
            courseid: doc.data().courseid,
            url: doc.data().url,
            timestamp: doc.data().timestamp,
            type: doc.data().type,
            speaker: doc.data().speaker,
            rating: doc.data().rating,
          }))
        )
      );
  }, []);

  let mycourses = [];
  let visited = new Set();

  for (let i = 0; i < courses.length; i++) {
    if (!visited.has(courses[i].courseid)) {
      mycourses.push(courses[i]);
      visited.add(courses[i].courseid);
    }
  }

  return (
    <div
      className="livesession"
      style={{ display: "flex", width: "100%", flexWrap: "wrap" }}
    >
      <Suspense fallback={"Loading..."}>
        {" "}
        {mycourses.length > 0 ? (
          mycourses.map((session) => (
            <SessionCard
              key={session.id}
              title={session.videotitle}
              courseid={session.courseid}
              url={session.url}
              time={session.timestamp}
              type={session.type}
              speaker={session.speaker}
              rating={session.rating}
              coursecard="true"
            />
          ))
        ) : (
          <h1>You Have Not Added Any Course Till Now...</h1>
        )}
      </Suspense>
    </div>
  );
}

export default Courses;
