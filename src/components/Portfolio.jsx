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
  { id: 1, title: "Project One", description: "This is a brief description of project one.", image: "/first.jpeg", link: "/project-one" },
  { id: 2, title: "Project Two", description: "This is a brief description of project two.", image: "/second.jpeg", link: "/project-two" },
  { id: 3, title: "Project Three", description: "This is a brief description of project three.", image: "/third.jpeg", link: "/project-three" },
  { id: 4, title: "Project Four", description: "This is a brief description of project four.", image: "/first.jpeg", link: "/project-four" },
  { id: 5, title: "Project Five", description: "This is a brief description of project five.", image: "/second.jpeg", link: "/project-five" },
  { id: 6, title: "Project Six", description: "This is a brief description of project six.", image: "/third.jpeg", link: "/project-six" },
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
                <a href={project.link} className="block p-4 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-xl" />
                  <h3 className="mt-4 text-lg font-bold text-[#4ee0fd]">{project.title}</h3>
                  <p className="text-sm text-white">{project.description}</p>
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