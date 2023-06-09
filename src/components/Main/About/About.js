import React from 'react'

export default function About() {
  return (
    <section className='about container-fluid d-flex flex-column align-items-center justify-content-center'>
      <aside className='p-sm-3 px-1 py-3 container d-flex flex-column align-items-center'>
        <h2>SOBRE MI</h2>
        <div className='description p-sm-3 px-1 py-3'>
          <p>
          Soy estudiante de la universidad UTP, actualmente curso el 9no ciclo de la carrera de Ing. De Sistemas e informática. Tengo experiencia en el maquetado de páginas webs haciendo uso de tecnologías web como HTML, CSS, SASS, JS y React.js. Asimismo en la parte de servidor uso el lenguaje de programación JAVA con el framework SpringBoot(Básico) y en la parte de base de datos uso el MySQL.
          </p>
          <p>
          Esta experiencia adquirida diariamente, me ha permitido obtener diversos conocimientos no solo técnicos sino también blandos como por ejemplo la organización, creatividad, pensamiento lógico-crítico, mucha aptitud de investigación, innovación, trabajo en equipo y disposición para el cambio.
          </p>
        </div>
      </aside>
    </section>
  )
}
