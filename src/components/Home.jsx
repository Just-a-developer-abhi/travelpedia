import React from 'react'
import vs from '../assets/travel8.jpg'
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"
import img1 from '../assets/India1.jpg'

const Home = () => {
  return (
   <>
    <div className='home' id='home'>
      <main>
        <div>
          <h5>INTRODUCING</h5>
          <h1>TRAVELPEDIA Recommended Destinations </h1>
          <p>Escape to the epitome of luxury, packed with signature amenities and services</p>
        </div>
              <container className='cards'>
                    <div>
                      <img src={img1} alt="item1" />
                    <h3>Banaras</h3>
                    <p>Visit the city older than the history itself.</p>
                    </div>
                    
                    <div>
                      <img src={img1} alt="item1" />
                    <h3>Banaras</h3>
                    <p>Visit the city older than the history itself.</p>
                     </div>

                    <div>
                      <img src={img1} alt="item1" />
                    <h3>Banaras</h3>
                    <p>Visit the city older than the history itself.</p>
                    </div>
              </container>
      </main>
    </div>


    <div className="home2">
      <img src={vs} alt="Graphics" />

      <div>
        <p>
          If you want to explore, buy and exchange all the great books ever written. You landed at the right place. There are a lot of journies that awaits you. There are a lot of worlds waiting to be explored by you.    
        </p>
      </div>
    </div>

    <div className="home3" id='about'>
      <div>
        <h1>Who we are?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime reprehenderit atque sunt aliquam possimus. Labore odio doloribus officia assumenda rerum inventore facilis consequuntur error, dolorum id incidunt blanditiis aliquid quidem?</p>
      </div>
      
    </div>


    <div className="home4" id='brands'>
      <div>
        <h1>Publishing Houses</h1>
        <article>

            <div style={{
              animationDelay: "0.3s"
            }}>
              <AiFillGoogleCircle/>
              <p>Google</p>            
            </div>

            <div style={{
              animationDelay: "0.5s"
            }}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>            
            </div>

            <div style={{
              animationDelay: "0.7s"
            }}>
              <AiFillInstagram/>
              <p>Instagram</p>            
            </div>

            <div style={{
              animationDelay: "1s"
            }}>
              <AiFillYoutube/>
              <p>Youtube</p>            
            </div>


        </article>
      </div>
    </div>
   </>
  )
}

export default Home