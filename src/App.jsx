import React from "react";
import { motion } from "framer-motion";
import "./App.css";

export default function App() {
  return (
    <div className="w-full h-screen bg-stone-800 flex items-center justify-center overflow-hidden relative">
      {/* Background rubble texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-30"></div>

      {/* Elephant illustration */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="z-10"
      >
        <svg
          width="300"
          height="300"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFA500" />
              <stop offset="100%" stopColor="#FF4500" />
            </linearGradient>
          </defs>
          <path
            fill="url(#orangeGradient)"
            d="M80 400C90 300 60 260 100 200C140 140 220 100 300 120C360 140 400 200 400 260C410 280 460 300 460 340C460 400 400 440 340 440H160C120 440 80 420 80 400Z"
          />
        </svg>
      </motion.div>

      {/* Text overlay */}
      <motion.div
        className="absolute bottom-10 text-white text-4xl font-bold z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        Он стоит. А вы?
      </motion.div>
    </div>
  );
}
