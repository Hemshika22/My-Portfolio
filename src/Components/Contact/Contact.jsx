import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-[7vw] md:px-[10vw] lg:px-[20vw] text-[var(--text-main)]"
      style={{ backgroundColor: 'var(--app-bg)' }}
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold"
        >
          CONTACT ME
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-24 mx-auto h-1 mt-2"
          style={{ backgroundColor: 'var(--accent)' }}
        ></motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-[var(--text-muted)] text-lg font-semibold"
        >
          Let’s build something amazing together! Feel free to reach out 👇
        </motion.p>
      </div>

      {/* Contact Form */}
      {/* <motion.form
          action="https://formspree.io/f/manbrgly"
  method="POST"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="bg-gray-800/50 backdrop-blur-md shadow-[0_0_20px_rgba(130,69,236,0.3)] p-8 rounded-2xl max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "var(--accent)" }}
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg text-[var(--text-main)] focus:outline-none focus:ring-2 transition-all"
            style={{ backgroundColor: 'var(--surface-alt)', borderColor: 'var(--border-color)', borderWidth: '1px' }}
          />
          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "var(--accent)" }}
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg text-[var(--text-main)] focus:outline-none focus:ring-2 transition-all"
            style={{ backgroundColor: 'var(--surface-alt)', borderColor: 'var(--border-color)', borderWidth: '1px' }}
          />
        </div>
        <motion.input
          whileFocus={{ scale: 1.02, borderColor: "var(--accent)" }}
          type="text"
          placeholder="Subject"
          className="w-full mt-6 px-4 py-3 rounded-lg text-[var(--text-main)] focus:outline-none focus:ring-2 transition-all"
          style={{ backgroundColor: 'var(--surface-alt)', borderColor: 'var(--border-color)', borderWidth: '1px' }}
        />
        <motion.textarea
          whileFocus={{ scale: 1.02, borderColor: "var(--accent)" }}
          placeholder="Your Message"
          rows="5"
          className="w-full mt-6 px-4 py-3 rounded-lg text-[var(--text-main)] focus:outline-none focus:ring-2 transition-all"
          style={{ backgroundColor: 'var(--surface-alt)', borderColor: 'var(--border-color)', borderWidth: '1px' }}
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="mt-6 w-full py-3 rounded-full font-bold text-[var(--accent-contrast)] transition duration-300 ease-in-out shadow-lg"
          style={{
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            boxShadow: "0px 4px 10px var(--hero-glow)",
          }}
        >
          Send Message 🚀
        </motion.button>
      </motion.form> */}

      <motion.form
        action="https://formspree.io/f/manbrgly" // 
        method="POST"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="backdrop-blur-md shadow-[0_0_20px_var(--hero-glow)] p-8 rounded-2xl max-w-3xl mx-auto"
        style={{ backgroundColor: 'var(--panel-bg)' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "var(--accent)" }}
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg border text-[var(--text-main)] focus:outline-none focus:ring-2 transition-all"
            style={{ backgroundColor: 'var(--surface-alt)', borderColor: 'var(--border-color)' }}
          />
          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "var(--accent)" }}
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg border text-[var(--text-main)] focus:outline-none focus:ring-2 transition-all"
            style={{ backgroundColor: 'var(--surface-alt)', borderColor: 'var(--border-color)' }}
          />
        </div>
        <motion.input
          whileFocus={{ scale: 1.02, borderColor: "var(--accent)" }}
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full mt-6 px-4 py-3 rounded-lg border text-[var(--text-main)] focus:outline-none focus:ring-2 transition-all"
          style={{ backgroundColor: 'var(--surface-alt)', borderColor: 'var(--border-color)' }}
        />
        <motion.textarea
          whileFocus={{ scale: 1.02, borderColor: "var(--accent)" }}
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="w-full mt-6 px-4 py-3 rounded-lg border text-[var(--text-main)] focus:outline-none focus:ring-2 transition-all"
          style={{ backgroundColor: 'var(--surface-alt)', borderColor: 'var(--border-color)' }}
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="mt-6 w-full py-3 rounded-full font-bold text-[var(--accent-contrast)] transition duration-300 ease-in-out shadow-lg"
          style={{
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            boxShadow: "0px 4px 10px var(--hero-glow)",
          }}
        >
          Send Message 🚀
        </motion.button>
      </motion.form>


      {/* Extra contact info */}
      <div className="text-center mt-10 text-[var(--text-muted)]">
        <p>Email: <span className="text-[var(--text-main)]">hemshikagautamc@gmail.com</span></p>
        <p>Based in: <span className="text-[var(--text-main)]">India</span></p>
      </div>
    </section>
  );
};

export default Contact;
