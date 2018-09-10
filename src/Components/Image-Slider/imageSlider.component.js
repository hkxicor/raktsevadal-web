import React from 'react';
import Carousel from 'nuka-carousel';

const ImageSlider = (props) => {
    const metaData = props.data.metaData;

    return (
        <Carousel>
            {
                metaData.slides.map((item, key) => (
                    <img kye={key} style={{ height: 500, resize: 'fill' }} src={item.image} />
                ))
            }
        </Carousel>
    )
}

export default ImageSlider;