import { useState } from "react";

function ProfilePic(props) {

	const fName = props.personalData.fName;
	const lName = props.personalData.lName;
	const [profileImg, setProfileImg] = useState(props.personalData.img);
	const removeProfileImg = () => {
		if (window.confirm("Your Profile Image will be deleted.")) {
			setProfileImg("https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg");
		} else { }
	}
	const changeProfileImg = () => {
		alert("Work In Progress...");
	}
	function getImgLink() {
		var file = document.getElementById("upImage").value;
		alert("");
		setProfileImg(file);
	}
	return (
		<div className="p-4">
			<div className="img-circle text-center mb-3" style={{ borderRadius: "20px", borderColor: "black", background: "gray" }}>
				<div style={{ textAlign: "right" }}><button className="material-icons " data-msg="email"
					style={{ margin: "5px 5px 0 0", color: "white", background: "transparent", border: "none" }}
					onClick={removeProfileImg}>close</button></div>
				<img src={profileImg} width="120px" height="100px" className="shadow" alt="Profile Pic" />
				<div style={{ textAlign: "right" }} ><button className="material-icons " data-msg="email"
					style={{ marginRight: "5px", color: "white", background: "transparent", border: "none" }}
					onClick={changeProfileImg}>edit</button>
					<input type="file" id="upImage" hidden onChange={getImgLink} />
				</div>
			</div>
			<h4 className="text-center">Hi, {fName} {lName}</h4>
		</div>
	);
}

export default ProfilePic;