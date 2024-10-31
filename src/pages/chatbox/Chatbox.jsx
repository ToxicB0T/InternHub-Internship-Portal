import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import company from "../../company";
import "./chatbox.css";
import { NavLink } from "react-router-dom";

export default function Chatbox() {
  const [activeChat, setActiveChat] = useState(null);

  const toggleChatContainer = (companyId) => {
    setActiveChat((prevActiveChat) => (prevActiveChat === companyId ? null : companyId));
  };

  return (
    <div className="chatbox">
      {Object.values(company).map((company) => (
        <div key={company.name} className='chatboxTest'>
          <div
            className="chatDiv"
            onClick={() => toggleChatContainer(company.name)}
          >
            <div className="chatDivPicture">
              <img src={company.profileImg} alt="profile pic" />
            </div>
            <div className="chatDivContenent">
              <div className="chatDivContenentTop">
                <span className="companyNames">{company.name}</span>Send you a message
              </div>
              <div className="chatDivContenentDate">8 hours ago</div>
            </div>
          </div>
          <div className={`chatContainer ${activeChat === company.name ? 'active' : ''}`}>
            <div className="chatContainerInfo">
              <div className="chatContainerInfoPicture">
                <img src={company.profileImg} alt="company picture" />
              </div>
              <div className="chatContainerInfoName">
                <NavLink className="chatContainerInfoNameNavlink">{company.name}</NavLink>
              </div>
              <div className="chatContainerInfoTime">00:00</div>
            </div>
            <div className="chatContainerContenent">
              test
            </div>
            <div className="chatContainerSend">
              <form action="">
                <input type="text" placeholder='Send a message' className="chatContainerSendMessage" />
                <span className="chatContainerSendFile"><FontAwesomeIcon className='chatContainerSendFileIcon' icon={faFile} /></span>
                <span className="chatContainerSendBtn"><FontAwesomeIcon className='chatContainerSendBtnIcon' icon={faPaperPlane} /></span>
              </form>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
