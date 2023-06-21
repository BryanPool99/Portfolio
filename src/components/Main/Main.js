import React from 'react'
import { LinkedinIcon, GithubIcon } from "./../../assets/Img/Icons/icons";
import perfilImage from "./../../assets/Img/perfil.png";

export default function Main() {
  return (
    <main className='d-flex align-items-center justify-content-evenly flex-wrap'>
      <aside>
        <b>Hola a todos mi nombre es</b>
        <h1> Bryan Arredondo</h1>
        <h2>Web Developer</h2>
        <div className='social_media d-flex'>
          <a href='https://www.linkedin.com/in/bryan-pool-arredondo-ovalle/'><LinkedinIcon/></a>
          <a href='https://github.com/BryanPool99'><GithubIcon/></a>
        </div>
      </aside>
      <figure>
        <img src={perfilImage} alt="Foto de perfil de usuario" />
      </figure>
    </main>
  )
}
