import { motion, AnimatePresence } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

function Loader() {
  return (
    <div className=" flex items-center justify-center h-screen">
      <AnimatePresence>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 127.71 131.17"
          className=" p-11 absolute w-40"
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.path
            d="M133.55,135.92c-2.72-16.56-16.23-20.4-22.46-21.36-4.51-.7-17.94,4-21.41,5.08-20.65,6.28-17.87,4.59-17.87,4.59s18.27-13.72,32.62-26.48c2.88-2.56,6.94-2.22,7.48-2.19C123.18,96.15,141.23,112.74,133.55,135.92Z"
            transform="translate(-7.69 -4.74)"
            animate={{ scale: [0, 0.8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1,
            }}
          />
          <motion.path
            d="M101.55,89.3C98.83,72.75,85.32,68.9,79.09,67.94c-4.51-.69-17.94,4-21.41,5.09C37,79.31,39.81,77.62,39.81,77.62S58.08,63.9,72.43,51.14c2.88-2.57,6.94-2.22,7.48-2.19C92,49.58,108.36,68.75,101.55,89.3Z"
            transform="translate(-7.69 -4.74)"
            animate={{ scale: [0, 0.9, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1,
            }}
          />
          <motion.path
            d="M69.55,45.13c-2.72-16.55-16.23-20.4-22.46-21.36-4.51-.69-17.94,4-21.41,5.09C5,35.13,7.81,33.45,7.81,33.45S26.08,19.73,40.43,7c2.88-2.57,6.94-2.22,7.48-2.19C59.18,5.37,77.23,22,69.55,45.13Z"
            transform="translate(-7.69 -4.74)"
            animate={{ scale: [0, 1, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1,
            }}
          />
        </svg>
      </AnimatePresence>
    </div>
  );
}
export default Loader;
