import './Login.css';
import { MdPersonOutline } from "react-icons/md";
import {MdLockOutline} from "react-icons/md";


function Login() {
    return (
        <div class="main" >
            <div class="welcome-mssg">
                <span>Welcome</span>
                <span>To Your Account</span>
            </div>
            

            <form class="form" action="">
                <div class="input-field">
                <input type="text" name="name" placeholder="Username / ID" />
                <MdPersonOutline size="25" color="rgb(80, 80, 80)" />
                </div>
                <div class="input-field">
                <input type="password" name="password" Placeholder="Password" />
                <MdLockOutline size="25" color="rgb(80, 80, 80)" />
                </div>
                <div class="info">
                    <div>
                        <input type="checkbox" name="remember" />
                        <label for="remember"></label>
                        <h6>Stay signed in</h6>
                    </div>
                    <div>
                        <input type="checkbox" name="change" />
                        <label for="change"></label>
                        <h6>Forget User Id or Password?</h6>
                    </div>
                </div>
                 
                <input type="submit" value="LOGIN" />
                
            </form>
            <div class="bottom">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
  <path fill="rgb(213,56,123)" fill-opacity="1" d="M0,128L30,128C60,128,120,128,180,144C240,160,300,192,360,197.3C420,203,480,181,540,170.7C600,160,660,160,720,176C780,192,840,224,900,202.7C960,181,1020,107,1080,96C1140,85,1200,139,1260,170.7C1320,203,1380,213,1410,218.7L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
  <path fill="rgb(126,58,125)" fill-opacity="1" d="M0,128L30,128C60,128,120,128,180,144C240,160,300,192,360,197.3C420,203,480,181,540,170.7C600,160,660,160,720,176C780,192,840,224,900,202.7C960,181,1020,107,1080,96C1140,85,1200,139,1260,170.7C1320,203,1380,213,1410,218.7L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
  <path fill="rgb(115,38,113)" fill-opacity="1" d="M0,128L30,128C60,128,120,128,180,144C240,160,300,192,360,197.3C420,203,480,181,540,170.7C600,160,660,160,720,176C780,192,840,224,900,202.7C960,181,1020,107,1080,96C1140,85,1200,139,1260,170.7C1320,203,1380,213,1410,218.7L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
  <path fill="rgba(0,0,0,0.3)" fill-opacity="1" d="M0,64L48,101.3C96,139,192,213,288,234.7C384,256,480,224,576,197.3C672,171,768,149,864,138.7C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>

            </div>
        </div>
    )
}

export default Login
