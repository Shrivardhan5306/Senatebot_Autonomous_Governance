import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  status, 
  stats,
  onClick,
  gradient = 'from-primary-500 to-accent-500'
}) => {
  const cardVariants = {
    initial: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    animate: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const arrowVariants = {
    initial: { x: 0, opacity: 0.5 },
    hover: { 
      x: 5,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const glowVariants = {
    initial: {
      boxShadow: "0 0 0px rgba(139, 92, 246, 0)"
    },
    hover: {
      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      variants={glowVariants}
      onClick={onClick}
      className="relative group cursor-pointer"
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
      
      {/* Main card */}
      <div className="relative glass-card p-6 rounded-2xl overflow-hidden">
        {/* Animated border */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent)',
            filter: 'blur(8px)'
          }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Icon */}
        <motion.div
          variants={iconVariants}
          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${gradient} p-2.5 mb-4`}
        >
          <Icon className="w-full h-full text-white" />
        </motion.div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 mb-4">
          {description}
        </p>

        {/* Status/Stats */}
        {status && (
          <div className="mb-4">
            <span className={`text-xs px-2 py-1 rounded-full ${
              status === 'active' ? 'bg-green-500/20 text-green-400' :
              status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-gray-500/20 text-gray-400'
            }`}>
              {status}
            </span>
          </div>
        )}

        {stats && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            {Object.entries(stats).map(([key, value]) => (
              <div key={key}>
                <p className="text-xs text-gray-500">{key}</p>
                <p className="text-sm font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        )}

        {/* Arrow */}
        <motion.div
          variants={arrowVariants}
          className="flex items-center gap-1 text-sm font-medium"
          style={{ color: `var(--${gradient.split('-')[2]}-400)` }}
        >
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;