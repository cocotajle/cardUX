import React from 'react';
import img1 from '../assets/see.jpeg';
import './card-style.css'

const Card = props=> {
    return(
<div className="card text-center">
    <div className="overflow">
        <img src={props.imgsrc} alt="image-1" className="card-img-top"/>
    </div>
    <div className="card-body text-dark"></div>
    <h4 className="card-title">See</h4>
    <p className="card-text teaxt-secondary">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum in veritatis dolore ut inventore culpa quaerat unde eum, sunt sequi!
    </p>
    <a href="#" className="btn- btn-outline-success">Go there</a>
</div>
    );
}
export default Card;

