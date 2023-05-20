import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import gamingBg1 from '../../img/gaming1.webp'
import gamingBg2 from '../../img/gaming2.jpg'
import gamingBg3 from '../../img/gaming3.jpg'
import Salepage from '../Salepage/Salepage'
import YoutubeEmbed from '../../components/YoutubeEmbed'
import actionimg from "../../img/Action.jpg"
import servivalimg from "../../img/Srvival.jpg"
import racingimg from "../../img/Racing.jpg"
import advetureimg from "../../img/adventure.jpeg"
import "./home.css"
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='home-main'>
      <div className="home-heading">
        <div className="txtbox">
          <h1>GameShop</h1>
          <p>I'm not a player. I'm a gamer. Players get chicks. I get achievements.</p>
          <p>Education is important, but video games are importanter.</p>
        </div>
      </div>
      <Carousel autoPlay={true} stopOnHover={false} interval={3000} infiniteLoop={true} showArrows={false} showThumbs={false} showStatus={false} showIndicators={false}>
        <div>
          <img src={gamingBg1} alt='' />
        </div>
        <div>
          <img src={gamingBg2} alt='' />
        </div>
        <div>
          <img src={gamingBg3} alt='' />
        </div>
      </Carousel>
      <section className='game-c'>
        <div className="container-g">
          <div class="card">
            <img src={actionimg} alt="" />
            <div class="card-content">
              <h2>Action</h2>
              <button onClick={() => navigate('/category', { state: { id: 1, img: actionimg, title: "Action" } })}>Show More</button>
            </div>
          </div>
          <div class="card">
            <img src={servivalimg} alt="" />
            <div class="card-content">
              <h2>
                Survival
              </h2>
              <button onClick={() => navigate('/category', { state: { id: 4, img: servivalimg, title: "Survival" } })}>Show More</button>
            </div>
          </div>
          <div class="card">
            <img src={advetureimg} alt="" />
            <div class="card-content">
              <h2>
                Adventure
              </h2>
              <button onClick={() => navigate('/category', { state: { id: 2, img: advetureimg, title: "Adventure" } })}>Show More</button>
            </div>
          </div>
          <div class="card">
            <img src={racingimg} alt="" />
            <div class="card-content">
              <h2>
                Racing
              </h2>
              <button onClick={() => navigate('/category', { state: { id: 3, img: racingimg, title: "Racing" } })}>Show More</button>
            </div>
          </div>
        </div>
      </section>
      <Salepage />
      <YoutubeEmbed embedId="r72GP1PIZa0" />
    </div>
  )
}

export default Home
