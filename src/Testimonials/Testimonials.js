import React from 'react'
import './style.css'
import karim from '../assets/karimr.png'
import michel from '../assets/michel.png'
import hinda from '../assets/hinda-removebg-preview.png'
function Testimonials() {
  return (
  <div className='testo'>
      
        <h5>Testimonials</h5>

<div className='container'>
       <div className='test'>
          <div className='word'>
              <h3>Karim whashington</h3>
             <div className='descr'>
                 <div></div>
                <p>
                "I had the pleasure of working with Soufiane on my website project, and I couldn’t be more satisfied with the results. He developed a sleek, modern platform for us, perfectly tailored to our needs. The design is visually stunning and user-friendly, and the functionality has exceeded our expectations. Soufiane's attention to detail, professionalism, and responsiveness throughout the project were exceptional. He understood our vision and turned it into reality while adding his own creative touch to make it even better.

We now have a powerful tool to showcase our content, and we’re already seeing positive feedback from our visitors. I highly recommend Soufiane to anyone looking for a talented and dedicated developer!
               " </p>
               
             </div>
 <a href='http://widadnews.atwebpages.com/home.php'>Visite Website</a>

          </div>

      <div className='person'>
<div>
    <img src={karim} />
</div>
      </div>
       </div>






       <div className='test'>
          <div className='word'>
              <h3>Michel Reby</h3>
             <div className='descr'>
                 <div></div>
                <p>
                "Working with Soufiane on the Reby Art website has been a fantastic experience! He took our artistic vision and brought it to life with a beautiful, responsive design that perfectly showcases our portfolio. The website feels modern, elegant, and is very easy to navigate, which is exactly what we needed to present our work to a broader audience.

Soufiane was incredibly professional, attentive to our requirements, and added his own creative ideas to enhance the site’s functionality and aesthetics. We’ve received great feedback from our visitors about how visually appealing and user-friendly the site is. I highly recommend Soufiane to anyone looking for a talented developer who understands both design and functionality."


                </p>
             </div>

             <a href='https://rebyart.vercel.app/'>Visite Website</a>
          </div>

      <div className='person'>
<div>
    <img src={michel} />
</div>
      </div>
       </div>




       <div className='test'>
          <div className='word'>
              <h3>Hind Elhassouni</h3>
             <div className='descr'>
                 <div></div>
                <p>
                I view setbacks as learning opportunities. When a project doesn’t go as planned, I reflect on what went wrong, whether it was a technical issue or something related to planning. For example, in a recent project, an algorithm I developed didn’t perform as expected in the real world. I went back to analyze the assumptions I had made and adjusted the model accordingly. This taught me the importance of flexibility and adapting to new information."
                </p>
               
             </div>
 <a href='https://hind-livid.vercel.app/'>Visite Website</a>

          </div>

      <div className='person'>
<div>
    <img src={hinda} />
</div>
      </div>
       </div>



</div>

  </div>
  )
}

export default Testimonials
