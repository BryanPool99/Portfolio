import React from 'react'
import { LinkedinIcon, GithubIcon } from "./../../assets/Img/Icons/icons";
import perfilImage from "./../../assets/Img/perfil.png";

export default function Main() {
  return (
    <main>
      <aside className='titular'>
        <p>Hola a todos mi nombre es</p>
        <h1> Bryan Arredondo</h1>
        <h2>Web Developer</h2>
      </aside>
      <aside className='social_media'>
        <button><LinkedinIcon/></button>
        <button><GithubIcon/></button>
      </aside>
      <figure className='img'>
        <img src={perfilImage} alt="Foto de perfil de usuario" />
      </figure>
    </main>
  )
}
