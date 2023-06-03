import React from 'react'
import { LinkedinIcon, GithubIcon, CodepenIcon, FrontendmentorIcon } from "./../../assets/Img/Icons/icons";

export default function Footer() {
  return (
    <footer>
      <div>
        <a href='https://www.linkedin.com/in/bryan-pool-arredondo-ovalle/'><LinkedinIcon/></a>
        <a href='https://github.com/BryanPool99'><GithubIcon/></a>
        <a href='https://www.frontendmentor.io/profile/BryanPool99'><FrontendmentorIcon/></a>
        <a href='https://codepen.io/bryanpool99'><CodepenIcon/></a>
      </div>
      <div>
        <p>
          <b>&copy; Bryan Arredondo</b> Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
