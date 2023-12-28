import React from 'react'
import { images } from './../../../../assets/Img/Skills/imgsSkills';
import { AnimationOnScroll } from "react-animation-on-scroll";
export default function skill(props) {
    const { category } = props;
    const imagesArray = images[category];
    return (
        <aside>
            <h3>{props.title}:</h3>
            <div className='container-fluid d-flex flex-row flex-wrap align-items-center justify-content-center'>
                {imagesArray.map((image, index) => (
                    <AnimationOnScroll key={index} animateIn="animate__bounceIn">
                        <figure >
                            <img className='bg-gradient' src={image.src} alt={image.alt} />
                        </figure>
                    </AnimationOnScroll>
                ))}
            </div>
            <hr />
        </aside>
    )
}
