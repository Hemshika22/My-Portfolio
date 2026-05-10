import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 px-[7vw] md:px-[10vw] lg:px-[15vw] text-[var(--text-muted)]" style={{ backgroundColor: 'var(--surface-bg)' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
        
        {/* Logo / Name */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-[var(--text-main)]">🚀 MyPortfolio</h2>
          <p className="text-[var(--text-muted)] mt-2 text-sm">
            Building impactful projects with creativity & code.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2"
        >
          <h3 className="text-lg font-semibold text-[var(--text-main)]">Quick Links</h3>
          <a href="#home" className="hover:text-[var(--accent)] transition">
            Home
          </a>
          <a href="#about" className="hover:text-[var(--accent)] transition">
            About
          </a>
          <a href="#projects" className="hover:text-[var(--accent)] transition">
            Projects
          </a>
          <a href="#education" className="hover:text-[var(--accent)] transition">
            Education
          </a>
          <a href="#contact" className="hover:text-[var(--accent)] transition">
            Contact
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end gap-5"
        >
          <a
            href="https://github.com/hemshika22"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-main)] transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/hemshika-gautam/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-main)] transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-main)] transition"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="mailto:hemshikagautamc@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-main)] transition"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-main)] transition"
          >
            <FaInstagram size={24} />
          </a>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="h-[1px] my-8"
        style={{ backgroundColor: 'var(--border-color)' }}
      ></motion.div>

      {/* Bottom Note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-[var(--text-muted)] text-sm"
      >
        © {new Date().getFullYear()} Hemshika's Portfolio. All Rights Reserved.
        <h3 className="mt-2">Made with ❤️ by Hemshika</h3>
      </motion.p>
    </footer>
  );
};

export default Footer;
