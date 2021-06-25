import { AnimatePresence, motion, AnimateSharedLayout } from "framer-motion";

const transitions = {
  left: {
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.1 },
  },
  right: {
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.1 },
  },
  default: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.1 },
  },
};

function LayoutTransition({ children, route, transition = "default" }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <AnimateSharedLayout>
        <motion.div
          initial={transitions[transition].initial}
          animate={transitions[transition].animate}
          transition={transitions[transition].transition}
          key={route}
          exit={{ opacity: 0 }}
          className="bg-black h-screen text-white"
        >
          {children}
          {route}
        </motion.div>
      </AnimateSharedLayout>
    </AnimatePresence>
  );
}

export default LayoutTransition;
