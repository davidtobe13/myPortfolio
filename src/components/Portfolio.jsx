// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// const projects = [
//   { id: 1, title: "Clubbera", description: "Ready to break free from the virtual world and make some real-life connections? Clubbera is here to help you do just that! This platform is all about bringing people together through shared interests and unforgettable experiences.", image: "/clubbera.jpg", link: "https://clubbera.com/" },
//   { id: 2, title: "Lagos Diocese Youth", description: "This is a website desined for the Anglican Communion Diocese of Lagos youth. It is a work in progress and it has 2025 camp registration link that is still in progress.", image: "/anglican.jpg", link: "https://www.dioceseoflagosyouths.com/" },
//   { id: 3, title: "Furniro", description: "Funiro is more than just an online store for furnitures. They are passionate about bringing you handcrafted furniture and decor that are both functional and beautiful", image: "/furniro.jpg", link: "https://furniro-iota-eight.vercel.app/" },
//   { id: 4, title: "Scupay", description: "A payment management solution for schools. Scupay is a payment solution designed to streamline payment management for educational institutions", image: "/scupay.jpg", link: "https://scupay-new.vercel.app/" },
//   { id: 5, title: "Portfolio", description: "This is a simple yet modern and beautiful portfolio built for a cinematographer and photograther", image: "/esther.jpg", link: "https://estheramahero.netlify.app/" },
//   { id: 6, title: "Geodex", description: "Geodex is a web application that connects brands to outdoor advertising through innovative tech, data scientists, marketers, and media experts.", image: "/geodex.jpg", link: "https://geodex.tech/" },
//   { id: 7, title: "Shopify Replica", description: "This is a simple yet modern and beautiful replica of the Shopify app. (e-commerce)", image: "/shopify.jpg", link: "https://shofy-beauty-and-cosmetics-ecommerce-client-eight.vercel.app/" },
//   { id: 8, title: "Tugro Cargo Group", description: "This is a representative logistics operator providing full range of service in the sphere of customs clearance and transport worldwide for any type of cargo.", image: "/cargo.jpg", link: "https://tugrocargo.online/" },
//   { id: 9, title: "Pinnacle Homes & Autos", description: "This is more than just an online marketplace. They bring you a premium selection of high-quality vehicles and beautiful homes that reflect both style and reliability", image: "/pinnacle.jpg", link: "https://pinnacle-red.vercel.app/" },
// ];

// const Portfolio = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [slidesPerView, setSlidesPerView] = useState(1);
//   const [swiperRef, setSwiperRef] = useState(null);

//   // Handle responsive slidesPerView
//   useEffect(() => {
//     const updateSlides = () => {
//       setSlidesPerView(window.innerWidth >= 768 ? 3 : 1);
//     };
//     updateSlides();
//     window.addEventListener("resize", updateSlides);
//     return () => window.removeEventListener("resize", updateSlides);
//   }, []);

//   // Handle auto-scrolling
//   useEffect(() => {
//     if (!swiperRef) return;

//     const interval = setInterval(() => {
//       const lastIndex = projects.length - slidesPerView;
//       if (swiperRef.activeIndex >= lastIndex) {
//         swiperRef.slideTo(0);
//       } else {
//         swiperRef.slideNext();
//       }
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [swiperRef, slidesPerView]);

//   // Calculate the number of circles (pagination)
//   const totalSlides = Math.ceil(projects.length / slidesPerView);

//   return (
//     <div className="w-full flex flex-col items-center justify-center py-0 md:py-14 gap-4 pb-[90px]">
//       <div className="w-[90%] md:w-[90%] flex flex-col items-start md:items-center justify-center gap-4">
//         <div className="w-[100%] md:w-[35%] flex flex-col items-start md:items-center justify-center gap-2">
//           <h1 className="text-2xl text-[#4ee0fd]">Portfolio</h1>
//           <p className="text-4xl text-white md:text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
//             See some of my projects and works
//           </p>
//         </div>
//       </div>

//       <div className="w-[90%] md:w-[100%] flex items-start justify-center gap-4">
//         <div className="flex flex-col items-center justify-center w-full p-6 bg-[#111211]">
//           <Swiper
//             spaceBetween={20}
//             slidesPerView={slidesPerView}
//             onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//             onSwiper={setSwiperRef}
//             className="w-full max-w-4xl"
//           >
//             {projects.map((project) => (
//               <SwiperSlide key={project.id}>
//                 <a href={project.link} target="_blank" rel="noopener noreferrer" className="block p-4 rounded-2xl hover:scale-105 transition-transform">
//                   <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-xl" />
//                   <h3 className="mt-4 text-lg font-bold text-[#4ee0fd]">{project.title}</h3>
//                   <p className="text-[12px] text-white">{project.description}</p>
//                 </a>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Pagination */}
//           <div className="flex mt-4 gap-2">
//             {Array.from({ length: totalSlides }).map((_, index) => (
//               <div
//                 key={index}
//                 onClick={() => swiperRef && swiperRef.slideTo(index * slidesPerView)}
//                 className={`cursor-pointer h-3 rounded-full transition-all ${
//                   Math.floor(activeIndex / slidesPerView) === index ? "w-8 bg-[#87f1ff]" : "w-3 bg-[#c6e3e7]"
//                 }`}
//               ></div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;


// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectCoverflow } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-coverflow";

// const projects = [
//   { id: 1, title: "Clubbera", description: "Ready to break free from the virtual world and make some real-life connections? Clubbera is here to help you do just that! This platform is all about bringing people together through shared interests and unforgettable experiences.", image: "/clubbera.jpg", link: "https://clubbera.com/", tech: ["React", "Node.js", "MongoDB"] },
//   { id: 2, title: "Lagos Diocese Youth", description: "This is a website designed for the Anglican Communion Diocese of Lagos youth. It is a work in progress and it has 2025 camp registration link that is still in progress.", image: "/anglican.jpg", link: "https://www.dioceseoflagosyouths.com/", tech: ["React", "Tailwind CSS"] },
//   { id: 3, title: "Furniro", description: "Funiro is more than just an online store for furnitures. They are passionate about bringing you handcrafted furniture and decor that are both functional and beautiful", image: "/furniro.jpg", link: "https://furniro-iota-eight.vercel.app/", tech: ["React", "E-commerce"] },
//   { id: 4, title: "Scupay", description: "A payment management solution for schools. Scupay is a payment solution designed to streamline payment management for educational institutions", image: "/scupay.jpg", link: "https://scupay-new.vercel.app/", tech: ["React", "Payment API"] },
//   { id: 5, title: "Portfolio", description: "This is a simple yet modern and beautiful portfolio built for a cinematographer and photographer", image: "/esther.jpg", link: "https://estheramahero.netlify.app/", tech: ["React", "Framer Motion"] },
//   { id: 6, title: "Geodex", description: "Geodex is a web application that connects brands to outdoor advertising through innovative tech, data scientists, marketers, and media experts.", image: "/geodex.jpg", link: "https://geodex.tech/", tech: ["React", "Maps API"] },
//   { id: 7, title: "Shopify Replica", description: "This is a simple yet modern and beautiful replica of the Shopify app. (e-commerce)", image: "/shopify.jpg", link: "https://shofy-beauty-and-cosmetics-ecommerce-client-eight.vercel.app/", tech: ["React", "E-commerce"] },
//   { id: 8, title: "Tugro Cargo Group", description: "This is a representative logistics operator providing full range of service in the sphere of customs clearance and transport worldwide for any type of cargo.", image: "/cargo.jpg", link: "https://tugrocargo.online/", tech: ["React", "Logistics"] },
//   { id: 9, title: "Pinnacle Homes & Autos", description: "This is more than just an online marketplace. They bring you a premium selection of high-quality vehicles and beautiful homes that reflect both style and reliability", image: "/pinnacle.jpg", link: "https://pinnacle-red.vercel.app/", tech: ["React", "Marketplace"] },
// ];

// const Portfolio = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [slidesPerView, setSlidesPerView] = useState(1);
//   const [swiperRef, setSwiperRef] = useState(null);

//   useEffect(() => {
//     const updateSlides = () => {
//       if (window.innerWidth >= 1024) {
//         setSlidesPerView(3);
//       } else if (window.innerWidth >= 768) {
//         setSlidesPerView(2);
//       } else {
//         setSlidesPerView(1);
//       }
//     };
//     updateSlides();
//     window.addEventListener("resize", updateSlides);
//     return () => window.removeEventListener("resize", updateSlides);
//   }, []);

//   const totalSlides = Math.ceil(projects.length / slidesPerView);

//   return (
//     <div className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-black overflow-hidden">
//       {/* Background effects */}
//       <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
//       <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

//       <div className='relative z-10 w-full max-w-7xl mx-auto'>
//         {/* Header */}
//         <div className='flex flex-col items-center text-center mb-16'>
//           <span className='text-purple-400 text-sm font-semibold tracking-wider uppercase mb-4'>
//             My work
//           </span>
//           <h2 className='text-4xl md:text-6xl text-white font-bold mb-4'>
//             <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600'>Portfolio</span>
//           </h2>
//           <p className='text-gray-400 text-lg max-w-2xl'>
//             See some of my projects and works
//           </p>
//         </div>

//         {/* Projects Carousel */}
//         <div className="w-full">
//           <Swiper
//             spaceBetween={30}
//             slidesPerView={slidesPerView}
//             centeredSlides={slidesPerView > 1}
//             onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//             onSwiper={setSwiperRef}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             modules={[Autoplay]}
//             className="w-full pb-12"
//           >
//             {projects.map((project) => (
//               <SwiperSlide key={project.id}>
//                 <div className="group relative overflow-hidden rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-105">
//                   {/* Image */}
//                   <div className="relative h-64 overflow-hidden">
//                     <img 
//                       src={project.image} 
//                       alt={project.title} 
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                     {/* Gradient overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    
//                     {/* Tech tags */}
//                     <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
//                       {project.tech.map((tech, index) => (
//                         <span 
//                           key={index}
//                           className="px-3 py-1 bg-purple-600/80 backdrop-blur-sm text-white text-xs rounded-full"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="relative p-6 bg-gradient-to-br from-gray-900 to-gray-800">
//                     <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-3">
//                       {project.title}
//                     </h3>
//                     <p className="text-gray-400 text-sm mb-4 line-clamp-3">
//                       {project.description}
//                     </p>
                    
//                     {/* View Project Button */}
//                     <a 
//                       href={project.link} 
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center gap-2 text-purple-400 hover:text-blue-400 transition-colors duration-300 font-medium"
//                     >
//                       View Project
//                       <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                       </svg>
//                     </a>
//                   </div>

//                   {/* Glow effect on hover */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Pagination */}
//           <div className="flex justify-center gap-2 mt-8">
//             {Array.from({ length: totalSlides }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => swiperRef && swiperRef.slideTo(index * slidesPerView)}
//                 className={`h-2 rounded-full transition-all duration-300 ${
//                   Math.floor(activeIndex / slidesPerView) === index 
//                     ? "w-8 bg-gradient-to-r from-purple-500 to-blue-500" 
//                     : "w-2 bg-gray-600 hover:bg-gray-500"
//                 }`}
//               ></button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;













import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import AOS from "aos";

const projects = [
  { id: 1, title: "Clubbera", description: "Ready to break free from the virtual world and make some real-life connections? Clubbera is here to help you do just that! This platform is all about bringing people together through shared interests and unforgettable experiences.", image: "/clubbera.jpg", link: "https://clubbera.com/", tech: ["React", "Node.js", "MongoDB"] },
  { id: 2, title: "Lagos Diocese Youth", description: "This is a website designed for the Anglican Communion Diocese of Lagos youth. It is a work in progress and it has 2025 camp registration link that is still in progress.", image: "/anglican.jpg", link: "https://www.dioceseoflagosyouths.com/", tech: ["React", "Tailwind CSS"] },
  { id: 3, title: "Furniro", description: "Funiro is more than just an online store for furnitures. They are passionate about bringing you handcrafted furniture and decor that are both functional and beautiful", image: "/furniro.jpg", link: "https://furniro-iota-eight.vercel.app/", tech: ["React", "E-commerce"] },
  { id: 4, title: "Scupay", description: "A payment management solution for schools. Scupay is a payment solution designed to streamline payment management for educational institutions", image: "/scupay.jpg", link: "https://scupay-new.vercel.app/", tech: ["React", "Payment API"] },
  { id: 5, title: "Portfolio", description: "This is a simple yet modern and beautiful portfolio built for a cinematographer and photographer", image: "/esther.jpg", link: "https://estheramahero.netlify.app/", tech: ["React", "Framer Motion"] },
  { id: 6, title: "Geodex", description: "Geodex is a web application that connects brands to outdoor advertising through innovative tech, data scientists, marketers, and media experts.", image: "/geodex.jpg", link: "https://geodex.tech/", tech: ["React", "Maps API"] },
  { id: 7, title: "Shopify Replica", description: "This is a simple yet modern and beautiful replica of the Shopify app. (e-commerce)", image: "/shopify.jpg", link: "https://shofy-beauty-and-cosmetics-ecommerce-client-eight.vercel.app/", tech: ["React", "E-commerce"] },
  { id: 8, title: "Tugro Cargo Group", description: "This is a representative logistics operator providing full range of service in the sphere of customs clearance and transport worldwide for any type of cargo.", image: "/cargo.jpg", link: "https://tugrocargo.online/", tech: ["React", "Logistics"] },
  { id: 9, title: "Pinnacle Homes & Autos", description: "This is more than just an online marketplace. They bring you a premium selection of high-quality vehicles and beautiful homes that reflect both style and reliability", image: "/pinnacle.jpg", link: "https://pinnacle-red.vercel.app/", tech: ["React", "Marketplace"] },
];

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [swiperRef, setSwiperRef] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    AOS.refresh();
  }, []);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // Preload images
  useEffect(() => {
    const imagePromises = projects.map((project) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = project.image;
        img.onload = () => {
          setImagesLoaded(prev => prev + 1);
          resolve();
        };
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        setTimeout(() => setLoading(false), 500);
      })
      .catch(() => {
        setTimeout(() => setLoading(false), 1000);
      });
  }, []);

  const totalSlides = Math.ceil(projects.length / slidesPerView);
  const loadingPercentage = Math.round((imagesLoaded / projects.length) * 100);

  // Loading State
  if (loading) {
    return (
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-black overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

        {/* Loader Content */}
        <div className="relative z-10 flex flex-col items-center gap-8">
          {/* Animated Icon */}
          <div className="relative">
            <div className="w-24 h-24 border-4 border-transparent border-t-purple-500 border-r-blue-500 rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Loading Text */}
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-xl text-white font-semibold">Loading Portfolio</h3>
            <p className="text-gray-400 text-sm">Preparing projects showcase...</p>
          </div>

          {/* Progress Bar */}
          <div className="w-64 bg-gray-800 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 rounded-full"
              style={{ width: `${loadingPercentage}%` }}
            ></div>
          </div>
          <span className="text-purple-400 text-sm font-medium">{loadingPercentage}%</span>

          {/* Loading Dots */}
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce animation-delay-400"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className='relative z-10 w-full max-w-7xl mx-auto'>
        {/* Header */}
        <div className='flex flex-col items-center text-center mb-16'>
          <span 
            className='text-purple-400 text-sm font-semibold tracking-wider uppercase mb-4'
            data-aos="fade-down"
          >
            My work
          </span>
          <h2 
            className='text-4xl md:text-6xl text-white font-bold mb-4'
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600'>Portfolio</span>
          </h2>
          <p 
            className='text-gray-400 text-lg max-w-2xl'
            data-aos="fade-up"
            data-aos-delay="200"
          >
            See some of my projects and works
          </p>
        </div>

        {/* Projects Carousel */}
        <div className="w-full" data-aos="zoom-in" data-aos-delay="300">
          <Swiper
            spaceBetween={30}
            slidesPerView={slidesPerView}
            centeredSlides={slidesPerView > 1}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onSwiper={setSwiperRef}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="w-full pb-12"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="group relative overflow-hidden rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-105">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    
                    {/* Tech tags */}
                    <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                      {project.tech.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-purple-600/80 backdrop-blur-sm text-white text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6 bg-gradient-to-br from-gray-900 to-gray-800">
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* View Project Button */}
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-blue-400 transition-colors duration-300 font-medium"
                    >
                      View Project
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => swiperRef && swiperRef.slideTo(index * slidesPerView)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  Math.floor(activeIndex / slidesPerView) === index 
                    ? "w-8 bg-gradient-to-r from-purple-500 to-blue-500" 
                    : "w-2 bg-gray-600 hover:bg-gray-500"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;