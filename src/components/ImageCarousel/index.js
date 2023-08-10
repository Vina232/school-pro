import React from 'react'

import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slide1 from "../../assets/image/Slide1.jpeg";
import Slide2 from "../../assets/image/Slide2.jpeg";
import Slide3 from "../../assets/image/Slide3.jpeg";


function ImageCarousel() {

    const renderIndicator=()=>{

    }

   


  return (
    
           <Carousel showArrows={true}  renderThumbs={()=>null}  >
                <div>
                    <img src={Slide1} />
                </div>
                <div>
                    <img src={Slide2} />
                </div>
                <div>
                    <img src={Slide3} />
                </div>
            </Carousel>
  )
}

export default ImageCarousel