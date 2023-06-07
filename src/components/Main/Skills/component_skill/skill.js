import React from 'react'
import { images } from './../../../../assets/Img/Skills/imgsSkills';

export default function skill(props) {
    const { category } = props;
    const imagesArray = images[category];
    return (
        <aside>
            <h3>{props.title}</h3>
            <hr />
            <div>
                {imagesArray.map((image, index) => (
                    <figure key={index}>
                        <img src={image.src} alt={image.alt} />
                    </figure>
                ))}
            </div>
        </aside>
    )
}
