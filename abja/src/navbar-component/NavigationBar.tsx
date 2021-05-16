import * as React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const NavigationBar: React.FC<{}> = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Abdulai Jalloh</Navbar.Brand>
      <Nav className="mx-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">About</Nav.Link>
        <Nav.Link href="#pricing">Current Project(s)</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="#features">Resume</Nav.Link>
        <Nav.Link href="#pricing">Research</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export { NavigationBar };
