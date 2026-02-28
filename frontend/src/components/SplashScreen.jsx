import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { 
  Shield, 
  Cpu, 
  Globe2, 
  Lock, 
  Zap, 
  Brain,
  CircuitBoard,
  Sparkles
} from 'lucide-react';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Matrix rain effect
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for(let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    function drawMatrix() {
      ctx.fillStyle = 'rgba(3, 0, 20, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#4f46e5';
      ctx.font = fontSize + 'px monospace';
      
      for(let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const matrixInterval = setInterval(drawMatrix, 35);

    // Timer
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 4000);

    // Progress
    const interval = setInterval(() => {
      setProgress(prev => Math.min(prev + 1, 100));
    }, 40);

    // Glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 200);
    }, 800);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      clearInterval(glitchInterval);
      clearInterval(matrixInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030014] overflow-hidden"
        >
          {/* Matrix Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full opacity-30"
          />

          {/* 3D Sphere Effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[600px] h-[600px]">
              {/* Orbiting rings */}
              <motion.div
                className="absolute inset-0 border-2 border-[#4f46e5]/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-[50px] border-2 border-[#00f2fe]/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-[100px] border-2 border-[#7c3aed]/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              {/* Orbiting orbs */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 1.25
                  }}
                  style={{
                    left: '50%',
                    marginLeft: -8,
                    transformOrigin: '0 300px'
                  }}
                >
                  <motion.div
                    className="w-4 h-4 rounded-full bg-gradient-to-r from-[#00f2fe] to-[#4f46e5]"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* Animated Icons Grid */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="grid grid-cols-3 gap-8 mb-12"
            >
              {[
                { icon: Shield, color: 'from-blue-500 to-cyan-500', delay: 0 },
                { icon: Cpu, color: 'from-purple-500 to-pink-500', delay: 0.2 },
                { icon: Globe2, color: 'from-green-500 to-emerald-500', delay: 0.4 },
                { icon: Lock, color: 'from-red-500 to-orange-500', delay: 0.6 },
                { icon: Brain, color: 'from-indigo-500 to-purple-500', delay: 0.8 },
                { icon: CircuitBoard, color: 'from-pink-500 to-rose-500', delay: 1 },
                { icon: Zap, color: 'from-yellow-500 to-amber-500', delay: 1.2 },
                { icon: Sparkles, color: 'from-teal-500 to-cyan-500', delay: 1.4 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={item.delay}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: item.delay, type: "spring" }}
                  className="relative group"
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} p-5 relative overflow-hidden`}
                  >
                    <item.icon className="w-full h-full text-white relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ x: '-100%' }}
                      animate={{ x: '200%' }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                      style={{ transform: 'skewX(-20deg)', opacity: 0.3 }}
                    />
                  </motion.div>
                  
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl -z-10`}
                    animate={{
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Main Title with Glitch Effect */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.6 }}
              className={`text-8xl font-bold mb-6 relative ${glitchEffect ? 'animate-pulse' : ''}`}
              style={{
                textShadow: glitchEffect 
                  ? '2px 0 #4f46e5, -2px 0 #00f2fe, 4px 2px #7c3aed' 
                  : '0 0 30px rgba(79, 70, 229, 0.5)'
              }}
            >
              <span className="gradient-text">SenateBot</span>
              
              {/* Glitch layers */}
              {glitchEffect && (
                <>
                  <motion.span
                    className="absolute top-0 left-0 gradient-text opacity-50"
                    animate={{ x: -5, y: 2 }}
                    style={{ clipPath: 'inset(0 0 0 0)' }}
                  >
                    SenateBot
                  </motion.span>
                  <motion.span
                    className="absolute top-0 left-0 gradient-text opacity-50"
                    animate={{ x: 5, y: -2 }}
                    style={{ clipPath: 'inset(0 0 0 0)' }}
                  >
                    SenateBot
                  </motion.span>
                </>
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="text-2xl text-gray-400 mb-12 flex items-center justify-center gap-3"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                ⚡
              </motion.span>
              Autonomous Digital Governance
              <motion.span
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                ⚡
              </motion.span>
            </motion.p>

            {/* Quantum Progress Bar */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="w-96 mx-auto relative"
            >
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00f2fe] via-[#4f46e5] to-[#7c3aed]" />
                  <motion.div
                    className="absolute inset-0 bg-white"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{ opacity: 0.3, filter: 'blur(10px)' }}
                  />
                </motion.div>
              </div>

              {/* Progress text */}
              <div className="flex justify-between mt-4 text-sm">
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-[#00f2fe]"
                >
                  INITIALIZING NEURAL NETWORK
                </motion.span>
                <motion.span
                  key={progress}
                  initial={{ scale: 1.5 }}
                  animate={{ scale: 1 }}
                  className="text-[#4f46e5] font-mono"
                >
                  {progress}%
                </motion.span>
              </div>
            </motion.div>

            {/* Binary Rain */}
            <motion.div
              className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 text-xs font-mono text-[#4f46e5]/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              {[...Array(20)].map((_, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                >
                  {Math.random() > 0.5 ? '1' : '0'}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Particle Field */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0
              }}
              animate={{
                y: [null, -100, 100],
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;