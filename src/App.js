import React, { useState } from 'react';

import './App.css';
import Header from './header/header';
import Hero from './hero/hero';
import About from './about/About';
import Skills from './skills/Skills';
import Portfolio from './portfolio/Portfolio';
import Experience from './Experience/Experience';
import Testimonials from './Testimonials/Testimonials';

function App() {
 
   
  
  return (
  <>
  <Header/>
  <Hero/>
  <About/>
<Skills/>
<Portfolio/>
<Experience/>
<Testimonials/>
  </>
  );
}

export default App;
