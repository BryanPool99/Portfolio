import React from 'react';
import Skill from './component_skill/skill';
export default function Skills() {
  return (
    <section>
      <h2>SKILLS</h2>
      <Skill title="Lenguaje de programacion" category="lenguaje"/>
      <Skill title="Frontend Development" category="front"/>
      <Skill title="Backend Development" category="back"/>
      <Skill title="Database" category="db"/>
      <Skill title="Tools" category="tools"/>
    </section>
  )
}
