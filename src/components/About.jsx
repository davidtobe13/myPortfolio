// import React from 'react'

// const About = () => {
//   return (
//     <div className='w-full  md:h-[80vh] flex flex-col items-center justify-center py-0 md:py-8 gap-4 pb-[90px]'>
//         <div className='w-[90%] md:w-[90%] h-[50%] flex flex-col items-start justify-center gap-4 '>
//         <div className='w-[100%] md:w-[40%] h-[100%] flex flex-col items-start justify-center gap-2 '>
//             <h1 className='text-2xl text-[#4ee0fd]'>About me</h1>
//             <p className='text-4xl text-white'  style={{ fontFamily: "'Playfair Display', serif" }}>I can deliver results that exceeds your expectations</p>
//             </div>

//         </div>
//         <div className='w-[90%] md:w-[100%] h-[50%] flex items-start justify-center gap-4 '>
//         <div className='w-[40%] h-[100%] hidden md:flex flex-col items-start justify-center gap-4 '>
//             </div>
//             <div className='w-[100%] md:w-[45%] h-[100%] flex flex-col items-start justify-center gap-4 px-0 md:px-10'>
//             <p className='text-lg md:text-xl text-white font-thin'>I am a motivated full-stack software developer with hands-on experience from my internship, proficient in Node.js, JavaScript, MongoDB, PostgreSQL, React.js, TypeScript, and Tailwind CSS. I bring a strong foundation in both backend and frontend development and am committed to making meaningful contributions to projects while continuously advancing my skills in the field.</p>
//             <button className=' text-[#4ee0fd] transition-all duration-300 px-5 py-2 border border-[#4ee0fd] button-glow'>Download CV</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default About


const About = () => {
  const handleDownload = () => {
    // The CV file should be in your public folder
    const link = document.createElement('a');
    link.href = '/DavidFullCV.pdf'; // Replace with your actual CV filename
    link.download = 'David-Tobe-CV.pdf'; // Name that will appear when downloading
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='w-full  md:h-[80vh] flex flex-col items-center justify-center py-0 md:py-8 gap-4 pb-[90px]'>
      <div className='w-[90%] md:w-[90%] h-[50%] flex flex-col items-start justify-center gap-4 '>
        <div className='w-[100%] md:w-[40%] h-[100%] flex flex-col items-start justify-center gap-2 '>
          <h1 className='text-2xl text-[#4ee0fd]'>About me</h1>
          <p className='text-4xl text-white' style={{ fontFamily: "'Playfair Display', serif" }}>I can deliver results that exceeds your expectations</p>
        </div>
      </div>
      
      <div className='w-[90%] md:w-[100%] h-[50%] flex items-start justify-center gap-4 '>
        <div className='w-[40%] h-[100%] hidden md:flex flex-col items-start justify-center gap-4 '>
        </div>
        <div className='w-[100%] md:w-[45%] h-[100%] flex flex-col items-start justify-center gap-4 px-0 md:px-10'>
          <p className='text-lg md:text-xl text-white font-thin'>I am a motivated full-stack software developer with hands-on experience from my internship, proficient in Node.js, JavaScript, MongoDB, PostgreSQL, React.js, TypeScript, and Tailwind CSS. I bring a strong foundation in both backend and frontend development and am committed to making meaningful contributions to projects while continuously advancing my skills in the field.</p>
          <button 
            onClick={handleDownload}
            className='text-[#4ee0fd] transition-all duration-300 px-5 py-2 border border-[#4ee0fd] button-glow'
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;