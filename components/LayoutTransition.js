import { AnimatePresence, motion } from "framer-motion";

function LayoutTransition({ children, route, transition }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={route}
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25 }}
        exit={{ opacity: 0 }}
        className="bg-black h-screen text-white"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default LayoutTransition;
