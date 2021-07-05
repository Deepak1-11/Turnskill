import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import SessionCard from './SessionCard';
import './Courses.css';
import db from './Firebase';

function Courses() {
    const [courses, setCourses] = useState([]);
    const user = useSelector(selectUser);

    console.log(user);
    

    useEffect(() => {
      db.collection("courses").doc(user.uid).collection("mycourses").onSnapshot((snapshot) =>
        setCourses(
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

    console.log(user);

    const len = courses.length;
  

    return (
     <div className="livesession" style={{display:'flex',width:"100%",flexWrap:"wrap"}}>
      {courses.length>0? courses.map((session) => (
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
        )):<h1>You Have Not Added Any Course Till Now...</h1>}
      </div>
    );
}

export default Courses
