"use client";

import { motion } from "framer-motion";

// Animated hint: hand dropping trash into a tray.
export default function HandHint({ size = 200 }) {
  return (
    <div
      style={{ width: size, height: size * 0.7 }}
      className="relative no-select"
    >
      <svg
        viewBox="0 0 240 170"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tray base */}
        <g>
          <ellipse cx="120" cy="148" rx="80" ry="8" fill="#000" opacity="0.08" />
          <path
            d="M48 100 L192 100 L180 142 Q180 150 172 150 L68 150 Q60 150 60 142 Z"
            fill="#5CB85C"
            stroke="#3FA13F"
            strokeWidth="3"
          />
          <ellipse cx="120" cy="100" rx="72" ry="10" fill="#86CF86" />
          <ellipse cx="120" cy="100" rx="60" ry="6" fill="#3FA13F" opacity="0.4" />
        </g>

        {/* Falling trash item */}
        <motion.g
          animate={{
            y: [0, 60, 60],
            opacity: [1, 1, 0],
            rotate: [0, 25, 25],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            times: [0, 0.7, 1],
            ease: "easeIn",
          }}
        >
          {/* Crumpled paper / trash */}
          <circle cx="120" cy="55" r="11" fill="#F2DFCB" stroke="#C9AE93" strokeWidth="2" />
          <path
            d="M114 52 q4 -6 10 0 q-3 5 -10 0z"
            fill="#C9AE93"
            opacity="0.6"
          />
        </motion.g>

        {/* Hand */}
        <motion.g
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Sleeve */}
          <rect x="148" y="6" width="40" height="22" rx="6" fill="#7BB3EE" />
          <rect x="148" y="24" width="40" height="6" rx="3" fill="#5499E6" />
          {/* Palm */}
          <path
            d="M140 30 Q138 26 144 24 L188 24 Q196 24 196 32 L196 56 Q196 64 188 64 L156 64 Q148 64 144 60 Z"
            fill="#FFE0C2"
            stroke="#E8B98E"
            strokeWidth="2"
          />
          {/* Thumb */}
          <path
            d="M144 40 Q132 44 132 52 Q132 58 140 56 L148 52 Z"
            fill="#FFE0C2"
            stroke="#E8B98E"
            strokeWidth="2"
          />
          {/* Fingers pinching */}
          <path
            d="M150 56 Q146 62 150 68 Q156 70 158 64 Z"
            fill="#FFE0C2"
            stroke="#E8B98E"
            strokeWidth="2"
          />
        </motion.g>

        {/* Down arrow hint */}
        <motion.g
          animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        >
          <path
            d="M120 78 L120 92 M114 86 L120 92 L126 86"
            stroke="#3FA13F"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </motion.g>
      </svg>
    </div>
  );
}
