import React from 'react';
import { useState } from 'react';
import './ChangePassword.css';

const ChangePassword = (props) => {

    const [isVerifyBtnClicked, setVerifyBtnClicked] = useState(false);
    const [isSaveBtnClicked, setSaveBtnClicked] = useState(false);
    const [isOldPasswordValid, setOldPasswordValid] = useState(false);
    const [isNewPasswordValid, setNewPasswordValid] = useState(false);
    const [isOldPassEmpty, setOldPassEmpty] = useState(true);
    const [isNewPassEmpty, setNewPassEmpty] = useState(false);
    const [isConfirmPassEmpty, setConfirmPassEmpty] = useState(false);
    const [npass, setNPass] = useState("");
    const [cpass, setCPass] = useState("");
    const [oldpass, setOldpass] = useState("");
    const personData = props.personData;

    const verifyOldPassword = () => {
        const personId = personData.id
        //API CALL For Password Validation
        setVerifyBtnClicked(true);
        if (oldpass.trim().length > 0) {
            setNewPassEmpty(true);
            setConfirmPassEmpty(true);
            setOldPasswordValid(true);
        }
        else {
            setOldPasswordValid(false);
        }
    }
    const saveNewPassword = () => {
        setSaveBtnClicked(true);
        setNPass(document.getElementsByName("npass")[0].value);
        setCPass(document.getElementsByName("npass")[0].value)
        if (validateNewPassword(document.getElementsByName("npass")[0].value) && (npass === cpass)) {
            setNewPasswordValid(true);
            const personId = personData.id
            //API CALL For Password Updation
            closePasswordModal();

        } else {
            setCPass("");
            setNPass("");
            setNewPasswordValid(false);
        }
    }
    const validateNewPassword = (pass) => {
        if (pass.trim().length > 0) {
            return true;
        } else {
            return false;
        }

    }
    const newPassHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setNewPassEmpty(false);
        } else {
            setNewPassEmpty(true);
        }
        setNPass(event.target.value);

    }
    const confirmPassHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setConfirmPassEmpty(false);
        } else {
            setConfirmPassEmpty(true);
        }
        setCPass(event.target.value);
    }
    const oldPassHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setOldPassEmpty(false);
        } else {
            setOldPassEmpty(true);
        }

        setOldpass(event.target.value);
    }
    const resetPasswordModal = () => {
        setOldPassEmpty(true);
        setNewPassEmpty(false);
        setConfirmPassEmpty(false);
        setOldPasswordValid(false);
        setVerifyBtnClicked(false);
        setSaveBtnClicked(false);
        setCPass("");
        setNPass("");
        setOldpass("");
    }
    const closePasswordModal = () => {
        resetPasswordModal();
        alert("Password Changed Successfully");
        document.getElementById("show").checked = false;
    }
    return (
        <div className="password-modal col-md-9">
            <input type="checkbox" id="show" />
            <div className="password-sub-modal">
                <div>
                    <label htmlFor="show" className="close-btn material-icons" onClick={resetPasswordModal}>close</label>
                </div>
                <div className="text">CHANGE PASSWORD</div>
                <div className={`form-group ${isVerifyBtnClicked ? isOldPasswordValid ? "" : "error-section" : ""}`}>
                    <div className={`form-group ${isOldPassEmpty && "error-section"}`}>
                        <label>Current Password</label>
                        <div className="input-form">
                            <input className="form-control" name="oldpass" value={oldpass} onChange={oldPassHandler} type="password" disabled={isOldPasswordValid} />
                        </div>
                        <button type="button" className={`btn ${isOldPassEmpty || isOldPasswordValid ? 'btn-light' : 'btn-primary'}`} onClick={verifyOldPassword} disabled={isOldPassEmpty || isOldPasswordValid}>Verify</button>

                        <span>{isVerifyBtnClicked ? isOldPasswordValid ? "" : "Wrong Password" : ""}</span>
                    </div>
                </div>
                <div className={`form-group ${isSaveBtnClicked ? isNewPasswordValid ? "" : "error-section" : ""}`}>
                    <div className={`form-group ${isNewPassEmpty && 'error-section'}`}>
                        <label>New Password</label>
                        <div className="input-form">
                            <input className="form-control" name="npass" type="password" value={npass} onChange={newPassHandler} disabled={!isOldPasswordValid} />
                        </div>
                    </div>
                    <div className={`form-group ${isConfirmPassEmpty && 'error-section'}`}>
                        <label>Confirm Password</label>
                        <div className="input-form">
                            <input className="form-control" name="cpass" type="password" value={cpass} onChange={confirmPassHandler} disabled={!isOldPasswordValid} />
                        </div>
                        <button type="button" className={`btn ${!isOldPasswordValid || isNewPassEmpty || isConfirmPassEmpty ? 'btn-light' : 'btn-primary'}`} onClick={saveNewPassword} disabled={!isOldPasswordValid || isNewPassEmpty || isConfirmPassEmpty}>Save</button>

                        <span>
                            {isSaveBtnClicked ? isNewPasswordValid ? "" : "Password doesn't match" : ""}
                        </span>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;