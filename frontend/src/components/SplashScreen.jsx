import { motion } from "framer-motion";

const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen flex items-center justify-center bg-black"
    >
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 style={{
          fontSize: "60px",
          background: "linear-gradient(to right, #3b82f6, #9333ea)",
          WebkitBackgroundClip: "text",
          color: "transparent"
        }}>
          SenateBot
        </h1>

        <p style={{ marginTop: "20px", color: "#94a3b8" }}>
          Autonomous Digital Governance
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;