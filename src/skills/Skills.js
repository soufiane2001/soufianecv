import React from 'react'
import './style.css'
import htc from '../assets/htc.png'
import rn from '../assets/react-native.png'
import rj from '../assets/react.j.png'
import lr from '../assets/Laravel.png'
import ns from '../assets/nextjs-.png'
import mysql from '../assets/mysqll.png'
import frb from '../assets/frb.png'
import bst from '../assets/bts.png'
import jq from '../assets/jquery.png'
import tlw from '../assets/tll.png'
import java from '../assets/java.png'
import typ from '../assets/Typescript.png'
function Skills() {
  return (
    <div>
        <h1 className='ski'>My Skills</h1>

      <div className='skills'>
            <div className='card'>
                <div className='div1'>
                <img src={htc} className='card1 c' />
                </div>
           <div className='div2'>
                <p>Html&CSS</p>
           </div>     
            </div>          
            <div className='card'>
            <div className='div1'>
                <img className='card2 c' src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"} />
             </div>
             <div className='div2'>
                <p>Javascript</p>
                </div>  
            </div> 
            <div className='card'>
                <div className='div1'>
                <img className='card3 c' src={rn} />
                </div>
                <div className='div2'>
                <p>React native</p>
                </div>
           
            </div> 

            <div className='card'>
                <div className='div1'>
                <img className='card4 c' src={lr} />
                </div>
                <div className='div2'>
                <p>Laravel</p>
                </div>
            </div> 
            <div className='card'>

                <div className='div1'>
                <img className='card6' src={mysql} />
                </div>
                <div className='div2'>
                <p >Mysql</p>
                </div>
            </div> 
            <div className='card'>
            <div className='div1'>
                <img className='card5' src={ns} />
                </div>
                <div className='div2'>
                <p > Nextjs</p>
                </div>
            </div> 
            <div className='card'>
            <div className='div1'>
                <img className='card3 c' src={rj} />
                </div>
                <div className='div2'>
                <p>React js</p>
                </div>
            </div> 
            
            <div className='card'>
            <div className='div1'>
                <img className='card7 ' src={frb} />
                </div>
                <div className='div2'>
                <p className=''>FireBase</p>
                </div>
            </div> 
            <div className='card'>
            <div className='div1'>

                <img className='card7 c' src={bst} />
                </div>
                <div className='div2'>
                <p className=''>Bootstrap</p>
                </div>
            </div>
          
            <div className='card'>
            <div className='div1'>
                <img className='card9 ' src={java} />
                </div>
                <div className='div2'>
                <p >java</p>
                </div>
            </div>
            <div className='card'>
            <div className='div1'>

                <img className='card9 ' src={tlw} />
                </div>
                <div className='div2'>
                <p >Tailwind css</p>
                </div>
            </div>
           
            <div className='card'>
            <div className='div1'>
                <img className='card9 ' src={typ} />
                </div>
                <div className='div2'>
                <p className=''>Typescript</p>
                </div>
            </div>
      </div>

    </div>
  )
}

export default Skills