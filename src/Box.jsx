import React, { forwardRef } from "react";
import "./index.css";
import { motion } from "framer-motion";

export const Box = forwardRef(({ color, children, className }, ref) => {
  // <p>{`Header inside viewport ${inView}.`}</p>
  return (
    <motion.div ref={ref} className={`${className} snap-child-center`}>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        style={{
          // backgroundColor: "white",
          zIndex: 40,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
});

Box.displayName = "Box";
