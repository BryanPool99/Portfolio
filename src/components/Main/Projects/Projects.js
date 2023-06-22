import React, { useState } from 'react'
import { images } from "./../../../assets/Img/Projects/imgsProjects";
export default function Projects() {
  const [category, setCategory] = useState("html-css");
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };
  return (
    <section className='projects'>
      <h2>PROJECTS</h2>
      <aside>
        <button onClick={() => handleCategoryChange("html-css")}>HTML/CSS</button>
        <button onClick={() => handleCategoryChange("sass")}>SASS/SCSS</button>
        <button onClick={() => handleCategoryChange("js")}>JS</button>
        <button onClick={() => handleCategoryChange("react")}>REACT JS</button>
        <button onClick={() => handleCategoryChange("api")}>API</button>
      </aside>
      <aside>
      {images[category] && images[category].map((image, index) => (
        <div key={index}>
          <figure>
            <img src={image.src} alt={image.alt} />
          </figure>
          <div>
            <p>{image.description}</p>
            <div>
              <a href={image.linkDemo} target='_blank' rel="noopener noreferrer">PREVIEW SITE</a>
              <a href={image.linkCode} target='_blank' rel="noopener noreferrer">VIEW CODE</a>
            </div>
          </div>
        </div>
      ))}
      </aside>
    </section>
  )
}
