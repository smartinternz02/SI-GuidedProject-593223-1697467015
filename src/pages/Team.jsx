import NavbarComp from "../components/Navbar";
import "./Team.css";
import Atharva from "../images/Atharva.jpg";
import Mrudul from "../images/Mrudul.jpg";
import Onkar from "../images/Onkar.jpg";
import Mehul from "../images/Mehul.jpg";
import Footer from '../components/Footer'

export default function Team() {
  return (
    <div>
      <NavbarComp />
      <div className="teamContent">
        <div className="teamHeading">
          Introducing the Ingenious Minds Driving Our Purpose
        </div>
        <div className="teamMembers">
          <div className="Member1">
            <div className="leader">
              <div className="image-container">
                <img src={Atharva} alt="Profile" className="ProfileImg" />
                <p className="memberDescription">
                  <p style={{fontWeight: '800', fontSize: '25px'}}>21BCE0083</p>
                  <p>Team Leader, Head Of UI</p>
                </p>
              </div>
            </div>
            <p className="memberName">Atharva Navghane</p>
          </div>
          <div className="Member1">
            <div className="leader">
              <div className="image-container">
                <img src={Mrudul} alt="Profile" className="ProfileImg" />
                <p className="memberDescription">
                  <p style={{fontWeight: '800', fontSize: '25px'}}>21BCE3386</p>
                  <p>Model Builder</p>
                </p>
              </div>
            </div>
            <p className="memberName">Mrudul Patil</p>
          </div>
          <div className="Member1">
            <div className="leader">
              <div className="image-container">
                <img src={Onkar} alt="Profile" className="ProfileImg" />
                <p className="memberDescription">
                  <p style={{fontWeight: '800', fontSize: '25px'}}>21BCE3363</p>
                  <p>Flask Operator</p>
                </p>
              </div>
            </div>
            <p className="memberName">Onkar Hule</p>
          </div>
          <div className="Member1">
            <div className="leader">
              <div className="image-container">
                <img src={Mehul} alt="Profile" className="ProfileImg" />
                <p className="memberDescription">
                  <p style={{fontWeight: '800', fontSize: '25px'}}>21BCE3897</p>
                  <p>Head of General Operations and Documentation</p>
                </p>
              </div>
            </div>
            <p className="memberName">Mehul Gupta</p>
          </div>
        </div>
        <div className="teamHeading">
          Team ID : 592706
        </div>
      </div>
      <Footer />
    </div>
  );
}
