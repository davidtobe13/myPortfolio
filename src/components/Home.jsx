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

// import React from "react";
// import Header from "./Header";
// import Hero from "./Hero";
// import About from "./About";
// import Skills from "./Skills";
// import Portfolio from "./Portfolio";
// import Footer from "./Footer";

// const Home = () => {
//   return (
//     <div className="bg-[#000000] w-full text-white">
//       <Header />

//       {/* Sections with IDs for scrolling */}
//       <div id="Home" className="pt-[80px]">
//         <Hero />
//       </div>
//       <div id="About" className="pt-[80px]">
//         <About />
//       </div>
//       <div id="Skills" className="pt-[80px]">
//         <Skills />
//       </div>
//       <div id="Portfolio" className="pt-[80px]">
//         <Portfolio />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Home;



// import React from "react";
// import { motion } from "framer-motion"; // Import Framer Motion
// import Header from "./Header";
// import Hero from "./Hero";
// import About from "./About";
// import Skills from "./Skills";
// import Portfolio from "./Portfolio";
// import Footer from "./Footer";

// const sectionVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
// };

// const Home = () => {
//   return (
//     <div className="bg-[#000000] w-full text-white">
//       <Header />

//       {/* Sections with Animations */}
//       <motion.div id="Home" className="pt-[80px]" initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
//         <Hero />
//       </motion.div>

//       <motion.div id="About" className="pt-[80px]" initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
//         <About />
//       </motion.div>

//       <motion.div id="Skills" className="pt-[80px]" initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
//         <Skills />
//       </motion.div>

//       <motion.div id="Portfolio" className="pt-[80px]" initial="hidden" whileInView="visible" variants={sectionVariants} viewport={{ once: true }}>
//         <Portfolio />
//       </motion.div>

//       <Footer />
//     </div>
//   );
// };

// export default Home;


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // Initialize AOS
  }, []);

  return (
    <div className="bg-[#000000] w-full text-white">
      <Header />

      {/* Apply AOS animations using data-aos attributes */}
      <div id="Home" className="pt-[80px]" data-aos="fade-up">
        <Hero />
      </div>
      <div id="About" className="pt-[80px]" data-aos="fade-left">
        <About />
      </div>
      <div id="Skills" className="pt-[80px]" data-aos="fade-right">
        <Skills />
      </div>
      <div id="Portfolio" className="pt-[80px]" data-aos="zoom-in">
        <Portfolio />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
