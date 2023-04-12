import React, { useEffect } from 'react'
import vs from '../assets/travel8.jpg'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"
import img1 from '../assets/India1.jpg'

import img from '../assets/egypt.jpg'
import img2 from '../assets/travel1.jpg'
import img3 from '../assets/travel5.jpg'
import img4 from '../assets/travel8.jpg'
import img5 from '../assets/travel7.jpg'

import hotel1 from '../assets/hotel1.jpg'
import hotel2 from '../assets/hotel2.jpg'
import hotel3 from '../assets/hotel3.jpg'
import hotel4 from '../assets/hotel4.jpg'
import hotel5 from '../assets/hotel5.jpg'

const Home = () => {

  function Load() {
    useEffect(() => {
      document.title= 'Travelpedia';
    }, []);
  }
  return (
   <>
    <div className='home' >
      <main id='packages'>
        <div>
          <h5>INTRODUCING</h5>
          <h1>TRAVELPEDIA Recommended Destinations </h1>
          <p>Escape to the epitome of luxury, packed with signature amenities and services</p>
        </div>
              <container className='cards'>
                    <div>
                      <img src={img} alt="item1" />
                    <h3>Jordan</h3>
                    <p>enroute to the history</p>
                    </div>
                    
                    <div>
                      <img src={img2} alt="item1" />
                    <h3>Europe</h3>
                    <p>Europe awaits you</p>
                     </div>

                    <div>
                      <img src={img3} alt="item1" />
                    <h3>Venice</h3>
                    <p>A city of romance</p>
                    </div>
              </container>
      </main>
    </div>

    <div className='home1'>
        
        <Carousel className='carousel' 
        infiniteLoop 
        autoPlay 
        interval={1000} 
        showThumbs={false} 
        showStatus={false}
        showArrows={false}>
            
            <div>
                <img src={img1} alt="Item1" />
            </div>
            <div>
                <img src={img2} alt="Item2" />
                
            </div>
            <div>
                <img src={img3} alt="Item3" />   
            </div>
            <div>
                <img src={img4} alt="Item3" />   
            </div>
            <div>
                <img src={img5} alt="Item3" />   
            </div>
        </Carousel>
    </div>


    <div className="home2" id='hotels'>
      <Carousel className='carousel_home2'
        infiniteLoop 
        autoPlay 
        interval={1000} 
        showThumbs={false} 
        showStatus={false}
        showArrows={false}
        showIndicators={false}>
            
            <div>
                <img src={hotel1} alt="Item1" />
            </div>
            <div>
                <img src={hotel2} alt="Item2" />
                
            </div>
            <div>
                <img src={hotel4} alt="Item3" />   
            </div>
            <div>
                <img src={hotel5} alt="Item3" />   
            </div>
        </Carousel>

      <div>
        <p>
          We have have prepared the paradises of comfort for you where you can live a lifestyle that you deserve. We've made sure that it fits into your pockets.    
        </p>
      </div>
    </div>

    <div className="home3" id='camping'>
      <div>
        <h1>Want to go camping?</h1>
        <p>If nature is something that excites you then you are in for a treat. From trekking in the snow of Uttarkhand to camping the jungles of Himachal, we've got you covered. Visit our adventure section for booking your seat in the next adventure.</p>
      </div>
      
    </div>


    <div className="home4">
      <div id='road'>
        <h1>Want to go on a road trip?</h1>
        <p>If you see youself enjoying on the roads, heading to a destination that nobody knows like in the movies Dil Chahta hai and Zindagi Na Milegi Dobara. Just pack your bags and let us handle everything. We will take you to the roads that have been carved into the mountains and through the vallies which are truly designed by the god himself. Book your tickets now.</p>
        
      </div>
    </div>
   </>
  )
}

export default Home