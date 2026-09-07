"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1>
            FIRAOL BIRHANU<span>.</span>
          </h1>

          <h2>
            Computer Science Gradute , Software Developer &amp; Aspiring IT Professional
          </h2>

          <p className="hero-description">
            I build practical software solutions and explore
            technology across web development, systems,
            cybersecurity, and product design.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              View My Projects
              <ArrowDown size={18} />
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/Firaolbirhanu"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={21} />
            </a>

            <a
              href="https://www.linkedin.com/in/firaol-birhanu-8798b1415"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={21} />
            </a>

          </div>

        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >

         <div className="profile-placeholder">
  <Image
    src="/image/profile.jpg"
    alt="FIRAOL BIRHANU - Computer Science Graduate"
    width={330}
    height={330}
    priority
    className="profile-image"
  />
</div>

        </motion.div>

      </div>

    </section>
  );
}