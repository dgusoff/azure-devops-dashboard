import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { loginRequest, msalConfig } from '../Auth/authConfig';
function NavComponent() {
    const { instance } = useMsal();
  
    return (
      <Navbar sticky="top" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Devops Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <UnauthenticatedTemplate>
           
    

              <Nav.Link onClick={async () => await instance.loginRedirect(loginRequest)} >Login</Nav.Link>
            </UnauthenticatedTemplate>
            <AuthenticatedTemplate>
              <Nav.Link onClick={() => instance.logoutRedirect({ postLogoutRedirectUri: "/" })} href="#home">Log out</Nav.Link>
              
                <Link to="home" className="nav-link" >Home</Link>
                <Link to="projects" className="nav-link" >Projects</Link>               
            </AuthenticatedTemplate>
          </Nav>
        </Container>
      </Navbar>
    );
  }
  
  
  
  
  export default NavComponent;