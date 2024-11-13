import React from 'react'
import './style.css'


import pr1 from '../assets/pr1.JPG'
import pr6 from '../assets/pr6.png'
import pr7 from '../assets/pr7.JPG'
import pr8 from '../assets/pr8.JPG'
import horoslove from '../assets/horoslove.jpg'
import casasport from '../assets/casasport.jpg'
function Portfolio() {
  return (
    <div className='portfolios'>
      <h1>Portfolio</h1>

<div className='portfolio'>

<div class="image-container">
  <img src={"https://play-lh.googleusercontent.com/6RcPDQwPihY591Axu7e6mHhMZ22Q-dqeI5z9GkJiu4Hc-Xha77E6uoeplstYuv5RcnE"} alt="Image" />
  <div class="overlay">
    <h2 class="title">Cash App (client)</h2>
    <div className='links'>
    <a href=''><i className='fa fa-youtube-play'></i></a>
 
 </div>
  </div>
</div>


<div class="image-container">
  <img src="https://www.algerie-eco.com/wp-content/uploads/2018/02/marketplace-en-algerie.jpg" alt="Image" />
  <div class="overlay">
    <h2 class="title">MarketPlace</h2>
    <div className='links'>
    <a href=''><i className='fa fa-youtube-play'></i></a>
    <a href=''><i className='fa fa-github'></i></a>
 </div>
  </div>
</div>

<div class="image-container">
  <img src="https://www.noiise.com/wp-content/uploads/2023/11/definition-ecommerce.jpg" alt="Image" />
  <div class="overlay">
    <h2 class="title">Ecommerce</h2>
    <div className='links'>
    <a href=''><i className='fa fa-youtube-play'></i></a>
    <a href=''><i className='fa fa-github'></i></a>
 </div>
  </div>
</div>

<div class="image-container">
  <img src={casasport} alt="Image" />
  <div class="overlay">
    <h2 class="title">reservation app</h2>
    <div className='links'>
    <a href=''><i className='fa fa-youtube-play'></i></a>
    <a href=''><i className='fa fa-github'></i></a>
 </div>
  </div>
</div>

<div class="image-container">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNppN7vM3QQlf6oA48xueJWpNfuPJANUV09g&s" alt="Image" />
  <div class="overlay">
  <h2 class="title">Rent mobile App</h2>
  <div className='links'>
    <a href=''><i className='fa fa-youtube-play'></i></a>
    <a href=''><i className='fa fa-github'></i></a>
 </div>
  </div>
</div>






<div class="image-container">
  <img src={horoslove} alt="Image" />
  <div class="overlay">
    <h2 class="title">Dating App</h2>
    <div className='links'>
    <a href=''><i className='fa fa-youtube-play'></i></a>
    <a href=''><i className='fa fa-github'></i></a>
 </div>
  </div>
</div>



<div class="image-container">
  <img src={pr7} alt="Image" />
  <div class="overlay">
    <h2 class="title">Sport News App (client) </h2>
    <div className='links'>
    <a href=''><i className='fa fa-youtube-play'></i></a>
  
 </div>
  </div>
</div>




<div class="image-container">
  <img src={pr8} alt="Image" />
  <div class="overlay">
    <h2 class="title">Painter Portfolio (client)</h2>
    <div className='links'>
    <a href=''><i className='fa fa-youtube-play'></i></a>

 </div>
  </div>
</div>






</div>
   


    </div>
  )
}

export default Portfolio
