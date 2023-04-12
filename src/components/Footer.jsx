import React from 'react'
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
           <div className="footer">
      <div>
        <main>
            <h5>@AllRightsReserved</h5>
            <h3>Travelpedia</h3>
        </main>
        
        <h1>You can find us on</h1>
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
    </footer>
  )
}

export default Footer