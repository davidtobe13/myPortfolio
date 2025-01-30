// import React from 'react'

// const Hero = () => {
//   return (
//     <div className='w-full h-[90vh] flex  justify-start items-center md:justify-center'>
//         <div className='w-[80%] md:w-[44%] md:h-[100%] flex flex-col items-start justify-center gap-4 ml-8 md:ml-0'>
//             <h1 className='text-7xl md:text-8xl text-white ' style={{ fontFamily: "'Playfair Display', serif" }}>Hello, I'm David!</h1>
//             <p className='text-xl text-white' style={{ fontFamily: "'Lato', sans" }}>I'm a full-stack engineer and Web Developer.</p>
//             <button className=' text-[#4ee0fd] transition-all duration-300 px-5 py-2 border border-[#4ee0fd] button-glow'>Portfolio</button>
//         </div>
//         <div className='w-[45%] h-[100%] hidden md:flex bg-cover bg-no-repeat bg-center'   style={{ backgroundImage: "url('/david.png')" }}
//         >
//         </div>
//     </div>
//   )
// }

// export default Hero



const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('Portfolio').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='w-full h-[90vh] flex justify-start items-center md:justify-center'>
      <div className='w-[80%] md:w-[44%] md:h-[100%] flex flex-col items-start justify-center gap-4 ml-8 md:ml-0'>
        <h1 className='text-7xl md:text-8xl text-white' style={{ fontFamily: "'Playfair Display', serif" }}>Hello, I'm David!</h1>
        <p className='text-xl text-white' style={{ fontFamily: "'Lato', sans" }}>I'm a full-stack engineer and Web Developer.</p>
        <button 
          onClick={scrollToPortfolio}
          className='text-[#4ee0fd] transition-all duration-300 px-5 py-2 border border-[#4ee0fd] button-glow'
        >
          Portfolio
        </button>
      </div>
      <div 
        className='w-[45%] h-[100%] hidden md:flex bg-cover bg-no-repeat bg-center'   
        style={{ backgroundImage: "url('/hero.png')" }}
      >
      </div>
    </div>
  );
};

export default Hero;