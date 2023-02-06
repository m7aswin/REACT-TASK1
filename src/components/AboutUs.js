import React from 'react'
import image from '../assets/about.png'

const AboutUs = () => {
  return (
    <div>
      <div className='mainSection'>
        <div>
          <img src={image} alt='' width="250"/>
        </div>
        <div className='about'>
          <h2>About Pfactorial</h2>
          <p>"Beyond Factorial Innovations"</p>
          <p>Pfactorial Technologies is an emerging startup with a group of</p>
          <p>young talents, passionate to explore the power of Artificial</p>
          <p>Intelligence and Machine Learning. We use the latest technologies</p>
          <p>to provide solutions to your business and understand the real</p>
          <p>context of your data thus delivering real-world intelligence. AI is</p>
          <p>getting smarter every day. We believe in this fact and deliver</p>
          <p>unbiased AI-ML products to the world. We are helping to automate</p>
          <p>some of the world‘s most complex and difficult problems. We</p>
          <p>experiment on modern AI in business and aim to build an AI-ML</p>
          <p>friendly world for you to explore. We are at the forefront of</p>
          <p>advances in AI and solve the problem of intelligence. We have a</p>
          <p>solution for all your business needs.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs