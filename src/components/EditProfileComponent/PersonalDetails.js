import { useEffect, useState } from 'react';
import ChangePassword from './ChangePassword';
import './PersonalDetails.css';


function PersonalDetails(props) {
    const [personalDetails, setPersonalDetails] = useState({
        id: props.personalData.id,
        fName: props.personalData.fName,
        lName: props.personalData.lName,
        email: props.personalData.email,
    });

    const [isFNameEmpty, setFNameEmpty] = useState(false);
    const [isLNameEmpty, setLNameEmpty] = useState(false);
    const [isEmailEmpty, setEmailEmpty] = useState(false);
    useEffect(() => { props.onPersonalDetailsChangeHandler(personalDetails); });

    function fNameChangeHandler(event) {
        if (event.target.value.trim().length > 0) {
            setFNameEmpty(false);
        } else {
            setFNameEmpty(true);
        }
        setPersonalDetails((preState) => { return { ...personalDetails, fName: event.target.value } });
    }

    function lNameChangeHandler(event) {
        if (event.target.value.trim().length > 0) {
            setLNameEmpty(false);
        } else {
            setLNameEmpty(true);
        }
        setPersonalDetails((preState) => { return { ...personalDetails, lName: event.target.value } });
    }

    function emailChangeHandler(event) {
        if (event.target.value.trim().length > 0) {
            setEmailEmpty(false);
        } else {
            setEmailEmpty(true);
        }
        setPersonalDetails((preState) => { return { ...personalDetails, email: event.target.value } });
    }




    function enableField(event) {
        const fieldName = event.target.dataset.msg;
        document.getElementsByName(fieldName)[0].disabled = false;
    }
    return (
        <div>

            <h3 className="mb-4">Personal Details</h3>
            <div className="row" >
                <ChangePassword personData={personalDetails} />
                <div className="col-md-6">
                    <div className={`form-group ${isFNameEmpty && "error-section"}`}>
                        <label>First Name </label><span>{isFNameEmpty && "can't be empty"}</span>
                        <div className="input-form">
                            <input type="text" name="fname" className="form-control" value={personalDetails.fName} onChange={fNameChangeHandler} disabled />
                            <span className="material-icons edit-pencil" data-msg="fname" onClick={enableField}>edit</span>
                        </div>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className={`form-group ${isLNameEmpty && "error-section"}`}>
                        <label>Last Name </label><span>{isLNameEmpty && "can't be empty"}</span>
                        <div className="input-form">
                            <input type="text" name="lname" className="form-control" value={personalDetails.lName} onChange={lNameChangeHandler} disabled />
                            <span className="material-icons edit-pencil" data-msg="lname" onClick={enableField}>edit</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={`form-group ${isEmailEmpty && "error-section"}`}>
                        <label>Email </label><span>{isEmailEmpty && "can't be empty"}</span>
                        <div className="input-form">
                            <input type="text" name="email" className="form-control" value={personalDetails.email} onChange={emailChangeHandler} disabled />
                            <span className="material-icons edit-pencil" data-msg="email" onClick={enableField}>edit</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label>Password </label>
                        <div className="input-form">
                            <input type="text" className="form-control" value="****" disabled />
                            <label htmlFor="show" className="material-icons edit-pencil ">edit</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PersonalDetails;