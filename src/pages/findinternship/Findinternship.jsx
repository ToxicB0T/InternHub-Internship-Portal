import governoratesData from "../../gouvernoratesData.json"
import company from "../../company"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBuilding} from '@fortawesome/free-solid-svg-icons'
import {faMapLocationDot} from '@fortawesome/free-solid-svg-icons'

import { NavLink } from "react-router-dom";

import "./findinternship.css"

export default function Findinternship() {
  return (
    <div className="findInternShip">
      <div className="findInternShipSearch">
        <form action="">
          <div className="findInternShipSearchKeywords">
            <input type="text" placeholder="KeyWords ?"/>
          </div>
          <div className="findInternShipSearchCity">
          <select id="city" name="city">
              <option value="" disabled selected>
                City
              </option>
              {governoratesData.governorates.map((governorate, index) => (
                <option key={index} value={governorate.toLowerCase()}>
                  {governorate}
                </option>
              ))}
            </select>
          </div>
          <div className="findInternShipSearchSubmitBtn">
            <input type="submit" value="Search" />
          </div>
        </form>
      </div>
      <div className="numberOfInternship">
        999 internships
      </div>
      <div className="internshipContainer">
      {Object.values(company).map((company) => (
        <div key={company.name} className='internSearchContainer'>
          <div className="internSearchName">
            <span className="internSearchNameName">Web Development</span><span className="internSearchNameDate">01/01/2024</span>
          </div>
          <div className="internSearchContenent">
          Customer satisfaction is our priority. That is why we continually work towards improving our product and meeting the market`s requirements.
          </div>
          <div className="internSearchInfo">
            <div className="internSearchInfoCompanyName">
            <FontAwesomeIcon className="internSearchInfoCompanyNameIcon" icon={faBuilding} /> {company.name}
            </div>
            <div className="internSearchInfoCity">
            <FontAwesomeIcon className="internSearchInfoCityIcon" icon={faMapLocationDot} /> City
            </div>
            <NavLink className="SeeMoreNavlink" to="">See More</NavLink>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}
