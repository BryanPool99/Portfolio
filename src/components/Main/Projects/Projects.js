import React, { useState } from 'react';
import { Button, ButtonGroup, Card, CardBody, CardText } from 'reactstrap';
import { images } from "./../../../assets/Img/Projects/imgsProjects";
export default function Projects() {
  const [category, setCategory] = useState("html-css");
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };
  return (
    <section className='projects container-fluid d-flex flex-column align-items-center justify-content-center animate__animated animate__fadeIn animate__delay-.5s'>
      <h2 className='text-center'>RECENTS PROJECTS</h2>
      <div>
        <ButtonGroup className='container-fluid d-flex  flex-row flex-wrap'>
          <Button className='m-4' color="primary" outline active={category === "html-css"} onClick={() => handleCategoryChange("html-css")}>HTML/CSS</Button>
          <Button className='m-4' color="primary" outline active={category === "sass"} onClick={() => handleCategoryChange("sass")}>SASS/SCSS</Button>
          <Button className='m-4' color="primary" outline active={category === "js"} onClick={() => handleCategoryChange("js")}>JS</Button>
          <Button className='m-4' color="primary" outline active={category === "react"} onClick={() => handleCategoryChange("react")}>REACT JS</Button>
          <Button className='m-4' color="primary" outline active={category === "api"} onClick={() => handleCategoryChange("api")}>API</Button>
        </ButtonGroup>
      </div>
      <aside className='d-flex flex-row  flex-wrap align-items-center justify-content-center'>
        {images[category] && images[category].map((image, index) => (
          <Card className='container-card d-flex flex-wrap align-items-center justify-content-center m-2 shadow' key={index}>
            <figure>
              <img src={image.src} alt={image.alt} />
            </figure>
            <CardBody>
              <CardText className='fw-bolder'>{image.description}</CardText>
              <ButtonGroup>
                <Button  color="secondary" href={image.linkDemo} target='_blank' rel="noopener noreferrer">PREVIEW SITE</Button>
                <Button  color="info" href={image.linkCode} target='_blank' rel="noopener noreferrer">VIEW CODE</Button>
              </ButtonGroup>
            </CardBody>
          </Card>
        ))}
      </aside>
    </section>
  )
}
