import NavbarComp from "../components/Navbar";
import "./About.css";
import Footer from "../components/Footer";
import project_overview from '../images/project_overview.png'
import project_purpose from '../images/purpose.jpeg'
import tech_stack from '../images/tech_stack.jpeg'
import acknowledgment from '../images/acknowledgment.jpeg'

export default function About() {
  return (
    <div>
      <NavbarComp />
      <div className="aboutContent">
        <div className="projectOverview">
          <div className="heading1">Project Overview</div>
          <div className="projectOverviewContent">
            <p className="text">
              "PoxVisio" utilizes deep learning (ResNet50) to detect monkeypox
              from skin lesion images, addressing the global healthcare concern
              of rapid monkeypox spread. The "Monkeypox Skin Lesion Dataset
              (MSLD)" was created by collecting and processing images from
              various sources.
            </p>
            <img src={project_overview} alt="sample" className="AboutImg landscape" />
          </div>
        </div>

        <div className="projectPurpose">
          <div className="heading2">Project Purpose</div>
          <div className="projectPurposeContent">
            <img src={project_purpose} alt="sample" className="AboutImg landscape" />
            <p className="text">
              The project's purpose is to provide a solution for the global
              healthcare challenge of the rapid spread of monkeypox by enabling
              early diagnosis. It aims to overcome the limited availability of
              confirmatory tests, such as Polymerase Chain Reaction (PCR), by
              using deep learning to identify monkeypox from skin lesion images.
              This computer-aided diagnosis can significantly improve the speed
              and accessibility of monkeypox identification, ultimately
              contributing to public health efforts.
            </p>
          </div>
        </div>

        <div className="projectTechStack">
          <div className="heading1">Tech Stack Used</div>
          <div className="TechStackContent">
            <p className="text">
              "PoxVisio" utilizes deep learning (ResNet50) to detect monkeypox
              from skin lesion images, addressing the global healthcare concern
              of rapid monkeypox spread. The "Monkeypox Skin Lesion Dataset
              (MSLD)" was created by collecting and processing images from
              various sources.
            </p>
            <img src={tech_stack} alt="sample" className="AboutImg landscape" />
          </div>
        </div>

        <div className="projectAcknowledgment">
          <div className="heading2">Acknowledgment</div>
          <div className="projectAcknowledgmentContent">
            <img src={acknowledgment} alt="sample" className="AboutImg landscape" />
            <p className="text">
              <p>
                Our Team would like to express our sincere gratitue to the
                SmartInternz team for providing us with such a great opportunity
                to work on this project.
              </p>
              <p>
                We would also like to thank the members of our project team for
                their dedication and hard work.
              </p>
              <p>
                Special thanks to Saumya Mohandas Ma'am, our project
                co-ordinator, for their continuous support and guidance
                throughout the project.
              </p>
              <p>
                This project would not have been possible without the
                cooperation and support of our colleagues and friends. Thank you
                all for your invaluable assistance.
              </p>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
