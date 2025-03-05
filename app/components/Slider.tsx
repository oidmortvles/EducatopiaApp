"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import styles from './Slider.module.css';

interface SliderProps {
  children: ReactNode;
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const [width, setWidth] = useState(0);
  const pasarela = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    if (pasarela.current) {
      setWidth(pasarela.current.scrollWidth - pasarela.current.offsetWidth);
    }
  }, []);


  // Limites del arrastre 
  const dragLimits = {
    left: -width, // Evita arrastre excesivo
    right: 0,
  };
  

  return (
    <section className={styles.sliderContainer}>
      <div className={styles.slidePlace}>
        <motion.div          
          className={styles.slidePasarela}
          drag={"x"}
          dragElastic={0.2}
          dragConstraints={dragLimits}
          dragMomentum={true}
          ref={pasarela}
        >
          {React.Children.map(children, (child, index) => (
            <div key={index} className={styles.slideItem}>
              {child}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Slider;