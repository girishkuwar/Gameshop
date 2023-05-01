import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import gamingBg1 from '../../img/gaming1.webp'
import gamingBg2 from '../../img/gaming2.jpg'
import gamingBg3 from '../../img/gaming3.jpg'
import Salepage from '../Salepage/Salepage'
import YoutubeEmbed from '../../components/YoutubeEmbed'

const Home = () => {
  return (
    <div className='home-main'>
      <div className="home-heading">
        <div className="txtbox">
          <h1>GameShop</h1>
          <p>I'm not a player. I'm a gamer. Players get chicks. I get achievements.</p>
          <p>Education is important, but video games are importanter.</p>
        </div>
      </div>
      <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showArrows={false} showThumbs={false} showStatus={false} showIndicators={false}>
        <div>
          <img src={gamingBg1} alt='' />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={gamingBg2} alt='' />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={gamingBg3} alt='' />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
      <Salepage/>
      <YoutubeEmbed embedId="r72GP1PIZa0" />
    </div>
  )
}

export default Home
