import React, { useState } from 'react';
import './style.css'
import soufiane from '../assets/soufiane.png'
function Hero() {
  return (
    <div className='hero'>
       <div className='one'> 
          <h2>I'M <span>Soufiane Boutatss</span></h2>
          <h2>Web & Mobile Developper</h2>
          <button><a href="./cv25.pdf"> Download cv </a></button>
       </div>

       <div className='two'> 
          <img src={soufiane} />
       </div>
      <div class="bar"> 
    <a href="https://web.facebook.com/soufianski2001" class="fa fa-facebook"></a>
    <a href="#" class="fa fa-whatsapp"></a>
    <a href="https://www.linkedin.com/in/soufiane-boutatss-96400a1ba/" class="fa fa-linkedin"></a>
    <a href="mailto:sboutatss@gmail.com" class="fa fa-google"></a>
</div> 
    </div>
  )
}

export default Hero
