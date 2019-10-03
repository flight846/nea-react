import React from 'react'
import Slider from 'react-slick';
import { common } from 'assets';

import "./style.scss"; 

const CustomSlider = props => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const { files } = props;

    return (
        <Slider {...settings}>
            {
                files.map((file, index) => (
                    <div key={index}>
                        <img src={ file.url } alt="" style={{ width: '100%', backgroundPosition: 'center center',  }}/>
                        <p>{index + 1}. { file.url }</p>
                    </div>
                ))
            }
        </Slider>
    )
}

CustomSlider.defaultProps = {
    files: [
        { url: common.img__upload }, 
        { url: common.img__upload }
    ]
}

export default CustomSlider
