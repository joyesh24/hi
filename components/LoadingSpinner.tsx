import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <motion.div className="relative">
        <motion.div
          className="w-16 h-16 border-4 border-blue-500 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [1, 0.5, 1],
            rotate: 360
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute inset-0 border-t-4 border-blue-300 rounded-full"
          animate={{ rotate: -360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;

