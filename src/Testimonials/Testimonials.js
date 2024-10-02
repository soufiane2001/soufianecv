import React from 'react'
import './style.css'
import karim from '../assets/karimr.png'
import michel from '../assets/michel.png'
function Testimonials() {
  return (
  <div className='testo'>
      
        <h5>Testimonials</h5>

<div className='container'>
       <div className='test'>
          <div className='word'>
              <h3>Karim wydady</h3>
             <div className='descr'>
                 <div></div>
                <p>
                I view setbacks as learning opportunities. When a project doesn’t go as planned, I reflect on what went wrong, whether it was a technical issue or something related to planning. For example, in a recent project, an algorithm I developed didn’t perform as expected in the real world. I went back to analyze the assumptions I had made and adjusted the model accordingly. This taught me the importance of flexibility and adapting to new information."
                </p>
             </div>


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
                I view setbacks as learning opportunities. When a project doesn’t go as planned, I reflect on what went wrong, whether it was a technical issue or something related to planning. For example, in a recent project, an algorithm I developed didn’t perform as expected in the real world. I went back to analyze the assumptions I had made and adjusted the model accordingly. This taught me the importance of flexibility and adapting to new information."
                </p>
             </div>


          </div>

      <div className='person'>
<div>
    <img src={michel} />
</div>
      </div>
       </div>







</div>

  </div>
  )
}

export default Testimonials