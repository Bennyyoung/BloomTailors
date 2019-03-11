import React, { Component } from 'react';
import Slider from 'react-slick';
import pic1 from '../images/img1.jpg';
import pic2 from '../images/img2.jpg';
import pic3 from '../images/img3.jpg';
import pic4 from '../images/img4.jpg';
import pic5 from '../images/img5.jpg';
import pic6 from '../images/img6.jpg';

class SlideCarousel extends Component {
    render () {
            var settings = {
                dots: true,
                infinite: true,
                speed: 500,
                autoplay: true,
                autoplaySpeed: 2000,
                slidesToShow: 4,
                slidesToSroll: 4,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            };
        return (
                <Slider {...settings}>
                    <div><img src={pic1} alt="img1"/></div>
                    <div><img src={pic2} alt="img2"/></div>
                    <div><img src={pic3} alt="img3"/></div>
                    <div><img src={pic4} alt="img4"/></div>
                    <div><img src={pic5} alt="img5"/></div>
                    <div><img src={pic6} alt="img6"/></div>
                </Slider>  
        );
    }
}

export default SlideCarousel
