import React from 'react'
import { images } from './../../../../assets/Img/Skills/imgsSkills';

export default function skill(props) {
    const { category } = props;
    const imagesArray = images[category];
    return (
        <aside>
            <h3>{props.title}:</h3>
            
            <div className='container-fluid d-flex flex-row flex-wrap align-items-center justify-content-center'>
                {imagesArray.map((image, index) => (
                    <figure key={index}>
                        <img className='bg-gradient' src={image.src} alt={image.alt} />
                    </figure>
                ))}
            </div>
            <hr />
        </aside>
    )
}
