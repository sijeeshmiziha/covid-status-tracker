import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand >COVID-19</Navbar.Brand>
    <Nav className="me-auto">
            <Link className="nav-link " to="/india">India</Link>
      <Link className="nav-link " to="/world">World</Link>

    </Nav>
    </Container>
  </Navbar>
              
  
  
        </div>
    )
}

export default Header
