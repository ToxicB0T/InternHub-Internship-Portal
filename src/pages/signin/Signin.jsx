import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

import "./signin.css"
import { NavLink } from 'react-router-dom'

export default function Signin() {
  return (
    <div className="signin">
      <div className="backHome"><NavLink className="backHomeNavLink" to="/welcomepage"><FontAwesomeIcon icon={faArrowLeft} /> Back to <span className="home">Home Page</span></NavLink></div>
      <div className="signinContainer">
        <div className="signinBox">
          <div className="leftBox">
            <div className="description">Welcome to <span className="projectName">InternHub</span>, where pathways to professional growth unfold. Sign in to embark on a journey of endless opportunities, connecting students with internships that shape futures</div>
            <div className="signupbtn">
              <span className="dnthvacc">Dont Have An Account ?</span>
              <NavLink to="/signup"><button>SIGN UP NOW</button></NavLink>
            </div>
          </div>
          <div className="rightBox">
            <form action="">
              <div className="mail">
                <input type="email" required placeholder='Email'/>
              </div>
              <div className="pass">
                <input type="password" required placeholder='Password'/>
              </div>
              <div className="btn">
                <input type="submit" value="Log in"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
