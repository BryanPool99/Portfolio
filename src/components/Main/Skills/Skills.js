import React from 'react';
import { BootstrapImg, Css3Img, GitImg, Html5Img, JavaImg, JsImg, MysqlImge, NodeJSImg, ReactImg, SassImg, SpringImg } from "./../../../assets/Img/Skills/imgsSkills";
export default function Skills() {
  return (
    <section>
      <h2>SKILLS</h2>
      <aside>
          <h3>USANDO AHORA:</h3>
          <div>
            <figure>
              <img src={Html5Img} alt="logo-html5" />
            </figure>
            <figure>
              <img src={Css3Img} alt="logo-css3" />
            </figure>
            <figure>
              <img src={BootstrapImg} alt="" />
            </figure>
            <figure>
              <img src={JsImg} alt="logo-js" />
            </figure>
            <figure>
              <img src={SassImg} alt="logo-sass" />
            </figure>
            <figure>
              <img src={ReactImg} alt="logo-react" />
            </figure>
            <figure>
              <img src={GitImg} alt="logo-git" />
            </figure>
          </div>
      </aside>
      <aside>
        <h3>Aprendiendo:</h3>
        <div>
          <figure>
            <img src={NodeJSImg} alt="logo-nodejs" />
          </figure>
          <figure>
            <img src={SpringImg} alt="logo-spring" />
          </figure>
          <figure>
            <img src={MysqlImge} alt="logo-mysql" />
          </figure>
        </div>
      </aside>
      <aside>
        <h3>Otros Skills:</h3>
        <div>
          <figure>
            <img src={JavaImg} alt="logo-java" />
          </figure>
        </div>
      </aside>
    </section>
  )
}
