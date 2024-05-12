import react from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faClinicMedical , faTint } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";
import "../components/utils.css"

function utils(){
    return(
        <div className="utils">
            <Link to="/Doctor">
            <div className="doctor">
                <FontAwesomeIcon icon={faUserMd} style={{ fontSize: "1.5em" }}/>
                <div>
                    Doctor
                </div>
            </div>
            </Link>
            <Link to="/Clinic">
            <div className="clinic">
                <FontAwesomeIcon icon={faClinicMedical} style={{ fontSize: "1.5em" }}/>
                <div>Clinic</div>
            </div>
            </Link>
            <Link to="/Bloodbank">
            <div className="blood">
                <FontAwesomeIcon icon={faTint} style={{ fontSize: "1.5em" }} />
                <div>Blood Bank</div>
            </div>
            </Link>
        </div>
    )
}

export default utils;