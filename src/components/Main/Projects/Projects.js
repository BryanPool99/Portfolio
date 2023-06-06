import React, { useState } from 'react'
import { images } from "./../../../assets/Img/Projects/imgsProjects";
export default function Projects() {
  const [category, setCategory] = useState("html-css");
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };
  return (
    <section>
      <h2>PROJECTS</h2>
      <aside>
        <button >ALL</button>
        <button onClick={() => handleCategoryChange("html-css")}>HTML/CSS</button>
        <button>SASS/SCSS</button>
        <button>JS</button>
        <button onClick={() => handleCategoryChange("react")}>REACT JS</button>
        <button>API</button>
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
              <a href={image.linkDemo}>PREVIEW SITE</a>
              <a href={image.linkCode}>VIEW CODE</a>
            </div>
          </div>
        </div>
      ))}
      </aside>
    </section>
  )
}
