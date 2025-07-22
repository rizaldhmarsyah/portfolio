import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { CONTACT } from "../constants/index";
import { motion } from "framer-motion";
import { LuFileUser } from "react-icons/lu";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <a href="https://wa.me/6288292233779" target="_blank">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="my-4"
          >
            {CONTACT.phoneNo}
          </motion.p>
        </a>
        <p id="email">{CONTACT.email}</p>
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
          href="/resume.pdf"
          download
        >
          <LuFileUser />
        </a>
      </div>
    </div>
  );
};

export default Contact;
