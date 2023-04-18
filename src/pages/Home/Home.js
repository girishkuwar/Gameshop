import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import gamingBg1 from '../../img/gaming1.webp'
import gamingBg2 from '../../img/gaming2.jpg'
import gamingBg3 from '../../img/gaming3.jpg'

const Home = () => {
  return (
    <div>
      <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showArrows={false} showThumbs={false} showStatus={false} showIndicators={false}>
        <div>
          <img src={gamingBg1} alt=''/>
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={gamingBg2} alt=''/>
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={gamingBg3} alt=''/>
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
      <div className="txtbox">
        <h1>GameShop</h1>
        <p>I'm not a player. I'm a gamer. Players get chicks. I get achievements.</p>
        <p>Education is important, but video games are importanter.</p>
      </div>
    </div>
  )
}

export default Home
