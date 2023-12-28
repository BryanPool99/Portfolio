import React from 'react'
import { LinkedinIcon, GithubIcon, CodepenIcon, FrontendmentorIcon } from "./../../assets/Img/Icons/icons";

import perfilImage from "./../../assets/Img/perfil.png";

export default function Main() {
  return (
    <main className='d-flex align-items-center justify-content-center flex-wrap'>
      <aside>
        <b>Hola a todos mi nombre es</b>
        <h1> Bryan Arredondo</h1>
        <p>Web Developer</p>
        <div className='social_media d-flex'>
        <a  href='https://www.linkedin.com/in/bryan-pool-arredondo-ovalle/'><LinkedinIcon/></a>
        <a  href='https://github.com/BryanPool99'><GithubIcon/></a>
        <a  href='https://www.frontendmentor.io/profile/BryanPool99'><FrontendmentorIcon/></a>
        <a   href='https://codepen.io/bryanpool99'><CodepenIcon/></a>
        </div>
      </aside>
      <figure>
        <img src={perfilImage} alt="Foto de perfil de usuario" />
      </figure>
    </main>
  )
}
