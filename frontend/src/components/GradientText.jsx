import { motion } from 'framer-motion';

const GradientText = ({ children, className = '', as = 'span', animate = true }) => {
  const Component = animate ? motion[as] : as;
  
  const gradientVariants = {
    initial: {
      backgroundPosition: '0% 50%'
    },
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <Component
      className={`bg-gradient-to-r from-primary-400 via-accent-400 to-cyber-pink bg-clip-text text-transparent bg-[length:200%_200%] ${className}`}
      {...(animate && {
        variants: gradientVariants,
        initial: "initial",
        animate: "animate"
      })}
    >
      {children}
    </Component>
  );
};

export default GradientText;