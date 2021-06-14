import Registerform from "./Registerform";
import RegisterImg from '../assets/registerimg.svg';

function Signup() {
    return (
        <div className="container mt-4 " style={{minHeight:"100vh"}}>
        <div className="row" >
          <div className="col-md-7">
            <Registerform />
           
          </div>
         
          <div className="col-md-5 my-auto">

          <img className="img-fluid w-100" src={RegisterImg} alt=""/>

            
          </div>
        </div>
      </div>
    )
}

export default Signup
