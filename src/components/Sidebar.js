import './Sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";
import { MdPhotoCamera } from "react-icons/md";
import { MdComment } from "react-icons/md";
import { MdAirplay } from "react-icons/md";
import { MdPublic } from "react-icons/md";
import { MdAndroid } from "react-icons/md";
import { MdVideocam } from "react-icons/md";

function Sidebar() {
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
                                <span>Dashboard</span>
                            </div>
                            <div>
                                <span><MdVideocam /></span>
                                <span>Live Sessions</span>
                            </div>
                            <div>
                                <span><MdAirplay /></span>
                                <span>My Courses</span>
                            </div>
                            <div>
                                <span><MdComment /></span>
                                <span>1-1 Sessions</span>
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
                                <span>Dashboard</span>
                            </div>
                            <div>
                                <span><MdPhotoCamera /></span>
                                <span>Photos</span>
                            </div>
                            <div>
                                <span><MdAirplay /></span>
                                <span>Stats</span>
                            </div>
                        </div>
                    </Col>

            </Row>
        </Container>
        </div>
    )
}

export default Sidebar
