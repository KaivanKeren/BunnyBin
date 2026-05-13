"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, RotateCcw } from "lucide-react";
import IdleState from "@/components/states/IdleState";
import ScanningState from "@/components/states/ScanningState";
import QuestionState from "@/components/states/QuestionState";
import SuccessState from "@/components/states/SuccessState";
import ErrorState from "@/components/states/ErrorState";

const WASTE_ITEMS = [
  { name: "Kulit Pisang", emoji: "🍌", category: "organic" },
  { name: "Botol Plastik", emoji: "🧴", category: "inorganic" },
  { name: "Daun Kering", emoji: "🍂", category: "organic" },
  { name: "Kaleng Soda", emoji: "🥫", category: "inorganic" },
  { name: "Sisa Roti", emoji: "🍞", category: "organic" },
  { name: "Kertas Bekas", emoji: "📰", category: "inorganic" },
];

const STATES = ["idle", "scanning", "question", "success", "error"];

export default function Home() {
  const [state, setState] = useState("idle");
  const [item, setItem] = useState(null);
  const [wrongChoice, setWrongChoice] = useState(null);
  const [muted, setMuted] = useState(false);
  const [score, setScore] = useState(0);
  const [successCount, setSuccessCount] = useState(0);

  // Auto-transition scanning → question
  useEffect(() => {
    if (state === "scanning") {
      const t = setTimeout(() => setState("question"), 2400);
      return () => clearTimeout(t);
    }
  }, [state]);

  // Auto-reset success → idle
  useEffect(() => {
    if (state === "success") {
      const t = setTimeout(() => reset(), 6000);
      return () => clearTimeout(t);
    }
  }, [state]);

  const startScan = () => {
    const pick = WASTE_ITEMS[Math.floor(Math.random() * WASTE_ITEMS.length)];
    setItem(pick);
    setWrongChoice(null);
    setState("scanning");
  };

  const answer = (choice) => {
    if (!item) return;
    if (choice === item.category) {
      setScore((s) => s + 10);
      setSuccessCount((c) => c + 1);
      setState("success");
    } else {
      setWrongChoice(choice);
      setState("error");
    }
  };

  // Error → back to question with wrong choice grayed out
  const tryAgain = () => setState("question");

  const reset = () => {
    setItem(null);
    setWrongChoice(null);
    setState("idle");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#2b211a] p-4">
      <div
        className="relative w-full max-w-[1024px] overflow-hidden rounded-[28px] border-[10px] border-[#1a1410] bg-canvas shadow-2xl"
        style={{ aspectRatio: "1024 / 600" }}
      >
        {/* Top status bar */}
        <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between px-5 py-2 text-xs">
          <div className="flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 font-semibold text-[#6b5b50] shadow-soft">
            <span className="h-2 w-2 animate-pulse rounded-full bg-organic-400" />
            BunnyBin Online
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-white/70 px-3 py-1 font-bold text-[#3a2f29] shadow-soft">
              ⭐ {score}
            </div>
            <button
              onClick={() => setMuted((m) => !m)}
              className="rounded-full bg-white/70 p-2 text-[#6b5b50] shadow-soft transition hover:bg-white"
            >
              {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            <button
              onClick={reset}
              className="rounded-full bg-white/70 p-2 text-[#6b5b50] shadow-soft transition hover:bg-white"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>

        {/* Main viewport */}
        <div className="absolute inset-0 pt-10">
          <AnimatePresence mode="wait">
            {state === "idle" && <IdleState key="idle" onInsert={startScan} />}
            {state === "scanning" && <ScanningState key="scan" />}
            {state === "question" && (
              <QuestionState
                key="question"
                onAnswer={answer}
                item={item}
                disabledChoice={wrongChoice}
              />
            )}
            {state === "success" && (
              <SuccessState
                key="success"
                category={item?.category}
                onReset={reset}
                count={successCount}
              />
            )}
            {state === "error" && (
              <ErrorState
                key="error"
                correct={item?.category}
                item={item}
                onTryAgain={tryAgain}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Dev / prototype state switcher */}
        <div className="absolute bottom-2 left-1/2 z-30 flex -translate-x-1/2 gap-1 rounded-full bg-black/40 px-2 py-1 backdrop-blur">
          {STATES.map((s) => (
            <button
              key={s}
              onClick={() => {
                if (s !== "idle" && !item) setItem(WASTE_ITEMS[0]);
                setState(s);
              }}
              className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase transition ${
                state === s
                  ? "bg-white text-[#3a2f29]"
                  : "text-white/80 hover:bg-white/20"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
