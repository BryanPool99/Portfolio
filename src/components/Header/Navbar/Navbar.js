import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
export default function NavbarComponent(args) {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    /*
    <nav>
        <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">About me</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
    */
    <nav>
      <Navbar color='dark' expand="sm">
        <NavbarToggler onClick={toggle} className='bg-light'/>
        <Collapse isOpen={isOpen} navbar >
          <Nav navbar className='d-flex w-100 justify-content-between'>
            <NavItem >
              <NavLink className="text-light" tag={Link} to="/">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-light" tag={Link} to="/about">About me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-light" tag={Link} to="/skills">Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-light" tag={Link} to="/projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-light" tag={Link} to="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </nav>
  )
}
