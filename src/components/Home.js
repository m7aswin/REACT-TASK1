import React from 'react';
import matrix from '../assets/matrix.gif';
import '../Css/Home.css';
import AboutUs from './AboutUs';

const Home = () => {
  return (
    <div>
        <div className='mainSection'>
            <div className='contentBox'>
                <h5>We are</h5>
                <h2>Data Experts</h2>
                <h5>Get the brochure:</h5>
                <button>Download Brochure !</button>
            </div>
            <div className='imgContainer'>
                <img src={matrix} alt='' />
            </div>
        </div>
        <AboutUs />
    </div>
  )
}

export default Home