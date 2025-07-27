import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";

import { LuFileUser } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex shrink-0 items-center">
        <a
          href="https://drive.google.com/file/d/1qy7euN5Yrxuifjm0BGURuYBuCnxRDx5s/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          download
          aria-label="Home"
        >
          <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/rizal-nur-dhmarsyah/"
          target="_blank"
          aria-label="Linkedin"
          rel="noopener noreferrer"
          className="hover:text-[#0A66C2] transition-all duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/rizaldhmarsyah"
          target="_blank"
          aria-label="GitHub"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition-all duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://wa.me/6288292233779"
          target="_blank"
          aria-label="Whatsapp"
          rel="noopener noreferrer"
          className="hover:text-[#25D366] transition-all duration-300"
        >
          <FaWhatsapp />
        </a>
        <a
          target="_blank"
          aria-label="Mail"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1qy7euN5Yrxuifjm0BGURuYBuCnxRDx5s/view?usp=sharing"
          download
          className="hover:text-white transition-all duration-300"
        >
          <LuFileUser />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
