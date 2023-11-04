import "./Homepage.css";
import NavbarComp from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <div className="App">
      <NavbarComp />
      <div className="ProjectTitle">
        PoxVisio : A Deep Learning Expedition into Monkeypox Skin Lessons
      </div>
      <div className="ProjectDescription">
        A Deep Learning Project to accurately diagnose early Monkeypox with the
        help of ResNet50.
      </div>
      <div className="DiagnosisNavigation">
        <p>Let's dive right into the Diagnosis! </p>
        <Link to="/Diagnosis">
          <button className="diagnoseButton">Diagnose</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
