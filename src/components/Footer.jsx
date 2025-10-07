// import React from "react";
// import { FaWhatsapp, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-6 px-4 md:px-12 flex flex-col items-center gap-6">
//       {/* Footer Text */}
//       <div className="text-center flex flex-col items-center">
//         <h2 className="text-xl font-bold text-[#4ee0fd]">Let's Connect</h2>
//         <p className="text-gray-400">Feel free to reach out via any of the platforms below.</p>
//       </div>

//       {/* Social & Contact Icons */}
//       <div className="flex gap-6 text-2xl">
//         <a href="https://wa.me/2347081101605" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition">
//           <FaWhatsapp />
//         </a>
//         <a href="tel:+2347075273063" className="hover:text-[#4ee0fd] transition">
//           <FaPhone />
//         </a>
//         <a href="mailto:davidtobe1999@gmail.com" className="hover:text-[#4ee0fd] transition">
//           <FaEnvelope />
//         </a>
//         <a href="https://linkedin.com/in/david-ugwuegbulam-6a8722253/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077b5] transition">
//           <FaLinkedin />
//         </a>
//         <a href="https://github.com/davidtobe13" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
//           <FaGithub />
//         </a>
//         <a href="https://www.google.com/maps/place/Lagos/@6.5341,3.5370304,9z/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
//           <FaMapMarkerAlt />
//         </a>
//       </div>

//       {/* Copyright */}
//       <div className="text-gray-400 text-sm text-center border-t border-gray-700 w-full pt-4">
//         &copy; {new Date().getFullYear()} David Ugwuegbulam. All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import { FaWhatsapp, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', id: 'Home' },
    { name: 'About', id: 'About' },
    { name: 'Skills', id: 'Skills' },
    { name: 'Portfolio', id: 'Portfolio' },
  ];

  return (
    <footer className="relative bg-black text-white pt-16 pb-8 px-6 md:px-12 border-t border-purple-500/20">
      {/* Background gradient effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 mb-4">
              David.dev
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Full-stack developer passionate about creating innovative digital solutions. Let's build something amazing together.
            </p>
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-purple-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
              Back to Top
            </button>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <a href="mailto:davidtobe1999@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-300 group">
                <FaEnvelope className="text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                <span>davidtobe1999@gmail.com</span>
              </a>
              <a href="tel:+2347075273063" className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-300 group">
                <FaPhone className="text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                <span>+234 707 527 3063</span>
              </a>
              <a href="https://www.google.com/maps/place/Lagos/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-300 group">
                <FaMapMarkerAlt className="text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                <span>Lagos, Nigeria</span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="border-t border-purple-500/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-white font-semibold mb-4 md:mb-0">Connect With Me</h4>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/2347081101605" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-110"
              >
                <FaWhatsapp className="text-xl text-gray-400 group-hover:text-white transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </a>

              <a 
                href="tel:+2347075273063" 
                className="group relative w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-110"
              >
                <FaPhone className="text-xl text-gray-400 group-hover:text-white transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </a>

              <a 
                href="mailto:davidtobe1999@gmail.com" 
                className="group relative w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-110"
              >
                <FaEnvelope className="text-xl text-gray-400 group-hover:text-white transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </a>

              <a 
                href="https://linkedin.com/in/david-ugwuegbulam-6a8722253/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="text-xl text-gray-400 group-hover:text-white transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </a>

              <a 
                href="https://github.com/davidtobe13" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="text-xl text-gray-400 group-hover:text-white transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-purple-500/20 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} David Ugwuegbulam. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Built with React & Tailwind CSS • Designed by David
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;