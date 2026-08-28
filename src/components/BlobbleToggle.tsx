import { faSpider, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { useToggleMode } from "../context/ModeToggle.js";

export default function BlobbleToggle() {

  const theSpider = <FontAwesomeIcon icon={faSpider} />
  const theUser = <FontAwesomeIcon icon={faUserTie} />

  const {isOn, setIsOn} = useToggleMode();

  return (
    <motion.button
      type="button"
      role="switch"
      aria-checked={isOn}
      onClick={() => setIsOn((prev) => !prev)}
      className={`
        relative z-0 flex  h-7 w-16 cursor-pointer items-center rounded-full p-1.5 outline-none
        ${isOn ? "bg-red-400" : "bg-black/50"}
      `}
      whileTap={{ scale: 0.96 }}
    >

      {isOn && theUser}  

      {/* Background glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          opacity: isOn ? 1 : 0,
        }}
        transition={{ duration: 0.2, }}
        style={{
          background:
            "radial-gradient(circle at 70% 50%, rgba(220, 38, 38, 1), transparent 55%)",
        }}
      />

      {/* Blob / thumb */}
      <motion.div
        className="relative z-10 h-8 w-8 rounded-full items-center content-center bg-white shadow-[0_2px_8px_rgba(0,0,0,0.18)]"
        animate={{
          x: isOn ? 8 : -8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 25,
          mass: 0.7,
        }}
      >{isOn ? theSpider : theUser}</motion.div>
        
      {!isOn && theSpider}    
      
    </motion.button>
  );
}