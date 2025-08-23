import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-[7vw] md:px-[10vw] lg:px-[20vw] bg-[#0a192f] text-white"
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
          className="w-24 mx-auto h-1 bg-[#9929EA] mt-2"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-400 text-lg font-semibold"
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
            whileFocus={{ scale: 1.02, borderColor: "#9929EA" }}
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "#9929EA" }}
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
        </div>
        <motion.input
          whileFocus={{ scale: 1.02, borderColor: "#9929EA" }}
          type="text"
          placeholder="Subject"
          className="w-full mt-6 px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        />
        <motion.textarea
          whileFocus={{ scale: 1.02, borderColor: "#9929EA" }}
          placeholder="Your Message"
          rows="5"
          className="w-full mt-6 px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="mt-6 w-full py-3 rounded-full font-bold text-white transition duration-300 ease-in-out shadow-lg"
          style={{
            background: "linear-gradient(90deg, #9929EA, #4BC0C8)",
            boxShadow: "0px 4px 10px rgba(130,69,236,0.4)",
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
        className="bg-gray-800/50 backdrop-blur-md shadow-[0_0_20px_rgba(130,69,236,0.3)] p-8 rounded-2xl max-w-3xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "#9929EA" }}
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "#9929EA" }}
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
        </div>
        <motion.input
          whileFocus={{ scale: 1.02, borderColor: "#9929EA" }}
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full mt-6 px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        />
        <motion.textarea
          whileFocus={{ scale: 1.02, borderColor: "#9929EA" }}
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="w-full mt-6 px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="mt-6 w-full py-3 rounded-full font-bold text-white transition duration-300 ease-in-out shadow-lg"
          style={{
            background: "linear-gradient(90deg, #9929EA, #4BC0C8)",
            boxShadow: "0px 4px 10px rgba(130,69,236,0.4)",
          }}
        >
          Send Message 🚀
        </motion.button>
      </motion.form>


      {/* Extra contact info */}
      <div className="text-center mt-10 text-gray-400">
        <p>Email: <span className="text-white">hemshikagautamc@gmail.com</span></p>
        <p>Based in: <span className="text-white">India</span></p>
      </div>
    </section>
  );
};

export default Contact;
