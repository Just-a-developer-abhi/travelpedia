import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/mountains2.jpg'
import img2 from '../assets/mountains2.jpg'
import img3 from '../assets/mountains2.jpg'

const Bookshelf = () => {
  return (
    <div>
        
        <Carousel 
        infiniteLoop 
        autoPlay 
        interval={1500} 
        showThumbs={false} 
        showStatus={false}>
            
            <div>
                <img src={img1} alt="Item1" />
            </div>
            <div>
                <img src={img2} alt="Item2" />
                
            </div>
            <div>
                <img src={img3} alt="Item3" />   
            </div>
        </Carousel>
    </div>
  )
}

export default Bookshelf