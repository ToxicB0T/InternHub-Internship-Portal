import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import {faBriefcase} from '@fortawesome/free-solid-svg-icons'
import {faCommentsDollar} from '@fortawesome/free-solid-svg-icons'

import { NavLink } from "react-router-dom";


export default function Leftside() {
  return (
    <div className="leftside">
      <div className="lestSideProfileInfo">
        <div className="profileDetails">
          <div className="profileDetailsPicture">
            <img src={"../../assets/image/person8.jpg"} alt="profile picture" />
          </div>
          <div className="profileDetailsNameAndDetails">
            <div className="profileDetailsName"><NavLink className="profileDetailsNameNavlink" to="/profile">Nidhal Khalifa</NavLink></div>
            <div className="profileDetailsInfo">
              <div className="certificate">
                Certificates: <span className="nbcertificate">3</span>
              </div>
              <div className="project">
                Projects: <span className="nbproject">3</span>
              </div>
              <div className="commendation">
                Commendations: <span className="nbcommendation">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="leftSideLinks">
        <NavLink className="leftSideLinksPosition" to="/profile"><FontAwesomeIcon icon={faUser} className='leftSideBarIconsPosition'/>Profile</NavLink>
        <NavLink  className="leftSideLinksPosition" to="/"><FontAwesomeIcon icon={faHouse} className='leftSideBarIconsPosition'/>Home</NavLink>
        <NavLink  className="leftSideLinksPosition" to="/notification/:id"><FontAwesomeIcon icon={faBell} className='leftSideBarIconsPosition'/>Notification <span className="nbNotifications">22</span></NavLink>
        <NavLink  className="leftSideLinksPosition" to="/chatbox/:id"><FontAwesomeIcon icon={faCommentsDollar} className='leftSideBarIconsPosition'/>ChatBox <span className="nbMessages">999</span></NavLink>
        <NavLink  className="leftSideLinksPosition" to="/findinternship/:id"><FontAwesomeIcon icon={faBriefcase} className='leftSideBarIconsPosition'/>Find Internship</NavLink>
        <NavLink  className="leftSideLinksPosition" to="/welcomepage"><FontAwesomeIcon icon={faRightFromBracket} className='leftSideBarIconsPosition'/>Log out</NavLink>
      </div>
    </div>
  )
}
