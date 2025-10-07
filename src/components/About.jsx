
// const About = () => {
//   const handleDownload = () => {
//     // The CV file should be in your public folder
//     const link = document.createElement('a');
//     link.href = '/DavidFullCV.pdf'; // Replace with your actual CV filename
//     link.download = 'David-Tobe-CV.pdf'; // Name that will appear when downloading
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className='w-full  md:h-[80vh] flex flex-col items-center justify-center py-0 md:py-8 gap-4 pb-[90px]'>
//       <div className='w-[90%] md:w-[90%] h-[50%] flex flex-col items-start justify-center gap-4 '>
//         <div className='w-[100%] md:w-[40%] h-[100%] flex flex-col items-start justify-center gap-2 '>
//           <h1 className='text-2xl text-[#4ee0fd]'>About me</h1>
//           <p className='text-4xl text-white' style={{ fontFamily: "'Playfair Display', serif" }}>I can deliver results that exceeds your expectations</p>
//         </div>
//       </div>
      
//       <div className='w-[90%] md:w-[100%] h-[50%] flex items-start justify-center gap-4 '>
//         <div className='w-[40%] h-[100%] hidden md:flex flex-col items-start justify-center gap-4 '>
//         </div>
//         <div className='w-[100%] md:w-[45%] h-[100%] flex flex-col items-start justify-center gap-4 px-0 md:px-10'>
//           <p className='text-lg md:text-xl text-white font-thin'>I am a motivated full-stack software developer with hands-on experience from my internship, proficient in Node.js, JavaScript, MongoDB, PostgreSQL, React.js, TypeScript, and Tailwind CSS. I bring a strong foundation in both backend and frontend development and am committed to making meaningful contributions to projects while continuously advancing my skills in the field.</p>
//           <button 
//             onClick={handleDownload}
//             className='text-[#4ee0fd] transition-all duration-300 px-5 py-2 border border-[#4ee0fd] button-glow'
//           >
//             Download CV
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;



// import React from 'react';
// import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';

// const About = () => {
//   const handleDownload = () => {
//     const link = document.createElement('a');
//     link.href = '/DavidFullCV.pdf';
//     link.download = 'David-Tobe-CV.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const stats = [
//     { icon: <FaCode />, label: 'Projects Completed', value: '15+' },
//     { icon: <FaLaptopCode />, label: 'Technologies', value: '12+' },
//     { icon: <FaRocket />, label: 'Experience', value: '2+ Years' },
//   ];

//   return (
//     <div className='relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-black overflow-hidden'>
//       {/* Background effects */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

//       <div className='relative z-10 w-full max-w-7xl mx-auto'>
//         {/* Header */}
//         <div className='flex flex-col items-center text-center mb-16'>
//           <span className='text-purple-400 text-sm font-semibold tracking-wider uppercase mb-4'>
//             Get to know me
//           </span>
//           <h2 className='text-4xl md:text-6xl text-white font-bold mb-4'>
//             About <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Me</span>
//           </h2>
//           <p className='text-gray-400 text-lg max-w-2xl'>
//             I can deliver results that exceed your expectations
//           </p>
//         </div>

//         {/* Content Grid */}
//         <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16'>
//           {/* Left - Image placeholder */}
//           <div className='relative'>
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-20"></div>
//             <div className='relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-purple-500/20'>
//               <div className='text-6xl text-purple-400 mb-4'>👨‍💻</div>
//               <h3 className='text-2xl text-white font-bold mb-4'>Full-Stack Developer</h3>
//               <p className='text-gray-400'>
//                 Passionate about creating innovative solutions and turning ideas into reality through clean, efficient code.
//               </p>
//             </div>
//           </div>

//           {/* Right - Description */}
//           <div className='flex flex-col gap-6'>
//             <p className='text-lg text-gray-300 leading-relaxed'>
//               I am a <span className='text-purple-400 font-semibold'>motivated full-stack software developer</span> with hands-on experience from my internship, proficient in{' '}
//               <span className='text-pink-400'>Node.js, JavaScript, MongoDB, PostgreSQL, React.js, TypeScript,</span> and{' '}
//               <span className='text-purple-400'>Tailwind CSS</span>.
//             </p>
            
//             <p className='text-lg text-gray-300 leading-relaxed'>
//               I bring a strong foundation in both <span className='text-purple-400 font-semibold'>backend and frontend development</span> and am committed to making meaningful contributions to projects while continuously advancing my skills in the field.
//             </p>

//             <button 
//               onClick={handleDownload}
//               className='group relative overflow-hidden self-start bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105'
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                 </svg>
//                 Download CV
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </button>
//           </div>
//         </div>

//         {/* Stats Grid */}
//         <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
//           {stats.map((stat, index) => (
//             <div 
//               key={index}
//               className='group relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105'
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               <div className='relative flex items-center gap-4'>
//                 <div className='text-4xl text-purple-400 group-hover:scale-110 transition-transform duration-300'>
//                   {stat.icon}
//                 </div>
//                 <div>
//                   <div className='text-3xl font-bold text-white mb-1'>{stat.value}</div>
//                   <div className='text-gray-400 text-sm'>{stat.label}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;







import React, { useState, useEffect } from 'react';
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';
import AOS from "aos";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.refresh();
    
    // Simulate content loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/DavidFullCV.pdf';
    link.download = 'David-Tobe-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = [
    { icon: <FaCode />, label: 'Projects Completed', value: '15+' },
    { icon: <FaLaptopCode />, label: 'Technologies', value: '12+' },
    { icon: <FaRocket />, label: 'Experience', value: '2+ Years' },
  ];

  // Loading State
  if (loading) {
    return (
      <div className='relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-black overflow-hidden'>
        {/* Background effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

        {/* Loader Content */}
        <div className="relative z-10 flex flex-col items-center gap-8">
          {/* Profile Icon with Pulse */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-2xl shadow-purple-500/50">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>

          {/* Loading Text */}
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-xl text-white font-semibold">Loading About Me</h3>
            <p className="text-gray-400 text-sm">Getting to know each other...</p>
          </div>

          {/* Animated Stats Preview */}
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div 
                key={item}
                className="w-20 h-20 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/20 animate-pulse"
                style={{ animationDelay: `${item * 0.2}s` }}
              ></div>
            ))}
          </div>

          {/* Loading Dots */}
          <div className="flex gap-2 mt-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce animation-delay-400"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-black overflow-hidden'>
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className='relative z-10 w-full max-w-7xl mx-auto'>
        {/* Header */}
        <div className='flex flex-col items-center text-center mb-16'>
          <span 
            className='text-purple-400 text-sm font-semibold tracking-wider uppercase mb-4'
            data-aos="fade-down"
          >
            Get to know me
          </span>
          <h2 
            className='text-4xl md:text-6xl text-white font-bold mb-4'
            data-aos="fade-up"
            data-aos-delay="100"
          >
            About <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Me</span>
          </h2>
          <p 
            className='text-gray-400 text-lg max-w-2xl'
            data-aos="fade-up"
            data-aos-delay="200"
          >
            I can deliver results that exceed your expectations
          </p>
        </div>

        {/* Content Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16'>
          {/* Left - Image placeholder */}
          <div className='relative' data-aos="fade-right" data-aos-delay="300">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-20"></div>
            <div className='relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-purple-500/20'>
              <div className='text-6xl text-purple-400 mb-4'>👨‍💻</div>
              <h3 className='text-2xl text-white font-bold mb-4'>Full-Stack Developer</h3>
              <p className='text-gray-400'>
                Passionate about creating innovative solutions and turning ideas into reality through clean, efficient code.
              </p>
            </div>
          </div>

          {/* Right - Description */}
          <div className='flex flex-col gap-6' data-aos="fade-left" data-aos-delay="400">
            <p className='text-lg text-gray-300 leading-relaxed'>
              I am a <span className='text-purple-400 font-semibold'>motivated full-stack software developer</span> with hands-on experience from my internship, proficient in{' '}
              <span className='text-pink-400'>Node.js, JavaScript, MongoDB, PostgreSQL, React.js, TypeScript,</span> and{' '}
              <span className='text-purple-400'>Tailwind CSS</span>.
            </p>
            
            <p className='text-lg text-gray-300 leading-relaxed'>
              I bring a strong foundation in both <span className='text-purple-400 font-semibold'>backend and frontend development</span> and am committed to making meaningful contributions to projects while continuously advancing my skills in the field.
            </p>

            <button 
              onClick={handleDownload}
              className='group relative overflow-hidden self-start bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105'
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6' data-aos="zoom-in" data-aos-delay="500">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className='group relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105'
              data-aos="flip-up"
              data-aos-delay={600 + (index * 100)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className='relative flex items-center gap-4'>
                <div className='text-4xl text-purple-400 group-hover:scale-110 transition-transform duration-300'>
                  {stat.icon}
                </div>
                <div>
                  <div className='text-3xl font-bold text-white mb-1'>{stat.value}</div>
                  <div className='text-gray-400 text-sm'>{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
