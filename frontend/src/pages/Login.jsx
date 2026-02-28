import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Fingerprint,
  Shield,
  Github,
  Twitter,
  ChromeIcon as Google,
  ArrowRight
} from 'lucide-react';
import GradientText from '../components/GradientText';
import { pageTransition, fadeInUp } from '../animations/variants';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-grid">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/20 via-transparent to-[#00f2fe]/20" />
        
        {/* Floating Orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${
                i % 2 === 0 ? '#4f46e5' : '#00f2fe'
              }20, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <motion.div
        variants={fadeInUp}
        className="relative z-10 w-full max-w-5xl"
      >
        <div className="glass-panel rounded-3xl overflow-hidden border border-white/10">
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            {/* Left Panel - Branding */}
            <div className="relative bg-gradient-to-br from-[#4f46e5]/20 to-[#00f2fe]/20 p-12 flex flex-col justify-between overflow-hidden">
              {/* Animated rings */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#4f46e5]/30 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-[#00f2fe]/30 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-white/20 rounded-full" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#4f46e5] to-[#00f2fe] p-3 mb-8"
                >
                  <Shield className="w-full h-full text-white" />
                </motion.div>

                <h1 className="text-4xl font-bold mb-4">
                  Welcome to{' '}
                  <GradientText>
                    SenateBot
                  </GradientText>
                </h1>

                <p className="text-gray-400 mb-8">
                  Experience the future of digital governance with AI-powered automation and real-time processing.
                </p>

                {/* Features */}
                <div className="space-y-4">
                  {[
                    { icon: Shield, text: 'Military-grade encryption' },
                    { icon: Fingerprint, text: 'Biometric authentication' },
                    { icon: Lock, text: 'Zero-knowledge proof' },
                  ].map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                        <feature.icon className="w-4 h-4 text-[#4f46e5]" />
                      </div>
                      <span className="text-sm text-gray-300">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="relative z-10 grid grid-cols-3 gap-4">
                {[
                  { value: '10K+', label: 'Active Users' },
                  { value: '99.9%', label: 'Uptime' },
                  { value: '24/7', label: 'Support' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="text-center"
                  >
                    <p className="text-xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Panel - Form */}
            <div className="p-12 bg-[#030014]/50 backdrop-blur-xl">
              <div className="max-w-sm mx-auto">
                {/* Tabs */}
                <div className="flex gap-4 mb-8">
                  {['login', 'register'].map((tab) => (
                    <motion.button
                      key={tab}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsLogin(tab === 'login')}
                      className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        (isLogin && tab === 'login') || (!isLogin && tab === 'register')
                          ? 'text-white'
                          : 'text-gray-500'
                      }`}
                    >
                      {tab === 'login' ? 'Sign In' : 'Create Account'}
                      {((isLogin && tab === 'login') || (!isLogin && tab === 'register')) && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-[#4f46e5] to-[#00f2fe] rounded-lg -z-10"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email */}
                  <motion.div variants={fadeInUp}>
                    <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                    <div className="relative group">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-[#4f46e5] transition-colors" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/20 transition-all"
                        placeholder="Enter your email"
                      />
                      <motion.div
                        className="absolute inset-0 rounded-lg pointer-events-none"
                        animate={{
                          boxShadow: [
                            "0 0 0px rgba(79, 70, 229, 0)",
                            "0 0 20px rgba(79, 70, 229, 0.3)",
                            "0 0 0px rgba(79, 70, 229, 0)"
                          ]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Password */}
                  <motion.div variants={fadeInUp}>
                    <label className="block text-sm text-gray-400 mb-2">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full pl-10 pr-12 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/20 transition-all"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </motion.div>

                  {/* Remember & Forgot */}
                  <motion.div variants={fadeInUp} className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.remember}
                        onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
                        className="w-4 h-4 rounded border-white/20 bg-white/5 text-[#4f46e5] focus:ring-[#4f46e5]"
                      />
                      <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                        Remember me
                      </span>
                    </label>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-sm text-[#4f46e5] hover:text-[#00f2fe] transition-colors flex items-center gap-1"
                    >
                      Forgot password?
                      <ArrowRight className="w-3 h-3" />
                    </motion.button>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#4f46e5] to-[#00f2fe] rounded-lg text-white font-medium relative overflow-hidden group"
                  >
                    <span className="relative z-10">
                      {isLogin ? 'Sign In' : 'Create Account'}
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                      style={{ opacity: 0.2 }}
                    />
                  </motion.button>

                  {/* Social Login */}
                  <motion.div variants={fadeInUp} className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/10" />
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="px-2 bg-[#030014] text-gray-500">Or continue with</span>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-3">
                    {[
                      { icon: Google, label: 'Google' },
                      { icon: Github, label: 'GitHub' },
                      { icon: Twitter, label: 'Twitter' },
                    ].map((provider, i) => (
                      <motion.button
                        key={i}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors group"
                      >
                        <provider.icon className="w-5 h-5 mx-auto text-gray-400 group-hover:text-white transition-colors" />
                      </motion.button>
                    ))}
                  </motion.div>

                  {/* Biometric Option */}
                  <motion.div
                    variants={fadeInUp}
                    className="text-center"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 text-sm text-[#4f46e5] hover:text-[#00f2fe] transition-colors"
                    >
                      <Fingerprint className="w-4 h-4" />
                      <span>Use biometric authentication</span>
                    </motion.button>
                  </motion.div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Login;