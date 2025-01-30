// import React from "react";
// import { FaWhatsapp, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-6 px-4 md:px-12 flex flex-col  justify-between items-center gap-6">
//       {/* Footer Text */}
//       <div className="text-center md:text-left mb-4 md:mb-0 flex items-center justify-center flex-col">
//         <h2 className="text-xl font-bold text-[#4ee0fd]">Let's Connect</h2>
//         <p className="text-gray-400">Feel free to reach out via any of the platforms below.</p>
//       </div>

//       {/* Social & Contact Icons */}
//       <div className="flex gap-6 text-2xl">
//         {/* WhatsApp */}
//         <a href="https://wa.me/2347081101605" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition">
//           <FaWhatsapp />
//         </a>

//         {/* Call */}
//         <a href="tel:2347075273063" className="hover:text-[#4ee0fd] transition">
//           <FaPhone />
//         </a>

//         {/* Email */}
//         <a href="mailto:davidtobe1999@gmail.com" className="hover:text-[#4ee0fd] transition">
//           <FaEnvelope />
//         </a>

//         {/* LinkedIn */}
//         <a href="https://linkedin.com/in/david-ugwuegbulam-6a8722253/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077b5] transition">
//           <FaLinkedin />
//         </a>

//         {/* GitHub */}
//         <a href="https://github.com/davidtobe13" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
//           <FaGithub />
//         </a>

//         {/* Location (Google Maps) */}
//         <a
//           href="https://www.google.com/maps?q=YOUR_LATITUDE,YOUR_LONGITUDE"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-red-500 transition"
//         >
//           <FaMapMarkerAlt />
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from "react";
import { FaWhatsapp, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 md:px-12 flex flex-col items-center gap-6">
      {/* Footer Text */}
      <div className="text-center flex flex-col items-center">
        <h2 className="text-xl font-bold text-[#4ee0fd]">Let's Connect</h2>
        <p className="text-gray-400">Feel free to reach out via any of the platforms below.</p>
      </div>

      {/* Social & Contact Icons */}
      <div className="flex gap-6 text-2xl">
        <a href="https://wa.me/2347081101605" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition">
          <FaWhatsapp />
        </a>
        <a href="tel:2347075273063" className="hover:text-[#4ee0fd] transition">
          <FaPhone />
        </a>
        <a href="mailto:davidtobe1999@gmail.com" className="hover:text-[#4ee0fd] transition">
          <FaEnvelope />
        </a>
        <a href="https://linkedin.com/in/david-ugwuegbulam-6a8722253/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077b5] transition">
          <FaLinkedin />
        </a>
        <a href="https://github.com/davidtobe13" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
          <FaGithub />
        </a>
        <a href="https://www.google.com/maps/place/Lagos/@6.5341,3.5370304,9z/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
          <FaMapMarkerAlt />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-gray-400 text-sm text-center border-t border-gray-700 w-full pt-4">
        &copy; {new Date().getFullYear()} David Ugwuegbulam. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
