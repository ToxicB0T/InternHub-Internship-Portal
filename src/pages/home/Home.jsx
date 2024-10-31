import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import {faComment} from '@fortawesome/free-solid-svg-icons'

import { NavLink } from "react-router-dom";

import data from "../../data"

import "./home.css"

export default function Home() {
  return (
    <div className="home">
      {Object.values(data).map(user => (
        <div key={user.name} className="homePage">
          <div className="homePagePrifileInfo">
            <div className="homePagePrifileInfoPicture">
              <img src={user.profileImg} alt="profile picture" />
            </div>
            <div className="homePagePrifileInfoProfileName">
              <NavLink className="NavlinkHomePagePrifileInfoProfileName">{user.name}</NavLink>
            </div>
            <div className="homePagePrifileInfoDate">
              1d
            </div>
          </div>
          <div className="homePageDescription">
            i get this certificate
          </div>
          <div className="homePagePicture">
            <img src={user.certificateImg} alt="certificate picture" />
          </div>
          <div className="homePageReactInfo">
            <div className="reactNumber">
            <FontAwesomeIcon className='upvoteIcon' icon={faArrowUp} /> 20
            </div>
            <div className="commentsNumber">
              20 comment
            </div>
          </div>
          <hr className='homePageHr'/>
          <div className="homePageReact">
            <div className="upvoteBtnDiv">
            <FontAwesomeIcon className='upvoteBtn' icon={faArrowUp} /> Upvote
            </div>
            <div className="commentBtnDiv">
              <FontAwesomeIcon className='commentBtn' icon={faComment} /> Comment
            </div>
          </div>
        </div>
      ))}

    </div>
  )
  
}
