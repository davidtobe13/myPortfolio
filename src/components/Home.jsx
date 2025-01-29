// import React from 'react'
// import Header from './Header'
// import Hero from './Hero'
// import About from './About'
// import Skills from './Skills'
// import Portfolio from './Portfolio'

// const Home = () => {
//   return (
//     <div className='bg-[#000000] w-full h-[100%] text-white'>
//       <Header/>
//       <Hero/>
//       <About/>
//       <Skills/>
//       <Portfolio/>

//     </div>
//   )
// }

// export default Home

import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <div className="bg-[#000000] w-full text-white">
      <Header />

      {/* Sections with IDs for scrolling */}
      <div id="Home" className="pt-[80px]">
        <Hero />
      </div>
      <div id="About" className="pt-[80px]">
        <About />
      </div>
      <div id="Skills" className="pt-[80px]">
        <Skills />
      </div>
      <div id="Portfolio" className="pt-[80px]">
        <Portfolio />
      </div>
    </div>
  );
};

export default Home;
