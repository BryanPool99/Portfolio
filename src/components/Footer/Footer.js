import React from 'react';
import { LinkedinIcon, GithubIcon, CodepenIcon, FrontendmentorIcon } from "./../../assets/Img/Icons/icons";

export default function Footer() {
  return (
    <footer className='d-flex flex-column align-items-center justify-content-center'>
      <div className='d-flex flex-row align-items-center justify-content-center flex-wrap'>
        <a  className='text-light m-2' href='https://www.linkedin.com/in/bryan-pool-arredondo-ovalle/'><LinkedinIcon/></a>
        <a  className='text-light m-2' href='https://github.com/BryanPool99'><GithubIcon/></a>
        <a  className='text-light m-2' href='https://www.frontendmentor.io/profile/BryanPool99'><FrontendmentorIcon/></a>
        <a  className='text-light m-2'  href='https://codepen.io/bryanpool99'><CodepenIcon/></a>
      </div>
      <div className='text-light text-center'>
        <p>
          <b>&copy; Bryan Arredondo</b> Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
