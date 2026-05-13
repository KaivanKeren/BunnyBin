"use client";

import { motion } from "framer-motion";
import { Trophy, Star, TrendingUp } from "lucide-react";
import Bunny from "../Bunny";
import Confetti from "../Confetti";

export default function SuccessState({ category, onReset, count = 1 }) {
  const isOrganic = category === "organic";
  const c = isOrganic
    ? {
        bg: "bg-organic-100",
        glow: "bg-organic-300",
        text: "text-organic-500",
        led: "#5CB85C",
        accent: "bg-organic-400",
      }
    : {
        bg: "bg-inorganic-100",
        glow: "bg-inorganic-300",
        text: "text-inorganic-500",
        led: "#5499E6",
        accent: "bg-inorganic-400",
      };

  // Growing bunny: starts small, grows by ~12px per success, capped at 280px.
  const baseSize = 120;
  const growSize = Math.min(baseSize + count * 14, 280);

  return (
    <motion.div
      key="success"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`relative flex h-full w-full flex-col items-center justify-center gap-3 ${c.bg}`}
    >
      <Confetti />

      <motion.div
        className={`absolute h-96 w-96 rounded-full ${c.glow} opacity-40 blur-3xl`}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      />

      {/* Growing bunny: animates from very small to current grown size */}
      <motion.div
        key={`grow-${count}`}
        initial={{ scale: 0.15, opacity: 0, rotate: -15 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 140, damping: 12, duration: 1.2 }}
        className="relative"
      >
        <Bunny mood="happy" size={growSize} />
        {/* Level badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
          className={`absolute -right-2 -top-2 flex items-center gap-1 rounded-full ${c.accent} px-3 py-1 text-sm font-bold text-white shadow-pop`}
        >
          <TrendingUp size={14} /> Lv {count}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-2"
      >
        <Trophy className={c.text} size={32} />
        <h1 className={`text-5xl font-bold ${c.text}`}>YEAY!</h1>
        <Trophy className={c.text} size={32} />
      </motion.div>

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-2xl font-bold text-[#3a2f29]"
      >
        KAMU HEBAT!
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-base text-[#6b5b50]"
      >
        Bunny tumbuh makin besar berkat bantuanmu!{" "}
        <span className="font-semibold">+10 poin</span>
      </motion.p>

      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5 + i * 0.12, type: "spring" }}
          >
            <Star className="fill-yellow-400 text-yellow-400" size={28} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold shadow-soft"
      >
        <motion.span
          className="h-3 w-3 rounded-full"
          style={{ backgroundColor: c.led, boxShadow: `0 0 12px ${c.led}` }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <span className={c.text}>
          LED {isOrganic ? "Hijau" : "Biru"} Menyala
        </span>
      </motion.div>

      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onReset}
        className="rounded-full bg-white px-6 py-2 text-sm font-bold text-[#3a2f29] shadow-pop"
      >
        Coba Lagi
      </motion.button>
    </motion.div>
  );
}
