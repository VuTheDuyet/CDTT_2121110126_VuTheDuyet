// src/components/Slide.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/slide.css'; // Import the custom styles

function Slide() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            <div>
                <img src={require('../asset/img/slide1.jpg')} alt="Slide 1" />
            </div>
            <div>
                <img src={require('../asset/img/slide2.jpg')} alt="Slide 2" />
            </div>
            <div>
                <img src={require('../asset/img/slide3.jpg')} alt="Slide 3" />
            </div>
        </Slider>
    );
}

export default Slide;
