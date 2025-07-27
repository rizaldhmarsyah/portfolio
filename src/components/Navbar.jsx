import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GrResume } from "react-icons/gr";
import { RxResume } from "react-icons/rx";
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
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/rizaldhmarsyah"
          target="_blank"
          aria-label="GitHub"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://wa.me/6288292233779"
          target="_blank"
          aria-label="Whatsapp"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
        <a
          target="_blank"
          aria-label="Mail"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1qy7euN5Yrxuifjm0BGURuYBuCnxRDx5s/view?usp=sharing"
          download
        >
          <LuFileUser />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
