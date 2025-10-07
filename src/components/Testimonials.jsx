// import React, { useState } from 'react';
// import { FaQuoteLeft, FaStar } from 'react-icons/fa';

// const Testimonials = () => {
//   const testimonials = [
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       role: "CEO, TechStart Inc.",
//       image: "https://randomuser.me/api/portraits/women/44.jpg",
//       content: "David's work exceeded all our expectations. His attention to detail and ability to deliver on time made our project a huge success. Highly recommended!",
//       rating: 5,
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       role: "Product Manager, InnovateCo",
//       image: "https://randomuser.me/api/portraits/men/32.jpg",
//       content: "Working with David was an absolute pleasure. His technical expertise and problem-solving skills helped us overcome complex challenges effortlessly.",
//       rating: 5,
//     },
//     {
//       id: 3,
//       name: "Emma Williams",
//       role: "Founder, DesignHub",
//       image: "https://randomuser.me/api/portraits/women/68.jpg",
//       content: "David transformed our vision into reality with his exceptional development skills. The final product was beyond what we imagined. Outstanding work!",
//       rating: 5,
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className='relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-black overflow-hidden'>
//       {/* Background effects */}
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
//       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

//       <div className='relative z-10 w-full max-w-6xl mx-auto'>
//         {/* Header */}
//         <div className='flex flex-col items-center text-center mb-16'>
//           <span className='text-purple-400 text-sm font-semibold tracking-wider uppercase mb-4'>
//             Testimonials
//           </span>
//           <h2 className='text-4xl md:text-6xl text-white font-bold mb-4'>
//             What <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Clients Say</span>
//           </h2>
//           <p className='text-gray-400 text-lg max-w-2xl'>
//             Take it from our users
//           </p>
//         </div>

//         {/* Testimonials Grid */}
//         <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
//           {testimonials.map((testimonial, index) => (
//             <div 
//               key={testimonial.id}
//               className='group relative overflow-hidden rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 cursor-pointer'
//               onClick={() => setActiveIndex(index)}
//             >
//               {/* Background gradient */}
//               <div className='absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800'></div>
              
//               {/* Glow effect on hover */}
//               <div className='absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

//               {/* Content */}
//               <div className='relative p-8 flex flex-col'>
//                 {/* Quote icon */}
//                 <div className='text-4xl text-purple-400 mb-4 opacity-30'>
//                   <FaQuoteLeft />
//                 </div>

//                 {/* Stars */}
//                 <div className='flex gap-1 mb-4'>
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <FaStar key={i} className='text-yellow-400' />
//                   ))}
//                 </div>

//                 {/* Testimonial text */}
//                 <p className='text-gray-300 mb-6 flex-grow leading-relaxed'>
//                   "{testimonial.content}"
//                 </p>

//                 {/* Author */}
//                 <div className='flex items-center gap-4 pt-4 border-t border-purple-500/20'>
//                   <img 
//                     src={testimonial.image} 
//                     alt={testimonial.name}
//                     className='w-14 h-14 rounded-full border-2 border-purple-500/50 object-cover'
//                   />
//                   <div>
//                     <h4 className='text-white font-semibold'>{testimonial.name}</h4>
//                     <p className='text-purple-400 text-sm'>{testimonial.role}</p>
//                   </div>
//                 </div>

//                 {/* Corner accent */}
//                 <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-3xl'></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className='mt-16 text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 border border-purple-500/20'>
//           <h3 className='text-3xl text-white font-bold mb-4'>
//             Ready to Start Your Project?
//           </h3>
//           <p className='text-gray-400 mb-8 max-w-2xl mx-auto'>
//             Join these satisfied clients and let's create something amazing together
//           </p>
//           <a 
//             href={`https://wa.me/2347081101605?text=${encodeURIComponent("Hello David, I'm interested in hiring you for a project!")}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className='inline-block group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105'
//           >
//             <span className="relative z-10">Get in Touch</span>
//             <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;



import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import AOS from "aos";

const Testimonials = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "George Ebisike",
      role: "CTO/Co-founder, Afiari Tehnologies",
      content: "David's work exceeded all our expectations. His attention to detail and ability to deliver on time made our project a huge success. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      name: "David Opeyemi",
      role: "CEO/Founder, Clubbera",
      content: "Working with David was an absolute pleasure. His technical expertise and problem-solving skills helped us overcome complex challenges effortlessly.",
      rating: 5,
    },
    {
      id: 3,
      name: "Joseph Chidubem",
      role: "Founder/CEO, Jace Nigeria Enterprise",
      content: "David transformed our vision into reality with his exceptional development skills. The final product was beyond what we imagined. Outstanding work!",
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-black overflow-hidden'>
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className='relative z-10 w-full max-w-6xl mx-auto'>
        {/* Header */}
        <div className='flex flex-col items-center text-center mb-16'>
          <span 
            className='text-purple-400 text-sm font-semibold tracking-wider uppercase mb-4'
            data-aos="fade-down"
          >
            Testimonials
          </span>
          <h2 
            className='text-4xl md:text-6xl text-white font-bold mb-4'
            data-aos="fade-up"
            data-aos-delay="100"
          >
            What <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Clients Say</span>
          </h2>
          <p 
            className='text-gray-400 text-lg max-w-2xl'
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Take it from our users
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className='group relative overflow-hidden rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 cursor-pointer'
              onClick={() => setActiveIndex(index)}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Background gradient */}
              <div className='absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800'></div>
              
              {/* Glow effect on hover */}
              <div className='absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

              {/* Content */}
              <div className='relative p-8 flex flex-col'>
                {/* Quote icon */}
                <div className='text-5xl text-purple-400 mb-4 opacity-30'>
                  <FaQuoteLeft />
                </div>

                {/* Stars */}
                <div className='flex gap-1 mb-4'>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className='text-yellow-400 text-sm' />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className='text-gray-300 mb-6 flex-grow leading-relaxed text-base'>
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className='pt-4 border-t border-purple-500/20'>
                  <h4 className='text-white font-semibold text-lg'>{testimonial.name}</h4>
                  <p className='text-purple-400 text-sm mt-1'>{testimonial.role}</p>
                </div>

                {/* Corner accent */}
                <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-3xl'></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div 
          className='mt-16 text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 border border-purple-500/20'
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <h3 className='text-3xl text-white font-bold mb-4'>
            Ready to Start Your Project?
          </h3>
          <p className='text-gray-400 mb-8 max-w-2xl mx-auto'>
            Join these satisfied clients and let's create something amazing together
          </p>
          <a 
            href={`https://wa.me/2347081101605?text=${encodeURIComponent("Hello David, I'm interested in hiring you for a project!")}`}
            target="_blank"
            rel="noopener noreferrer"
            className='inline-block group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105'
          >
            <span className="relative z-10">Get in Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;