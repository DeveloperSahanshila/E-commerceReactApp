import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MdOutlineSearch } from "react-icons/md";

import { FaCartArrowDown, FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <h2>AbcShop</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Smartphones</Nav.Link>
            <Nav.Link href="#pricing">Laptops</Nav.Link>
            <Nav.Link href="#pricing">Laptops</Nav.Link>
            <Nav.Link href="#pricing">Fragnances</Nav.Link>
            <Nav.Link href="#pricing">Skincare</Nav.Link>
            <Nav.Link href="#pricing">More...</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <MdOutlineSearch size={25} />
            </Nav.Link>

            <Nav.Link href="#deets">
              <FaRegUser size={20} />
            </Nav.Link>

            <Nav.Link href="#deets">
              <FaCartArrowDown size={25} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
