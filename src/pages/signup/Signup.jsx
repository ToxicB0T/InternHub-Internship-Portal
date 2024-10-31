import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

import "./signup.css"
import { NavLink } from 'react-router-dom'

export default function Signup() {
  return (
    <div className="signup">
      <div className="backHome"><NavLink to="/welcomepage" className="backHomeNavLink"><FontAwesomeIcon icon={faArrowLeft} /> Back to <span className="home">Home Page</span></NavLink></div>
      <div className="signupContainer">
        <div className="signupBox">
          <div className="leftBox">
            <div className="description">Join <span className="projectName">InternHub</span> and become part of a vibrant community dedicated to nurturing talent and unlocking potential. Sign up now to access exclusive internship opportunities and kickstart your career journey</div>
            <div className="signinbtn">
              <span className="dnthvacc">Have An Account ?</span>
              <NavLink to="/signin"><button>LOG IN</button></NavLink>
            </div>
          </div>
          <div className="rightBox">
            <form action="">
              <div className="card">
                <input type='text' required placeholder='Card Number'/>
              </div>
              <div className="mail">
                <input type="email" required placeholder='Email'/>
              </div>
              <div className="pass">
                <input type="password" required placeholder='Password'/>
              </div>
              <div className="btn">
                <input type="submit" value="Register"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
