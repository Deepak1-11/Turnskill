import './Sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";
import { MdPhotoCamera } from "react-icons/md";
import { MdComment } from "react-icons/md";
import { MdAirplay } from "react-icons/md";
import { MdPublic } from "react-icons/md";
import { MdAndroid } from "react-icons/md";
import { MdVideocam } from "react-icons/md";
import {Link} from 'react-router-dom';
import { auth } from './Firebase';

function Sidebar() {

    const handleSignOut = ()=>{

        auth.signOut();
    }
    return (
        <div className="main">
        <Container fluid>
            <Row>
            <Col style={{padding:"0"}} className="sidebar">
                        <div className="logo">
                            <h4>Turnskill</h4>
                        </div>
                        <div className="menu">
                            <h6>MENU</h6>
                            <div >
                                <span><MdPublic /></span>
                               <Link to="/"> <span>Dashboard</span></Link>
                            </div>
                            <div>
                                <span><MdVideocam /></span>
                               <Link to ="/live-sessions"> <span>Live Sessions</span></Link>
                            </div>
                            <div>
                                <span><MdAirplay /></span>
                                <Link to="/courses"><span>My Courses</span></Link>
                            </div>
                            <div>
                                <span><MdComment /></span>
                               <Link to="/1-1"> <span>1-1 Sessions</span></Link>
                            </div>
                            <div>
                                <span><MdAndroid /></span>
                                <span>Feedbacks</span>
                            </div>
                            
                        </div>
                        <div className="settings">
                            <h6>SETTINGS</h6>
                            <div>
                                <span><MdPublic /></span>
                            <Link to="/"><span>Dashboard</span></Link>
                            </div>
                            <div>
                                <span><MdPhotoCamera /></span>
                                <span>Photos</span>
                            </div>
                            <div>
                                <span><MdAirplay /></span>
                                <span>Stats</span>
                            </div>

                            <div>
                           
                            <span onClick={handleSignOut}>SignOut</span>
                        </div>
                        </div>
                    </Col>

            </Row>
        </Container>
        </div>
    )
}

export default Sidebar
