import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../icons/flight1.png'
import img2 from '../icons/hotel2.png'
import img3 from '../icons/camp.png'
import img4 from '../icons/car.png'
import img5 from '../icons/pack.png'
import travel1 from '../assets/travel1.jpg'
import travel2 from '../assets/travel2.jpg'
import travel3 from '../assets/travel3.jpg'
import travel4 from '../assets/travel4.jpg'

const Header = () => {
  return (
   <nav>
     <div>
            <div className='logo'>
                <h1>travelpedia</h1>
            </div>
              <main> 
                <div>
                  <img src={img1} alt="flight" />
                     <HashLink to={"/#home"}>Flights</HashLink>
                </div>
                <div>
                  <img src={img2} alt="Hotels" />
                     <HashLink to={"/#about"}>Hotels</HashLink>
                </div>
                <div>
                  <img src={img3} alt="Homestays" />
                     <HashLink to={"/#brands"}>Camping</HashLink>
                </div>
                <div>
                  <img src={img4} alt="Travel" />
                   <Link to={"/contact"}>Road Trip</Link>
                </div>
                <div>
                  <img src={img5} alt="Packages" />
                     <Link to={"/bookshelf"}>Our Packages</Link>
                </div>
              </main>
     </div>
     <div className='block_two'>
       <h1>WELCOME ABOARD</h1>
            <container>
              <div>
                <h1>Destination</h1>
                <p>find the perfect vacation</p>
              </div>
              <div>
                <h1>Travel Dates</h1>
                <p>Tell us when do you want to travel</p>
              </div>
              <div>
                <h1>Memebers</h1>
                <p>Let us know your traveling parteners</p>
              </div>
            </container>

       </div>
     
   </nav>
  )
}

export default Header