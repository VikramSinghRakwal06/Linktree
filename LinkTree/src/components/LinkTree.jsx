import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import zoro from "../assets/zoro.svg";
import konoha from "../assets/konoha.png";
import avatar from '../assets/pokemon.jpg'
import goku from '../assets/goku.jpg'
const links = [
  { name: "GitHub", url: "https://github.com/VikramSinghRakwal06", icon: <FaGithub />, color: "from-blue-500 to-purple-500" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/vikram-singh-9384b5250/", icon: <FaLinkedin />, color: "from-blue-700 to-indigo-500" },
  { name: "Insgtagram", url: "https://www.instagram.com/vikram_singh014/", icon: <FaInstagram />, color: "from-cyan-500 to-blue-400" },
  { name: "Email", url: "mailto:vikramrakwal9682@gmail.com", icon: <FaEnvelope />, color: "from-green-500 to-teal-400" },
];

const Linktree = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white p-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cover bg-center opacity-50 blur-sm" style={{ backgroundImage: `url(${goku})` }}></div>
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Anime Themed Floating Elements */}
      <img src={zoro} alt="Anime Character" className="absolute top-10 left-10 w-40 opacity-40 animate-bounce animate-spin-slow filter invert" />
      <img src={konoha} alt="Anime Character" className="absolute bottom-10 right-10 w-40 opacity-40 animate-bounce animate-spin-slow filter invert" />

      {/* Profile Section */}
      <motion.img
        src={avatar}
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-yellow-400 shadow-[0px_0px_20px_5px_rgba(255,215,0,0.6)] mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-red-500 to-orange-400 text-transparent bg-clip-text mb-2 tracking-wider">Vikram Singh</h1>
      <p className="text-gray-300 mb-6 italic text-lg">"Train Hard. Code Harder. Conquer the Grand Line!"</p>

      {/* Link Buttons with Neon Glow */}
      <div className="w-full max-w-md space-y-6">
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-3 w-full px-6 py-4 font-semibold text-xl rounded-xl shadow-xl bg-gradient-to-r ${link.color} text-white transition hover:scale-110 hover:shadow-[0px_0px_15px_4px_rgba(255,165,0,0.6)] animate-pulse`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.icon} {link.name}
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <p className="mt-6 text-yellow-300 text-sm tracking-widest font-mono">© 2025 Vikram Singh | Powered by the Dragon Balls ⭐⭐⭐⭐⭐</p>
    </div>
  );
};

export default Linktree;
