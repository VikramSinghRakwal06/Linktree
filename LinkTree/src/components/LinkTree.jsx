import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaFileAlt, FaGlobe } from "react-icons/fa";
import zoro from "../assets/zoro.svg";
import konoha from "../assets/konoha.png";
import avatar from "../assets/pokemon.jpg";
import goku from "../assets/goku.jpg";

const links = [
  {
    name: "Portfolio",
    url: "https://vikram-s-portfolio-wheat.vercel.app/", // ← replace with your deployed portfolio URL
    icon: <FaGlobe />,
    color: "from-yellow-400 to-orange-500",
    highlight: true,
  },
  { name: "GitHub", url: "https://github.com/VikramSinghRakwal06", icon: <FaGithub />, color: "from-blue-500 to-purple-500" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/vikram-singh-9384b5250/", icon: <FaLinkedin />, color: "from-blue-700 to-indigo-500" },
  { name: "Instagram", url: "https://www.instagram.com/vikram_singh014/", icon: <FaInstagram />, color: "from-cyan-500 to-blue-400" },
  { name: "Email", url: "mailto:vikramrakwal9682@gmail.com", icon: <FaEnvelope />, color: "from-green-500 to-teal-400" },
  { name: "Resume", url: "/VikramCV.pdf", icon: <FaFileAlt />, color: "from-red-600 to-orange-500" },
];

const Linktree = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white p-6 relative overflow-hidden">
      {/* Background Effects */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 blur-sm"
        style={{ backgroundImage: `url(${goku})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Anime Themed Floating Elements */}
      <img
        src={zoro}
        alt=""
        aria-hidden="true"
        className="absolute top-10 left-10 w-40 opacity-40 animate-bounce animate-spin-slow filter invert pointer-events-none"
      />
      <img
        src={konoha}
        alt=""
        aria-hidden="true"
        className="absolute bottom-10 right-10 w-40 opacity-40 animate-bounce animate-spin-slow filter invert pointer-events-none"
      />

      {/* Profile Section */}
      <motion.img
        src={avatar}
        alt="Vikram Singh"
        className="relative z-10 w-32 h-32 rounded-full border-4 border-yellow-400 shadow-[0px_0px_20px_5px_rgba(255,215,0,0.6)] mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <h1 className="relative z-10 text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-red-500 to-orange-400 text-transparent bg-clip-text mb-2 tracking-wider text-center">
        Vikram Singh
      </h1>
      <p className="relative z-10 text-gray-300 mb-6 italic text-lg text-center">
        "Train Hard. Code Harder. Conquer the Grand Line!"
      </p>

      {/* Link Buttons with Neon Glow */}
      <div className="relative z-10 w-full max-w-md space-y-6">
        {links.map((link) => (
          <motion.a
            key={link.name}
            href={link.url}
            target={link.url.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-3 w-full px-6 py-4 font-semibold text-xl rounded-xl shadow-xl bg-gradient-to-r ${link.color} text-white transition hover:shadow-[0px_0px_15px_4px_rgba(255,165,0,0.6)] focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-300 ${
              link.highlight ? "animate-pulse ring-2 ring-yellow-300" : ""
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.icon} {link.name}
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <p className="relative z-10 mt-6 text-yellow-300 text-sm tracking-widest font-mono text-center">
        © {new Date().getFullYear()} Vikram Singh | Powered by the Dragon Balls ⭐⭐⭐⭐⭐
      </p>
    </div>
  );
};

export default Linktree;