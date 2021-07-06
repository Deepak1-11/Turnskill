
import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import ProfilePic from "./ProfilePic";

function EditProfile(props) {
    let id;
    let img;
    let fName;
    let lName;
    let email;
    let password;
    const updateDataHandler = (event) => {
        alert("Data updated" + " FName: " + fName + " LName: " + lName + " Email: " + email);
        event.preventDefault();
    }
    const pdata = { id: '1', img: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png', fName: 'Geetika', lName: 'Baluja', email: 'geetika@gmail.com' };
    const [isUpdateAllowed, setUpdateAllowed] = useState(false);
    const getPersonDetails = (pDetails) => {
        id = pDetails.id;
        img = pDetails.img;
        fName = pDetails.fName;
        lName = pDetails.lName;
        email = pDetails.email;
        password = pDetails.password;
        if (fName.trim().length > 0 && lName.trim().length > 0 && email.trim().length > 0) {
            setUpdateAllowed(true);
        } else {
            setUpdateAllowed(false);
        }

    }
    return (
        <div>
            <div className="py-5 my-5">
                <div className="container">
                    <h1 className="mb-5">Profile</h1>
                    <div className="bg-white shadow rounded-lg d-block d-sm-flex">
                        <div className="profile-tab-nav border-right">
                            <ProfilePic personalData={pdata} />
                            {/* <LeftBar /> */}
                        </div>
                        <div className="tab-content p-4 p-md-5" id="v-pills-tabContent" >
                            <div className="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="account-tab">
                                <form onSubmit={updateDataHandler}>
                                    <PersonalDetails onPersonalDetailsChangeHandler={getPersonDetails} personalData={pdata} />
                                    <div style={{ textAlign: "center" }}>
                                        <button type="submit" className={`btn ${isUpdateAllowed ? "btn-primary" : ""}`} disabled={!isUpdateAllowed}>Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;