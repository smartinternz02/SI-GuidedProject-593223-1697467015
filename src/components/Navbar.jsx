import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavbarComp() {
  return (
    <Navbar expand="lg" className="NavbarContainerClass">
      <Container className="NavbarContainer">
        <Navbar.Brand
          style={{ color: "#0b3954", fontSize: "30px", fontWeight: "800" }}
        >
          PoxVisio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto"
            style={{ color: "#0b3954", display: "flex", gap: "20px" }}
          >
            <Link to="/" className="ReactLinks">
              <div className="NavbarLinks">Home</div>
            </Link>
            <Link to="/About" className="ReactLinks">
              <div className="NavbarLinks">About</div>
            </Link>
            <Link to="/Diagnosis" className="ReactLinks">
              <div className="NavbarLinks">Diagnosis</div>
            </Link>
            <Link to="/Team" className="ReactLinks">
            <div className="NavbarLinks">Team</div>
            </Link>
            <Link to="/Information" className="ReactLinks">
            <div className="NavbarLinks">What is Monkeypox?</div>
            </Link>
            
            {/* <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Diagnosis</Nav.Link>
            <Nav.Link href="#link">Team</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Diagnosis</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
