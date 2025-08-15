"use client"

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";


export default function TypingAnim() {
  return (
    
      <div className="max-w-2xl w-full">
            <TypingHeadline
              phrases={[
                "Welcome to NEURO👋",
                "NEURO adalah platform pendidikan yang akan menyediakan layanan belajar secara gratis.",
                "",
              ]}
              typingSpeed={55}
              deletingSpeed={35}
              holdTime={1200}
              loop
            />
            
        
      </div>
  );
}

/** Core typing component */
function TypingHeadline({
  phrases,
  typingSpeed = 150,
  deletingSpeed = 50,
  holdTime = 1000,
  loop = true,
}) {
  const safePhrases = useMemo(() => (Array.isArray(phrases) && phrases.length ? phrases : ["Hello, world!"]), [phrases]);
  const [index, setIndex] = useState(0); // which phrase
  const [subIndex, setSubIndex] = useState(0); // how many chars shown
  const [deleting, setDeleting] = useState(false);
  const [blinkOn, setBlinkOn] = useState(true);
  const timerRef = useRef(null);

  const full = safePhrases[index] || "";
  const text = full.slice(0, subIndex);

  // caret blink handled by framer-motion but we also keep a logical flag for keyboard nav
  useEffect(() => {
    const blink = setInterval(() => setBlinkOn((v) => !v), 500);
    return () => clearInterval(blink);
  }, []);

  // typing loop
  useEffect(() => {
    // if fully typed and not deleting, hold a bit
    if (!deleting && subIndex === full.length) {
      timerRef.current = setTimeout(() => setDeleting(true), holdTime);
      return () => clearTimeout(timerRef.current);
    }

    // if fully deleted
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => {
        const next = i + 1;
        return loop ? next % safePhrases.length : Math.min(next, safePhrases.length - 1);
      });
      return;
    }

    // normal typing/deleting step
    const delta = deleting ? -1 : 1;
    const speed = deleting ? deletingSpeed : typingSpeed;
    timerRef.current = setTimeout(() => setSubIndex((s) => s + delta), speed);
    return () => clearTimeout(timerRef.current);
  }, [subIndex, deleting, full, typingSpeed, deletingSpeed, holdTime, loop, safePhrases.length]);

  return (
    <div className="tracking-tight ">
      <motion.h1
        className="text-base leading-tight md:text-lg"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        aria-live="polite"
      >
        {text}
        <motion.span
          key={deleting ? "caret-del" : "caret-type"}
          className="inline-block w-[2px] h-[1.1em] align-[-0.05em] bg-gray-900 ml-0.5"
          aria-hidden={!blinkOn}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
      </motion.h1>

      {/* subtle fade for each new phrase */}
      <motion.div
        key={`${index}-${deleting}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
}



