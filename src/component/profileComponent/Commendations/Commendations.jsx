import company from "../../../company"
import "./commendations.css"

export default function Commendations() {
  return (
    <div className="commendationsConainer">
        <div className="companyInfo">
          <div className="companyPic">
            <img src={company.user1.profileImg} alt="company picture" />
          </div>
          <div className="companyName">{company.user1.name}</div>
        </div>
        <div className="commendationContent">
        Je recommande fortement Nidhal Khalifa pour ses compétences exceptionnelles en développement web. Pendant son stage chez {company.user1.name}, il a démontré une capacité remarquable à résoudre des problèmes complexes et à livrer des projets de haute qualité dans les délais impartis. Son engagement, sa créativité et son attitude professionnelle en font un membre précieux de toute équipe de développement.
        </div>
    </div>
  )
}
