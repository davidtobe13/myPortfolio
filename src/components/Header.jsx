// import React, { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import "./Header.css";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("Home");

//   const sections = ["Home", "About", "Skills", "Portfolio"];
  
//   // Replace with your phone number (include country code without '+')
//   const phoneNumber = "2347081101605"; // Example: Nigeria number
//   const message = "Hello David, I'm interested in hiring you for a project!";
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.6 }
//     );

//     sections.forEach((section) => {
//       const element = document.getElementById(section);
//       if (element) observer.observe(element);
//     });

//     return () => {
//       sections.forEach((section) => {
//         const element = document.getElementById(section);
//         if (element) observer.unobserve(element);
//       });
//     };
//   }, []);

//   const handleScrollTo = (id) => {
//     setActiveSection(id);
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     setIsOpen(false);
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full h-[70px] flex items-center justify-between px-6 md:px-12 bg-[#000000] z-50 shadow-md">
//       {/* Logo */}
//       <h1 className="text-[#4ee0fd] text-2xl font-bold">My Portfolio</h1>

//       {/* Desktop Menu */}
//       <div className="hidden md:flex gap-8">
//         {sections.map((item, index) => (
//           <button
//             key={index}
//             className={`hover:text-[#4ee0fd] transition-all duration-300 p-2 leading-tight ${
//               activeSection === item ? "text-[#4ee0fd] font-bold" : ""
//             }`}
//             style={activeSection === item ? { textShadow: "0 0 20px rgb(0, 225, 255)" } : {}}
//             onClick={() => handleScrollTo(item)}
//           >
//             {item}
//           </button>
//         ))}
//         <a 
//           href={whatsappUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="ml-12 text-[#4ee0fd] button-glow border border-[#4ee0fd] px-5 py-2 transition-all duration-300"
//         >
//           Hire Me
//         </a>
//       </div>

//       {/* Burger Menu Icon for Mobile */}
//       <div className="md:hidden flex items-center">
//         <button onClick={() => setIsOpen(true)} className="text-white text-2xl">
//           <FiMenu />
//         </button>
//       </div>

//       {/* Mobile Menu (Sliding Sidebar) */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-[#111211] shadow-lg transition-transform duration-300 z-50 ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Close Button */}
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute top-4 right-4 text-white text-2xl"
//         >
//           <FiX />
//         </button>

//         {/* Menu Items */}
//         <div className="flex flex-col items-center justify-center h-full gap-6">
//           {sections.map((item, index) => (
//             <button
//               key={index}
//               className={`hover:text-[#4ee0fd] transition-all duration-300 p-2 leading-tight ${
//                 activeSection === item ? "text-[#4ee0fd] font-bold" : ""
//               }`}
//               style={activeSection === item ? { textShadow: "0 0 20px rgb(0, 225, 255)" } : {}}
//               onClick={() => handleScrollTo(item)}
//             >
//               {item}
//             </button>
//           ))}
//           <a 
//             href={whatsappUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-[#4ee0fd] border border-[#4ee0fd] button-glow px-5 py-2 transition-all duration-300"
//           >
//             Hire Me
//           </a>
//         </div>
//       </div>

//       {/* Overlay */}
//       {isOpen && (
//         <div
//           className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
//           onClick={() => setIsOpen(false)}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default Header;





// import React, { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import "./Header.css";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("Home");
//   const [scrolled, setScrolled] = useState(false);

//   const sections = ["Home", "About", "Skills", "Portfolio", "Testimonials"];
  
//   const phoneNumber = "2347081101605";
//   const message = "Hello David, I'm interested in hiring you for a project!";
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.6 }
//     );

//     sections.forEach((section) => {
//       const element = document.getElementById(section);
//       if (element) observer.observe(element);
//     });

//     return () => {
//       sections.forEach((section) => {
//         const element = document.getElementById(section);
//         if (element) observer.unobserve(element);
//       });
//     };
//   }, []);

//   const handleScrollTo = (id) => {
//     setActiveSection(id);
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     setIsOpen(false);
//   };

//   return (
//     <div 
//       className={`fixed top-0 left-0 w-full h-[70px] flex items-center justify-between px-6 md:px-12 z-50 transition-all duration-300 ${
//         scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-purple-500/10' : 'bg-transparent'
//       }`}
//     >
//       {/* Logo */}
//       <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-2xl font-bold">
//         David.dev
//       </h1>

//       {/* Desktop Menu */}
//       <div className="hidden md:flex gap-8 items-center">
//         {sections.map((item, index) => (
//           <button
//             key={index}
//             className={`relative hover:text-purple-400 transition-all duration-300 text-sm font-medium ${
//               activeSection === item ? "text-purple-400" : "text-gray-300"
//             }`}
//             onClick={() => handleScrollTo(item)}
//           >
//             {item}
//             {activeSection === item && (
//               <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-600"></span>
//             )}
//           </button>
//         ))}
//         <a 
//           href={whatsappUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="ml-4 relative group overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105"
//         >
//           <span className="relative z-10">Hire Me</span>
//           <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//         </a>
//       </div>

//       {/* Burger Menu Icon for Mobile */}
//       <div className="md:hidden flex items-center">
//         <button onClick={() => setIsOpen(true)} className="text-white text-2xl">
//           <FiMenu />
//         </button>
//       </div>

//       {/* Mobile Menu (Sliding Sidebar) */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-gray-900 to-black shadow-2xl transition-transform duration-300 z-50 ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Close Button */}
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute top-4 right-4 text-white text-2xl hover:text-purple-400 transition-colors"
//         >
//           <FiX />
//         </button>

//         {/* Menu Items */}
//         <div className="flex flex-col items-center justify-center h-full gap-6">
//           {sections.map((item, index) => (
//             <button
//               key={index}
//               className={`hover:text-purple-400 transition-all duration-300 text-lg ${
//                 activeSection === item ? "text-purple-400 font-bold" : "text-gray-300"
//               }`}
//               onClick={() => handleScrollTo(item)}
//             >
//               {item}
//             </button>
//           ))}
//           <a 
//             href={whatsappUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
//           >
//             Hire Me
//           </a>
//         </div>
//       </div>

//       {/* Overlay */}
//       {isOpen && (
//         <div
//           className="fixed top-0 left-0 w-full h-full bg-black/70 backdrop-blur-sm z-40"
//           onClick={() => setIsOpen(false)}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  const sections = ["Home", "About", "Skills", "Portfolio", "Testimonials"];
  
  const phoneNumber = "2347081101605";
  const message = "Hello David, I'm interested in hiring you for a project!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleScrollTo = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Header */}
      <div 
        className={`hidden md:flex fixed top-0 left-0 w-full h-[80px] items-center justify-between px-6 md:px-12 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-purple-500/10' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-2xl font-bold">
          David.dev
        </h1>

        {/* Desktop Menu */}
        <div className="flex gap-8 items-center">
          {sections.map((item, index) => (
            <button
              key={index}
              className={`relative hover:text-purple-400 transition-all duration-300 text-sm font-medium ${
                activeSection === item ? "text-purple-400" : "text-gray-300"
              }`}
              onClick={() => handleScrollTo(item)}
            >
              {item}
              {activeSection === item && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-600"></span>
              )}
            </button>
          ))}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 relative group overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105"
          >
            <span className="relative z-10">Hire Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>

      {/* Mobile Header Container */}
      <div className="md:hidden fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
        {/* Main Container with Dropdown */}
        <div 
          className={`relative bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl shadow-purple-500/20 border border-white/10 overflow-hidden transition-all duration-500 ${
            isOpen ? 'rounded-4xl' : 'rounded-full'
          }`}
        >
          {/* Top Bar with Logo and Burger */}
          <div className="flex items-center justify-between px-4 py-3">
            {/* Logo - Same as Desktop */}
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-xl font-bold">
              David.dev
            </h1>

            {/* Burger Menu Circle */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="w-10 h-10 rounded-full flex items-center justify-center  transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <span className="text-white text-lg transition-transform duration-300">
                {isOpen ? <FiX /> : <FiMenu />}
              </span>
            </button>
          </div>

          {/* Dropdown Content */}
          <div 
            className={`transition-all duration-500 ease-in-out ${
              isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {/* Separator Line */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-6"></div>

            {/* Menu Items */}
            <div className="px-6 py-6 space-y-2">
              {sections.map((item, index) => (
                <button
                  key={index}
                  className={`group relative w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeSection === item 
                      ? "bg-white/10 text-white" 
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                  style={{
                    animation: isOpen ? `slideDown 0.4s ease-out ${index * 0.08}s both` : 'none'
                  }}
                  onClick={() => handleScrollTo(item)}
                >
                  <span className="text-lg font-medium">{item}</span>
                  {activeSection === item && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-r-full"></div>
                  )}
                </button>
              ))}

              {/* Hire Me Button */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-4 w-full overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2"
                style={{
                  animation: isOpen ? 'slideDown 0.4s ease-out 0.4s both' : 'none'
                }}
              >
                <span className="relative z-10">Hire Me</span>
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Bottom Tagline */}
            <div 
              className="px-6 pb-6 text-center"
              style={{
                animation: isOpen ? 'fadeIn 0.6s ease-out 0.5s both' : 'none'
              }}
            >
              <p className="text-white/50 text-xs">
                Building exceptional digital experiences
              </p>
            </div>
          </div>

          {/* Animated background blobs (visible when open) */}
          {isOpen && (
            <>
              <div className="absolute top-20 left-4 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob pointer-events-none"></div>
              <div className="absolute bottom-20 right-4 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>
            </>
          )}
        </div>
      </div>

      {/* Backdrop overlay when menu is open */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Header;