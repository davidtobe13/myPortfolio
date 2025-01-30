// import React, { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi"; // Burger and Close icons
// import "./Header.css";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("Home");

//   const sections = ["Home", "About", "Portfolio", "Contact"];

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
//             className={`text-white hover:text-[#4ee0fd] text-glow transition-all duration-300 p-2 leading-tight ${
//               activeSection === item ? "text-[#4ee0fd] font-bold" : ""
//             }`}
//             onClick={() => handleScrollTo(item)}
//           >
//             {item}
//           </button>
//         ))}
//         <button className="ml-12 text-[#4ee0fd] button-glow border border-[#4ee0fd] px-5 py-2 transition-all duration-300">
//           Hire Me
//         </button>
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
//               className="text-white text-lg hover:text-[#4ee0fd] text-glow transition-all duration-300"
//               onClick={() => handleScrollTo(item)}
//             >
//               {item}
//             </button>
//           ))}
//           <button className="text-[#4ee0fd] border border-[#4ee0fd] button-glow px-5 py-2 transition-all duration-300">
//             Hire Me
//           </button>
//         </div>
//       </div>

//       {/* Overlay (clicking outside closes menu) */}
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
// import { FiMenu, FiX } from "react-icons/fi"; // Burger and Close icons
// import "./Header.css";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("Home");

//   const sections = ["Home", "About", "Portfolio", "Contact"];

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
//     setActiveSection(id); // Set active manually on click
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
//   key={index}
//   className={`hover:text-[#4ee0fd] transition-all duration-300 p-2 leading-tight ${
//     activeSection === item ? "text-[#4ee0fd] font-bold" : ""
//   }`}
//   style={activeSection === item ? { textShadow: "0 0 20px rgb(0, 225, 255)" } : {}}
//   onClick={() => handleScrollTo(item)}
// >
//   {item}
// </button>

//         ))}
//         <button className="ml-12 text-[#4ee0fd] button-glow border border-[#4ee0fd] px-5 py-2 transition-all duration-300">
//           Hire Me
//         </button>
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
//   key={index}
//   className={`hover:text-[#4ee0fd] transition-all duration-300 p-2 leading-tight ${
//     activeSection === item ? "text-[#4ee0fd] font-bold" : ""
//   }`}
//   style={activeSection === item ? { textShadow: "0 0 20px rgb(0, 225, 255)" } : {}}
//   onClick={() => handleScrollTo(item)}
// >
//   {item}
// </button>


//           ))}
//           <button className="text-[#4ee0fd] border border-[#4ee0fd] button-glow px-5 py-2 transition-all duration-300">
//             Hire Me
//           </button>
//         </div>
//       </div>

//       {/* Overlay (clicking outside closes menu) */}
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




import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const sections = ["Home", "About", "Skills", "Portfolio"];
  
  // Replace with your phone number (include country code without '+')
  const phoneNumber = "2347081101605"; // Example: Nigeria number
  const message = "Hello David, I'm interested in hiring you for a project!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

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
    <div className="fixed top-0 left-0 w-full h-[70px] flex items-center justify-between px-6 md:px-12 bg-[#000000] z-50 shadow-md">
      {/* Logo */}
      <h1 className="text-[#4ee0fd] text-2xl font-bold">My Portfolio</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        {sections.map((item, index) => (
          <button
            key={index}
            className={`hover:text-[#4ee0fd] transition-all duration-300 p-2 leading-tight ${
              activeSection === item ? "text-[#4ee0fd] font-bold" : ""
            }`}
            style={activeSection === item ? { textShadow: "0 0 20px rgb(0, 225, 255)" } : {}}
            onClick={() => handleScrollTo(item)}
          >
            {item}
          </button>
        ))}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-12 text-[#4ee0fd] button-glow border border-[#4ee0fd] px-5 py-2 transition-all duration-300"
        >
          Hire Me
        </a>
      </div>

      {/* Burger Menu Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(true)} className="text-white text-2xl">
          <FiMenu />
        </button>
      </div>

      {/* Mobile Menu (Sliding Sidebar) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#111211] shadow-lg transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          <FiX />
        </button>

        {/* Menu Items */}
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {sections.map((item, index) => (
            <button
              key={index}
              className={`hover:text-[#4ee0fd] transition-all duration-300 p-2 leading-tight ${
                activeSection === item ? "text-[#4ee0fd] font-bold" : ""
              }`}
              style={activeSection === item ? { textShadow: "0 0 20px rgb(0, 225, 255)" } : {}}
              onClick={() => handleScrollTo(item)}
            >
              {item}
            </button>
          ))}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4ee0fd] border border-[#4ee0fd] button-glow px-5 py-2 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Header;


