import { motion } from 'framer-motion';
import { 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Loader2,
  FileText,
  Users,
  Shield
} from 'lucide-react';

const StatusBadge = ({ status, type = 'default', size = 'md', animate = true }) => {
  const statusConfig = {
    pending: {
      icon: Clock,
      color: 'yellow',
      bg: 'bg-yellow-500/10',
      text: 'text-yellow-400',
      border: 'border-yellow-500/20',
      label: 'Pending'
    },
    approved: {
      icon: CheckCircle2,
      color: 'green',
      bg: 'bg-green-500/10',
      text: 'text-green-400',
      border: 'border-green-500/20',
      label: 'Approved'
    },
    rejected: {
      icon: XCircle,
      color: 'red',
      bg: 'bg-red-500/10',
      text: 'text-red-400',
      border: 'border-red-500/20',
      label: 'Rejected'
    },
    processing: {
      icon: Loader2,
      color: 'blue',
      bg: 'bg-blue-500/10',
      text: 'text-blue-400',
      border: 'border-blue-500/20',
      label: 'Processing'
    },
    escalated: {
      icon: AlertCircle,
      color: 'purple',
      bg: 'bg-purple-500/10',
      text: 'text-purple-400',
      border: 'border-purple-500/20',
      label: 'Escalated'
    },
    in_review: {
      icon: FileText,
      color: 'indigo',
      bg: 'bg-indigo-500/10',
      text: 'text-indigo-400',
      border: 'border-indigo-500/20',
      label: 'In Review'
    },
    active: {
      icon: Shield,
      color: 'cyan',
      bg: 'bg-cyan-500/10',
      text: 'text-cyan-400',
      border: 'border-cyan-500/20',
      label: 'Active'
    },
    resolved: {
      icon: CheckCircle2,
      color: 'emerald',
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-400',
      border: 'border-emerald-500/20',
      label: 'Resolved'
    }
  };

  const config = statusConfig[status.toLowerCase()] || statusConfig.pending;
  const Icon = config.icon;

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs gap-1',
    md: 'px-3 py-1.5 text-sm gap-1.5',
    lg: 'px-4 py-2 text-base gap-2'
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const badgeVariants = {
    initial: { 
      scale: 0.8, 
      opacity: 0,
      y: 10
    },
    animate: { 
      scale: 1, 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        `0 0 0px ${config.color === 'yellow' ? 'rgba(234, 179, 8, 0)' : 
                config.color === 'green' ? 'rgba(34, 197, 94, 0)' :
                config.color === 'red' ? 'rgba(239, 68, 68, 0)' :
                config.color === 'blue' ? 'rgba(59, 130, 246, 0)' :
                config.color === 'purple' ? 'rgba(168, 85, 247, 0)' : 'rgba(139, 92, 246, 0)'}`,
        `0 0 15px ${config.color === 'yellow' ? 'rgba(234, 179, 8, 0.3)' : 
                  config.color === 'green' ? 'rgba(34, 197, 94, 0.3)' :
                  config.color === 'red' ? 'rgba(239, 68, 68, 0.3)' :
                  config.color === 'blue' ? 'rgba(59, 130, 246, 0.3)' :
                  config.color === 'purple' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(139, 92, 246, 0.3)'}`,
        `0 0 0px ${config.color === 'yellow' ? 'rgba(234, 179, 8, 0)' : 
                  config.color === 'green' ? 'rgba(34, 197, 94, 0)' :
                  config.color === 'red' ? 'rgba(239, 68, 68, 0)' :
                  config.color === 'blue' ? 'rgba(59, 130, 246, 0)' :
                  config.color === 'purple' ? 'rgba(168, 85, 247, 0)' : 'rgba(139, 92, 246, 0)'}`
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const spinningVariants = status === 'processing' ? {
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    }
  } : {};

  return (
    <motion.div
      variants={badgeVariants}
      initial="initial"
      animate={animate ? "animate" : "initial"}
      whileHover="hover"
      whileTap="tap"
      className={`
        inline-flex items-center rounded-full
        ${config.bg} ${config.text} border ${config.border}
        ${sizeClasses[size]}
        backdrop-blur-sm
      `}
    >
      <motion.div
        variants={spinningVariants}
        animate={status === 'processing' ? "animate" : ""}
      >
        <Icon className={`${iconSizes[size]} ${status === 'processing' ? 'origin-center' : ''}`} />
      </motion.div>
      
      <span className="font-medium">
        {type === 'full' ? config.label : status}
      </span>

      {/* Animated glow effect */}
      <motion.div
        variants={glowVariants}
        animate="animate"
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
    </motion.div>
  );
};

export default StatusBadge;