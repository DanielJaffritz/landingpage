"use client"
import Tag from "@/components/Tag";
import { introductionText } from "@/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Introduction() {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const words = introductionText.split(" ");
  const { scrollYProgress } = useScroll({ target: scrollTarget, offset: ['start end', 'end end'] })
  const [currentWord, setCurrentWord] = useState(0)
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length])
  useEffect(() => {
    wordIndex.on('change', (latest) => {
      setCurrentWord(latest)
    })
  }, [wordIndex])

  return <section className="py-28 lg:py-40">
    <div className="mx-10">
      <div className="sticky top-20 md:top-28 lg:top-40">
        <div className="flex justify-center">
          <Tag>Introducing Layers</Tag>
        </div>
        <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10 mx-25 lg:mx-40">
          <span>Your creative process deserves better.</span>{" "}
          <span>{
            words.map((word, i) => (
              <span key={i} className={twMerge("transitoin duration-500 text-white/15",
                i < currentWord && 'text-white'
              )}>{`${word} `}</span>
            ))
          }</span>
          <span className="text-lime-400 block">That is why we built Layers.</span>

        </div>
      </div>
      <div className="h-[150vh]" ref={scrollTarget}></div>
    </div>
  </section>
}
