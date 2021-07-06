import "./Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { MdDescription } from "react-icons/md";
import { DiCodeigniter } from "react-icons/di";
import bill from "../assets/bill.jpg";
import { BsX } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Homepage() {
  var range = document.querySelector("#range"),
    number = document.querySelector("#number"),
    arc = document.querySelector("#arc"),
    length = document.querySelector("#arcLength"),
    percent = document.querySelector("#percent");

  //    length.innerHTML=arc.getTotalLength();

  // range.oninput= function(){
  //     number.value= this.value;
  //     arc.style.strokeDashoffset= this.value;
  //     percent.innerHTML= this.value + "%";
  // }

  const user = useSelector(selectUser);
  

  return (
    <div className="homepage">
      <div className="dashboard">
        {/* ---------------------------------------------------------------------------------------------------- */}
        <div style={{ position: "absolute", display: "none" }}>
          <input type="range" id="range" min="0" max="160" />
          <input type="number" id="number" min="0" max="160" />
          <div id="arcLength"></div>
        </div>
        {/* --------------------------------------------------------------------------------------------------------- */}
        <div className="main-db ">
          <div className="top-dashboard">
            <div>
              <span>Dashboard</span>
              <span>
                Hi {user.email}! We help you to prioritize your task and attention.
              </span>
            </div>
            <div>
              <img style={{ cursor: "pointer" }} src={bill}></img>
              <span style={{ whiteSpace: "nowrap" }}>{user.email}</span>
            </div>
          </div>

          <div className="card-box">
            <div className="cards card1">
              <span>Daily Status</span>
              <div className="graph">
                <span>0</span>
                <span>2hr</span>
                <span>4hr</span>
                <span>6hr</span>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thur</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
                <div>
                  <span style={{ height: "50%" }}></span>
                </div>
                <div>
                  <span style={{ height: "79%" }}></span>
                </div>
                <div>
                  <span style={{ height: "25%" }}></span>
                </div>
                <div>
                  <span style={{ height: "66%" }}></span>
                </div>
                <div>
                  <span style={{ height: "92%" }}></span>
                </div>
                <div>
                  <span style={{ height: "12%" }}></span>
                </div>
                <div>
                  <span style={{ height: "46%" }}></span>
                </div>
              </div>
              <div style={{ display: "flex", alignContent: "center" }}>
                <div style={{ marginRight: "10%" }}>
                  <span
                    style={{ color: "rgb(188,35,102)", fontSize: "1.5rem" }}
                  >
                    <DiCodeigniter />
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ color: "rgb(188,35,102)", fontWeight: "600" }}>
                    Insight
                  </span>
                  <span style={{ fontSize: "0.8rem" }}>
                    You can check your daily progress here and make yourself
                    more efficient by tracking your course
                  </span>
                </div>
              </div>
            </div>

            <div className="cards card2">
              <div className="basic-info">
                <img style={{ cursor: "pointer" }} src={bill}></img>
                <span
                  style={{
                    fontSize: "1.5rem",
                    color: "black",
                    fontWeight: "600",
                  }}
                >
                  My Profile
                </span>
                <span style={{ fontSize: "0.9rem,", color: "rgb(70, 70, 70)" }}>
                 {user.email}
                </span>
              </div>
              <div className="intro">
                <p>
                  Hi! My name is bill gates and I'm the founder of Microsoft. I
                  am good in coding and business management. I have 30 years of
                  experience as a CEO of Microsoft
                </p>
              </div>
              <hr
                style={{
                  width: "50%",
                  margin: "5% auto",
                  border: "1px solid rgb(211, 209, 209)  ",
                }}
              ></hr>
              <div className="profile-btn">
                <span>Profile</span>
              </div>
            </div>

            <div className="cards card3">
              <span
                style={{
                  position: "absolute",
                  top: "44%",
                  left: "20%",
                  fontSize: "0.7rem",
                }}
              >
                0%
              </span>
              <span
                style={{
                  position: "absolute",
                  top: "44%",
                  right: "18%",
                  fontSize: "0.7rem",
                }}
              >
                100%
              </span>
              <span
                style={{
                  color: "rgb(95,186,147)",
                  position: "absolute",
                  top: "27%",
                  left: "45%",
                  fontSize: "0.9rem",
                  padding: "1% 2%",
                  borderRadius: "50%",
                  border: "3px solid rgb(235,239,238)",
                  background: "rgb(227,254,242)",
                }}
              >
                <MdDescription />
              </span>
              <hr
                style={{
                  width: "40%",
                  margin: "5% auto",
                  border: "1px solid rgb(211, 209, 209)",
                  position: "absolute",
                  top: "50%",
                  left: "31%",
                }}
              ></hr>
              <span
                style={{
                  fontSize: "1.3rem",
                  color: "black",
                  fontWeight: "600",
                }}
              >
                Course Completion
              </span>
              <span style={{ fontSize: "0.8rem" }}>2 courses completed</span>
              <div className="bar-container">
                {/* <svg height="200" width="200">
                                        <circle cx="100" cy="90" r="85" />
                                    </svg>   */}

                <svg height="160" width="200" viewBox="0 0 100 100">
                  <path
                    id="blueArc"
                    d="M0 60 A50 50, 0, 0 1, 100 60"
                    stroke="rgb(95,186,147)"
                    strokeWidth="6.5"
                    fill="none"
                  />
                  <path
                    id="arc"
                    d="M0 60 A50 50, 0, 0 1, 100 60"
                    stroke="rgb(241,240,241)"
                    strokeWidth="7"
                    fill="none"
                  />
                  <text
                    id="percent"
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    alignmentBaseline="central"
                    style={{ fontSize: "0.8rem", fontWeight: "700" }}
                  >
                    0%
                  </text>
                </svg>
              </div>

              <div className="courses-left">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      marginRight: "5%",
                      color: "rgb(201,173,113)",
                      borderRadius: "50%",
                      border: "3px solid rgb(231, 214, 170)",
                      padding: "1% 2%",
                      background: "rgb(249,236,202)",
                    }}
                  >
                    <BsX />
                  </span>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontSize: "0.9rem",
                        color: "black",
                        fontWeight: "600",
                      }}
                    >
                      React Bootcamp
                    </span>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        color: "rgb(101, 138, 167)",
                      }}
                    >
                      Continue course
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      marginRight: "5%",
                      color: "rgb(201,173,113)",
                      borderRadius: "50%",
                      border: "3px solid rgb(231, 214, 170)",
                      padding: "1% 2%",
                      background: "rgb(249,236,202)",
                    }}
                  >
                    <BsX />
                  </span>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontSize: "0.9rem",
                        color: "black",
                        fontWeight: "600",
                      }}
                    >
                      Angular Course
                    </span>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        color: "rgb(101, 138, 167)",
                      }}
                    >
                      Continue course
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
