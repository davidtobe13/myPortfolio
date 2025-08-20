// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// const projects = [
//   { id: 1, title: "Project One", description: "This is a brief description of project one.", image: "/first.jpeg", link: "/project-one" },
//   { id: 2, title: "Project Two", description: "This is a brief description of project two.", image: "/second.jpeg", link: "/project-two" },
//   { id: 3, title: "Project Three", description: "This is a brief description of project three.", image: "/third.jpeg", link: "/project-three" },
//   { id: 4, title: "Project Four", description: "This is a brief description of project four.", image: "/first.jpeg", link: "/project-four" },
//   { id: 5, title: "Project Five", description: "This is a brief description of project five.", image: "/second.jpeg", link: "/project-five" },
//   { id: 6, title: "Project Six", description: "This is a brief description of project six.", image: "/third.jpeg", link: "/project-six" },
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
//                 <a href={project.link} className="block p-4 rounded-2xl shadow-lg hover:scale-105 transition-transform">
//                   <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-xl" />
//                   <h3 className="mt-4 text-lg font-bold text-[#4ee0fd]">{project.title}</h3>
//                   <p className="text-sm text-white">{project.description}</p>
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
//                   activeIndex === index * slidesPerView ? "w-8 bg-[#87f1ff]" : "w-3 bg-[#c6e3e7]"
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
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// const projects = [
//   { id: 1, title: "Project One", description: "This is a brief description of project one.", image: "/first.jpeg", link: "/project-one" },
//   { id: 2, title: "Project Two", description: "This is a brief description of project two.", image: "/second.jpeg", link: "/project-two" },
//   { id: 3, title: "Project Three", description: "This is a brief description of project three.", image: "/third.jpeg", link: "/project-three" },
//   { id: 4, title: "Project Four", description: "This is a brief description of project four.", image: "/first.jpeg", link: "/project-four" },
//   { id: 5, title: "Project Five", description: "This is a brief description of project five.", image: "/second.jpeg", link: "/project-five" },
//   { id: 6, title: "Project Six", description: "This is a brief description of project six.", image: "/third.jpeg", link: "/project-six" },
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
//             onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//             onSwiper={setSwiperRef}
//             modules={[Autoplay]}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             loop={true}
//             className="w-full max-w-4xl"
//           >
//             {projects.map((project) => (
//               <SwiperSlide key={project.id}>
//                 <a href={project.link} className="block p-4 rounded-2xl shadow-lg hover:scale-105 transition-transform">
//                   <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-xl" />
//                   <h3 className="mt-4 text-lg font-bold text-[#4ee0fd]">{project.title}</h3>
//                   <p className="text-sm text-white">{project.description}</p>
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
//                   activeIndex === index ? "w-8 bg-[#87f1ff]" : "w-3 bg-[#c6e3e7]"
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



import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const projects = [
  { id: 1, title: "Clubbera", description: "Ready to break free from the virtual world and make some real-life connections? Clubbera is here to help you do just that! This platform is all about bringing people together through shared interests and unforgettable experiences.", image: "/clubbera.jpg", link: "https://clubbera.com/" },
  { id: 2, title: "Lagos Diocese Youth", description: "This is a website desined for the Anglican Communion Diocese of Lagos youth. It is a work in progress and it has 2025 camp registration link that is still in progress.", image: "/anglican.jpg", link: "https://www.dioceseoflagosyouths.com/" },
  { id: 3, title: "Furniro", description: "Funiro is more than just an online store for furnitures. They are passionate about bringing you handcrafted furniture and decor that are both functional and beautiful", image: "/furniro.jpg", link: "https://furniro-iota-eight.vercel.app/" },
  { id: 4, title: "Scupay", description: "A payment management solution for schools. Scupay is a payment solution designed to streamline payment management for educational institutions", image: "/scupay.jpg", link: "https://scupay-new.vercel.app/" },
  { id: 5, title: "Portfolio", description: "This is a simple yet modern and beautiful portfolio built for a cinematographer and photograther", image: "/esther.jpg", link: "https://estheramahero.netlify.app/" },
  { id: 6, title: "Geodex", description: "Geodex is a web application that connects brands to outdoor advertising through innovative tech, data scientists, marketers, and media experts.", image: "/geodex.jpg", link: "https://geodex.tech/" },
  { id: 7, title: "Shopify Replica", description: "This is a simple yet modern and beautiful replica of the Shopify app. (e-commerce)", image: "/shopify.jpg", link: "https://shofy-beauty-and-cosmetics-ecommerce-client-eight.vercel.app/" },
  { id: 8, title: "Tugro Cargo Group", description: "This is a representative logistics operator providing full range of service in the sphere of customs clearance and transport worldwide for any type of cargo.", image: "/cargo.jpg", link: "https://tugrocargo.online/" },
  { id: 9, title: "Pinnacle Homes & Autos", description: "This is more than just an online marketplace. They bring you a premium selection of high-quality vehicles and beautiful homes that reflect both style and reliability", image: "/pinnacle.jpg", link: "https://pinnacle-red.vercel.app/" },
];

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [swiperRef, setSwiperRef] = useState(null);

  // Handle responsive slidesPerView
  useEffect(() => {
    const updateSlides = () => {
      setSlidesPerView(window.innerWidth >= 768 ? 3 : 1);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // Handle auto-scrolling
  useEffect(() => {
    if (!swiperRef) return;

    const interval = setInterval(() => {
      const lastIndex = projects.length - slidesPerView;
      if (swiperRef.activeIndex >= lastIndex) {
        swiperRef.slideTo(0);
      } else {
        swiperRef.slideNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [swiperRef, slidesPerView]);

  // Calculate the number of circles (pagination)
  const totalSlides = Math.ceil(projects.length / slidesPerView);

  return (
    <div className="w-full flex flex-col items-center justify-center py-0 md:py-14 gap-4 pb-[90px]">
      <div className="w-[90%] md:w-[90%] flex flex-col items-start md:items-center justify-center gap-4">
        <div className="w-[100%] md:w-[35%] flex flex-col items-start md:items-center justify-center gap-2">
          <h1 className="text-2xl text-[#4ee0fd]">Portfolio</h1>
          <p className="text-4xl text-white md:text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            See some of my projects and works
          </p>
        </div>
      </div>

      <div className="w-[90%] md:w-[100%] flex items-start justify-center gap-4">
        <div className="flex flex-col items-center justify-center w-full p-6 bg-[#111211]">
          <Swiper
            spaceBetween={20}
            slidesPerView={slidesPerView}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onSwiper={setSwiperRef}
            className="w-full max-w-4xl"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block p-4 rounded-2xl hover:scale-105 transition-transform">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-xl" />
                  <h3 className="mt-4 text-lg font-bold text-[#4ee0fd]">{project.title}</h3>
                  <p className="text-[12px] text-white">{project.description}</p>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="flex mt-4 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div
                key={index}
                onClick={() => swiperRef && swiperRef.slideTo(index * slidesPerView)}
                className={`cursor-pointer h-3 rounded-full transition-all ${
                  Math.floor(activeIndex / slidesPerView) === index ? "w-8 bg-[#87f1ff]" : "w-3 bg-[#c6e3e7]"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;