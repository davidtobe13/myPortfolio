// const Hero = () => {
//   const scrollToPortfolio = () => {
//     document.getElementById('Portfolio').scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className='w-full h-[90vh] flex justify-start items-center md:justify-center'>
//       <div className='w-[80%] md:w-[44%] md:h-[100%] flex flex-col items-start justify-center gap-4 ml-8 md:ml-0'>
//         <h1 className='text-7xl md:text-8xl text-white' style={{ fontFamily: "'Playfair Display', serif" }}>Hello, I'm David!</h1>
//         <p className='text-xl text-white' style={{ fontFamily: "'Lato', sans" }}>I'm a full-stack engineer and Web Developer.</p>
//         <button 
//           onClick={scrollToPortfolio}
//           className='text-[#4ee0fd] transition-all duration-300 px-5 py-2 border border-[#4ee0fd] button-glow'
//         >
//           Portfolio
//         </button>
//       </div>
//       <div 
//         className='w-[45%] h-[100%] hidden md:flex bg-cover bg-no-repeat bg-center'   
//         style={{ backgroundImage: "url('/hero.png')" }}
//       >
//       </div>
//     </div>
//   );
// };

// export default Hero;



import React from 'react';

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('Portfolio').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='relative w-full min-h-screen flex justify-center items-center overflow-hidden bg-black'>
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className='relative z-10 w-full flex flex-col md:flex-row justify-center items-center px-6 md:px-12 gap-12 pt-20'>
        {/* Left Content */}
        <div className='w-full md:w-1/2 flex flex-col items-start justify-center gap-6'>
          {/* <div className="inline-block">
            <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">
              Welcome to my world
            </span>
          </div> */}
          
          <h1 className='text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight'>
            Hello, I'm{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-gradient'>
              David!
            </span>
          </h1>
          
          <p className='text-xl md:text-2xl text-gray-300 font-light'>
            I'm a <span className='text-purple-400 font-semibold'>full-stack engineer</span> and{' '}
            <span className='text-pink-400 font-semibold'>Web Developer</span>.
          </p>

          <p className='text-gray-400 text-lg max-w-xl'>
            Combining expertise with innovation to deliver exceptional digital experiences that exceed expectations.
          </p>
          
          <div className="flex gap-4 mt-4">
            <button 
              onClick={scrollToPortfolio}
              className='group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105'
            >
              <span className="relative z-10">View Portfolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button 
              onClick={() => document.getElementById('About').scrollIntoView({ behavior: 'smooth' })}
              className='border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/30'
            >
              About Me
            </button>
          </div>
        </div>

        {/* Right Image/Visual */}
        <div className='w-full md:w-1/2 flex justify-center items-center'>
          <div className="relative w-full max-w-lg">
            {/* Glowing hexagon effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
            <div 
              className='relative w-full h-96 md:h-[500px] rounded-3xl bg-cover bg-center bg-no-repeat shadow-2xl shadow-purple-500/20 border border-purple-500/20'   
              style={{ backgroundImage: "url('/hero.png')" }}
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;