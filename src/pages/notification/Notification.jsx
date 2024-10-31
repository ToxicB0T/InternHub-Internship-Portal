import data from "../../data"
import "./notification.css"

export default function Notification() {

  return (
    <div className="notif">
      {Object.values(data).map(user => (
        <div key={user.name} className="notifBox">
          <div className="notifBoxPicture">
            <img src={user.profileImg} alt="profile pic" />
          </div>
          <div className="notifBoxContenent">
            <div className="notifBoxContenentTop"><span className="profileNames">{user.name}</span>reacted to your Post</div>
            <div className="notifBoxContenentDate">8 hours ago</div>
          </div>
        </div>
      ))}

    </div>
  )
}
