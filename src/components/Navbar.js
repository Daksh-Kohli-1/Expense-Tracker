"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import React from "react";

const Navbar = () => {
  const text = "Finance Pro";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText((prev) =>
        index < text.length ? prev + text[index] : ""
      );
      setIndex((prev) => (prev < text.length ? prev + 1 : 0));
    }, 500);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="h-[10vh] flex  items-center m-5">
      <motion.span
        className="font-ubuntu"
        animate={{opacity:[0.2  ,1]}}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <a href="/" className="text-5xl md:text-7xl">
          {displayedText}
        </a>
        
      </motion.span>
    </div>
  );
};

export default Navbar;
