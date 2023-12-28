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
      <Navbar expand="sm" className='justify-content-center'>
        <NavbarToggler className='bg-white' onClick={toggle} />
        <Collapse isOpen={isOpen} navbar >
          <Nav navbar className='navbar-nav align-items-center'>
            <NavItem className='nav-item'>
              <NavLink className="nav-link" tag={Link} to="/">Inicio</NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink className="nav-link" tag={Link} to="/about">About me</NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink className="nav-link" tag={Link} to="/skills">Skills</NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink className="nav-link" tag={Link} to="/projects">Projects</NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink className="nav-link" tag={Link} to="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  )
}
