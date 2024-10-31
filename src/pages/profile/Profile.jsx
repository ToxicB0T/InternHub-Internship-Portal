import data from "../../data"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleExclamation} from '@fortawesome/free-solid-svg-icons'

import { NavLink, Outlet } from "react-router-dom"
import "./profile.css"

export default function Profile() {

  return (

    <div className="profileContainer">
      <div className="profileContainerInfo">
        <div className="profileContainerInfoTop">
          <div className="profileContainerInfoImage">
            <img src={data.user8.profileImg} alt="Profile Picture"  />
          </div>
          <div className="profileContainerInfoCenter">
            <div className="profileContainerInfoName">Khalifa Nidhal</div>
            <div className="profileContainerInfoUniversity">National School of Advanced Sciences and Technologies Borj Cedria</div>
          </div>
          <div className="profileContainerInfoStrikes">
            <span className="strikeIcon"><FontAwesomeIcon className="StikeIconClass" icon={faCircleExclamation} /></span>
            <span className="numberOfStrike">3 Strikes</span>
          </div>
        </div>
        <div className="profileContainerInfoDown">
          <div className="profileContainerInfoDownAbout">
            {data.user1.description}
          </div>
        </div>
      </div>
      <div className="profileContainerdataSelector">
        <NavLink className="profileContainerdataSelectorNavlinkProject" to="/profile/projects"><span className="selectProject">Projects</span></NavLink>
        <NavLink className="profileContainerdataSelectorNavlinkCertificate" to="/profile/certificates"><span className="selectCertificate">Certificates</span></NavLink>
        <NavLink className="profileContainerdataSelectorNavlinkCommendation" to="/profile/commendations"><span className="selectCommendation">Commendations</span></NavLink>
      </div>
      <div className="profileContainerdataInfo">
        <Outlet></Outlet>
      </div>
    </div>
  )
}
