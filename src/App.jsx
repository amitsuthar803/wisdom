/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useEffect, useRef, useState } from "react";
import "./index.css";

import Header from "./components/Header";
import Logo from "./assets/logo.png";

import { motion, useTransform, useScroll, easeInOut } from "framer-motion";
import { useWindowSize } from "./hook-use-window-size";
import { Box } from "./Box";

const SnapParent = React.forwardRef(({ ...props }, ref) => (
  <div ref={ref} {...props} className="snap-parent-y-mandatory">
    {props.children}
  </div>
));

function ScrollSample({ scale, translateX, opacity, section3Ref }) {
  return (
    <>
      <Box full className="bg-olive z-40 ">
        <motion.div
          style={{ scale, translateX, opacity }}
          transition={{ duration: 2 }}
        >
          <motion.img
            initial={{ rotate: 180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "linear", delay: 0.5 }}
            src={Logo}
            className="max-w-[450px] "
            alt=""
          />
        </motion.div>
      </Box>

      {/* Animated Heading */}

      <Box full></Box>

      <Box full ref={section3Ref}>
        <div>
          <h4 className="text-[#194428] text-2xl">
            Welcome to WisdomHaus,
            <br /> a contemporary reimagination
            <br /> of the Socratic courtyard
          </h4>
          <h4 className="text-[#194428] text-2xl mt-3">
            We&apos;re glad you&apos;re here.
          </h4>
        </div>
      </Box>
      <Box full>
        <h4 className=" text-olive  text-2xl">
          WisdomHaus <br />
          to help host and serve
          <br /> today’s searches for wisdom,
          <br /> whatever their form.
        </h4>
      </Box>
      <Box full>
        <div className="ml-[6.2rem]">
          <h4 className="text-olive text-2xl">
            The Haus presently operates as:
            <br />
            <span className="font-semibold">a seeker space</span>
            <br />
            <span className="ml-5">
              hosting gatherings, dialogues, retreats,
            </span>
            <br /> <span className="ml-5">and more</span>
            <br />
            <span className="ml-5">for a community of seekers of wisdom</span>
          </h4>

          <h4 className=" text-olive text-2xl mt-3">
            <span className="font-semibold">a think tank</span>
            <br />
            <span className="ml-5">helping leaders and institutions</span>
            <br />
            <span className="ml-5">bring the power of philosophy</span>
            <br />
            <span className="ml-5">
              to their work, organizations, and society
            </span>
          </h4>
        </div>
      </Box>
      <Box full>
        <div>
          <h4 className="text-[#194428] text-2xl">
            Now, where shall we begin?
          </h4>
        </div>
      </Box>
      {/* heading 2 animation */}
      <Box full></Box>
      <Box full>
        <div className=" ml-[9.5rem]">
          <h4 className=" text-olive  text-2xl">
            We live in an age
            <br /> where our maps
            <br /> barely match our unfolding realities.
          </h4>
          <h4 className=" text-olive mt-3  text-2xl">
            Confronting new mysteries,
            <br /> we need fresh questions and perspectives
            <br /> more than answers and formulas.
          </h4>
        </div>
      </Box>
      <Box full>
        <div className="ml-[9.5rem]">
          <h4 className=" flex flex-col gap-[3rem] text-olive  text-2xl">
            <span>
              We live, in other words,
              <br /> in a time ripe for active, living philosophy:
            </span>
            <span>
              philosophy not as the rehashing or
              <br />
              indoctrination of ancient arguments,
            </span>
            <span>
              but as literally the love of <br /> (and search for)
            </span>
            <span>
              wisdom
              <br /> in present everyday life
            </span>
          </h4>
        </div>
      </Box>
      <Box full>
        <h4 className=" text-olive  text-2xl">
          WisdomHaus <br />
          to help host and serve
          <br /> today’s searches for wisdom,
          <br /> whatever their form.
        </h4>
      </Box>
      <Box full>
        <h4 className=" text-olive  text-2xl">
          WisdomHaus <br />
          to help host and serve
          <br /> today’s searches for wisdom,
          <br /> whatever their form.
        </h4>
      </Box>
    </>
  );
}

const Heading1 = ({ animate, reverse, hideAnimateHeading }) => {
  const bounceAnimation = {
    translateX: animate
      ? reverse
        ? [-360, -120, 0]
        : [0, -120, -360]
      : ["0%"],

    translateY: animate
      ? reverse
        ? [0, -240, 40, 0]
        : [0, 40, -240, 0]
      : ["0%"],

    rotateZ: animate
      ? reverse
        ? [-90, -45, -25, 0]
        : [0, -25, -45, -90]
      : [0],

    transition: animate
      ? {
          translateX: {
            duration: 1.1,
            ease: "linear",
          },
          translateY: {
            duration: 1.1,
            ease: easeInOut,
          },
          rotateZ: {
            duration: 1.1,
            ease: "linear",
          },
        }
      : undefined,
  };

  return (
    <div
      className={` ${
        hideAnimateHeading
          ? "hidden"
          : "fixed flex items-center  pointer-events-none right-0 left-0 justify-center h-[100vh]"
      }`}
    >
      {
        <motion.h1
          className="text-olive  z-20 font-bold text-[1.5rem]"
          initial={{ opacity: 1 }}
          animate={bounceAnimation}
          transition={{ duration: 0.5 }}
        >
          A place for philosophy
          <br />
          in everyday life
        </motion.h1>
      }
    </div>
  );
};

const Heading2 = ({ animate2, reverse2, hideAnimateHeading2 }) => {
  const bounceAnimation = {
    translateX: animate2
      ? reverse2
        ? [-360, -120, 0]
        : [0, -120, -360]
      : ["0%"],

    translateY: animate2
      ? reverse2
        ? [0, -240, 40, 0]
        : [0, 40, -240, 0]
      : ["0%"],

    rotateZ: animate2
      ? reverse2
        ? [-90, -45, -25, 0]
        : [0, -25, -45, -90]
      : [0],

    transition: animate2
      ? {
          translateX: {
            duration: 1.1,
            ease: "linear",
          },
          translateY: {
            duration: 1.1,
            ease: easeInOut,
          },
          rotateZ: {
            duration: 1.1,
            ease: "linear",
          },
        }
      : undefined,
  };

  return (
    <div
      className={` ${
        hideAnimateHeading2
          ? "hidden"
          : "fixed  flex  items-center pointer-events-none right-0 left-0 justify-center h-[100vh] "
      }`}
    >
      {
        <motion.h1
          className="text-olive z-20 font-bold text-[1.5rem]"
          initial={{ opacity: 1 }}
          animate={bounceAnimation}
          transition={{ duration: 0.5 }}
        >
          Philosophy, n.
          <br />
          the love of wisdom
        </motion.h1>
      }
    </div>
  );
};

export default function App() {
  const ref = useRef();
  const windowSize = useWindowSize();
  const { scrollY, scrollYProgress } = useScroll({ container: ref });
  const [scrollYValue, setScrollYValue] = useState(0);
  const [scrollYProgressValue, setScrollYProgressValue] = useState(0);

  const pageRange = [0, 0.15, 0.3, 0.5, 0.7, 1];
  const lengthRange = ["75vh", "45vh", "50vh", "45vh", "50vh", "100vh"];
  const calcHeight = useTransform(scrollYProgress, pageRange, lengthRange);

  useEffect(() => {
    scrollY.onChange((v) => setScrollYValue(v));
    scrollYProgress.onChange((v) => setScrollYProgressValue(v));
  }, [scrollY, scrollYProgress]);

  const section3Ref = useRef();
  const [hidden, setHidden] = useState(true); // State to control header visibility
  const [animateHeading, setAnimateHeading] = useState(false); // State to control heading animation
  const [animateHeading2, setAnimateHeading2] = useState(false); // State to control heading animation
  const [scrollDirection, setScrollDirection] = useState("down"); // Track scroll direction
  const [reverse, setReverse] = useState(false); // State to control reverse animation
  const [reverse2, setReverse2] = useState(false); // State to control reverse animation
  const [hideAnimateHeading, setHideAnimateHeading] = useState(true);
  const [hideAnimateHeading2, setHideAnimateHeading2] = useState(true);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, -4]);
  const translateX = useTransform(scrollYProgress, [0, 0.5], ["0", "-1250%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 1]);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = (latest) => {
      // Determine scroll direction
      if (latest > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = latest;

      // Control header visibility and heading animation based on scroll position
      if (latest < 210) {
        setHideAnimateHeading(true);
      } else {
        setHideAnimateHeading(false);
      }
      if (latest > window.innerHeight / 2.8) {
        setHidden(false);
      } else {
        setHidden(true);
      }

      // Control heading animation based on scroll position and direction
      if (latest > 700) {
        setAnimateHeading(true);
        setReverse(false);
      } else if (scrollDirection === "up" || latest < 890) {
        setReverse(true);
      } else {
        setAnimateHeading(false);
      }

      if (latest > 3000) {
        setHideAnimateHeading(true);

        setHideAnimateHeading2(false);
      } else {
        setHideAnimateHeading(false);
        setHideAnimateHeading2(true);
      }

      if (latest > 4000) {
        setAnimateHeading2(true);
        setReverse2(false);
      } else if (scrollDirection === "up" || latest < 4000) {
        setReverse2(true);
      } else {
        setAnimateHeading2(false);
      }
    };

    // Subscribe to scrollY changes
    const unsubscribe = scrollY.onChange(handleScroll);

    // Cleanup on component unmount
    return () => {
      unsubscribe();
    };
  }, [scrollY, scrollDirection, section3Ref]);

  return (
    <div className="relative">
      <div
        style={{
          position: "fixed",
          bottom: 0,
          fontFamily: "monospace",
          fontWeight: 600,
          zIndex: 50,
        }}
      >
        {"height: " +
          calcHeight.get() +
          " | y: " +
          scrollYValue +
          " | percentage: " +
          (scrollYProgressValue * 100).toFixed(0) +
          "% | WindowSize h: " +
          windowSize.height +
          " w: " +
          windowSize.width +
          "   "}
      </div>
      <SnapParent ref={ref}>
        <Header hidden={hidden} />
        <Heading1
          animate={animateHeading}
          reverse={reverse}
          hideAnimateHeading={hideAnimateHeading}
        />
        <Heading2
          animate2={animateHeading2}
          reverse2={reverse2}
          hideAnimateHeading2={hideAnimateHeading2}
        />
        <ScrollSample
          scale={scale}
          translateX={translateX}
          opacity={opacity}
          section3Ref={section3Ref}
        />
      </SnapParent>
    </div>
  );
}
