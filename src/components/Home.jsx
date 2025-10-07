// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css"; // Import AOS styles
// import Header from "./Header";
// import Hero from "./Hero";
// import About from "./About";
// import Skills from "./Skills";
// import Portfolio from "./Portfolio";
// import Footer from "./Footer";
// import Testimonials from "./Testimonials";

// const Home = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true }); // Initialize AOS
//   }, []);

//   return (
//     <div className="bg-[#000000] w-full text-white">
//       <Header />

//       {/* Apply AOS animations using data-aos attributes */}
//       <div id="Home" className="pt-[20px]" data-aos="fade-up">
//         <Hero />
//       </div>
//       <div id="About" className="pt-[20px]" data-aos="fade-left">
//         <About />
//       </div>
//       <div id="Skills" className="pt-[20px]" data-aos="fade-right">
//         <Skills />
//       </div>
//       <div id="Portfolio" className="pt-[20px]" data-aos="zoom-in">
//         <Portfolio />
//       </div>
//       <div id="Testimonials" className="pt-[20px]" data-aos="zoom-in">
//         <Testimonials />
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Home;



import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import Loader from "./Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({ 
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
      delay: 100,
    });

    // Simulate loading time (you can replace this with actual loading logic)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds loader

    return () => clearTimeout(timer);
  }, []);

  // Show loader while loading
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-[#000000] w-full text-white overflow-x-hidden">
      <Header />

      {/* Hero Section - Fade in from bottom */}
      <div id="Home" className="pt-[20px]" data-aos="fade-up" data-aos-duration="1200">
        <Hero />
      </div>

      {/* About Section - Slide in from right */}
      <div id="About" className="pt-[20px]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
        <About />
      </div>

      {/* Skills Section - Zoom in with rotation */}
      <div id="Skills" className="pt-[20px]" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="150">
        <Skills />
      </div>

      {/* Portfolio Section - Slide in from left */}
      <div id="Portfolio" className="pt-[20px]" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
        <Portfolio />
      </div>

      {/* Testimonials Section - Fade in with flip */}
      <div id="Testimonials" className="pt-[20px]" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="150">
        <Testimonials />
      </div>

      {/* Footer - Fade in */}
      <div data-aos="fade-up" data-aos-duration="800">
        <Footer />
      </div>
    </div>
  );
};

export default Home;