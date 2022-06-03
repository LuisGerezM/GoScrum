import { utilTransition } from "utilities/utilTransition"
import { motion } from "framer-motion"

export const MotionView = ({ children, nameClass = "page" }) => {
  const pageTransition = utilTransition("pageTransition")

  return (
    <motion.div className={nameClass} initial="out" animate="in" exit="out" variants={pageTransition}>
      {children}
    </motion.div>
  )
}
