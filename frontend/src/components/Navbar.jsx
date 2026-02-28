import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Bell, 
  Search, 
  User, 
  Settings, 
  Menu,
  ChevronDown,
  LogOut,
  Sparkles,
  Zap,
  Moon,
  Sun,
  Shield
} from 'lucide-react';
import { useState } from 'react';
import GradientText from './GradientText';

const Navbar = ({ toggleSidebar }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchFocused, setSearchFocused] = useState(false);

  const notifications = [
    { id: 1, title: 'New permit application', time: '2 min ago', read: false, type: 'permit' },
    { id: 2, title: 'Grievance status updated', time: '15 min ago', read: false, type: 'grievance' },
    { id: 3, title: 'System maintenance', time: '1 hour ago', read: true, type: 'system' },
    { id: 4, title: 'AI processing complete', time: '2 hours ago', read: true, type: 'ai' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Glass background */}
      <div className="absolute inset-0 bg-[#030014]/80 backdrop-blur-xl border-b border-white/10" />
      
      {/* Animated gradient line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        animate={{
          background: [
            'linear-gradient(90deg, transparent, #4f46e5, #00f2fe, #7c3aed, transparent)',
            'linear-gradient(90deg, transparent, #7c3aed, #4f46e5, #00f2fe, transparent)',
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="relative px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Left section */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleSidebar}
              className="relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group"
            >
              <Menu className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4f46e5] to-[#00f2fe] opacity-0 group-hover:opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.button>
            
            <Link to="/" className="flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#4f46e5] to-[#00f2fe] p-1.5"
              >
                <Shield className="w-full h-full text-white" />
              </motion.div>
              <GradientText className="text-xl font-bold">
                SenateBot
              </GradientText>
            </Link>

            {/* Status badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="hidden md:flex items-center gap-1 px-2 py-1 bg-green-500/10 border border-green-500/20 rounded-full"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-400 rounded-full"
              />
              <span className="text-xs text-green-400">All Systems Operational</span>
            </motion.div>
          </div>

          {/* Search bar */}
          <motion.div
            animate={{
              width: searchFocused ? '400px' : '300px',
            }}
            transition={{ type: "spring" }}
            className="hidden md:block relative"
          >
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-[#4f46e5] transition-colors" />
              <input
                type="text"
                placeholder="Search governance AI..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/20 transition-all text-sm"
              />
              
              {/* Search suggestions */}
              <AnimatePresence>
                {searchFocused && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 right-0 mt-2 glass-panel rounded-xl overflow-hidden"
                  >
                    {['Permit applications', 'Grievance status', 'Department contacts'].map((suggestion, i) => (
                      <motion.div
                        key={i}
                        initial={{ x: -20 }}
                        animate={{ x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="px-4 py-2 hover:bg-white/5 cursor-pointer flex items-center gap-2"
                      >
                        <Search className="w-3 h-3 text-gray-500" />
                        <span className="text-sm">{suggestion}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Search shortcut */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
              <kbd className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-xs text-gray-400">⌘</kbd>
              <kbd className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-xs text-gray-400">K</kbd>
            </div>
          </motion.div>

          {/* Right section */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group"
            >
              {isDarkMode ? (
                <Moon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              ) : (
                <Sun className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              )}
            </motion.button>

            {/* AI Assistant */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#4f46e5]/20 to-[#00f2fe]/20 border border-[#4f46e5]/30 rounded-xl group"
            >
              <Sparkles className="w-4 h-4 text-[#4f46e5] group-hover:text-[#00f2fe] transition-colors" />
              <span className="text-sm">AI Assistant</span>
              <Zap className="w-3 h-3 text-yellow-400" />
            </motion.button>

            {/* Notifications */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group"
              >
                <Bell className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                
                {/* Notification badge */}
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-xs flex items-center justify-center text-white"
                >
                  3
                </motion.span>

                {/* Pulse ring */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(239, 68, 68, 0)",
                      "0 0 20px rgba(239, 68, 68, 0.5)",
                      "0 0 0px rgba(239, 68, 68, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.button>

              {/* Notifications dropdown */}
              <AnimatePresence>
                {isNotificationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-96 glass-panel rounded-2xl overflow-hidden z-50"
                  >
                    <div className="p-4 border-b border-white/10 flex items-center justify-between">
                      <h3 className="font-semibold">Notifications</h3>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="text-xs text-[#4f46e5] hover:text-[#00f2fe] transition-colors"
                      >
                        Mark all as read
                      </motion.button>
                    </div>

                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notif, i) => (
                        <motion.div
                          key={notif.id}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className={`p-4 border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors ${
                            !notif.read ? 'bg-[#4f46e5]/5' : ''
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${
                              notif.type === 'permit' ? 'from-blue-500 to-cyan-500' :
                              notif.type === 'grievance' ? 'from-red-500 to-pink-500' :
                              'from-purple-500 to-indigo-500'
                            } p-1.5`}>
                              <Bell className="w-full h-full text-white" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-white mb-1">{notif.title}</p>
                              <p className="text-xs text-gray-500">{notif.time}</p>
                            </div>
                            {!notif.read && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-2 h-2 bg-[#4f46e5] rounded-full"
                              />
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="p-4 text-center border-t border-white/10">
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="text-sm text-[#4f46e5] hover:text-[#00f2fe] transition-colors"
                      >
                        View all notifications
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Profile */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 p-1 pr-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#4f46e5] to-[#00f2fe] flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-xs text-gray-400">Welcome back</p>
                  <p className="text-sm font-medium">John Doe</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </motion.button>

              {/* Profile dropdown */}
              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-64 glass-panel rounded-2xl overflow-hidden z-50"
                  >
                    {/* User info */}
                    <div className="p-4 bg-gradient-to-r from-[#4f46e5]/20 to-[#00f2fe]/20">
                      <p className="font-semibold">John Doe</p>
                      <p className="text-xs text-gray-400">john.doe@senate.gov</p>
                      <div className="mt-2 flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        <span className="text-xs text-green-400">Online</span>
                      </div>
                    </div>

                    {/* Menu items */}
                    <div className="p-2">
                      {[
                        { icon: User, label: 'Profile', shortcut: '⌘P' },
                        { icon: Settings, label: 'Settings', shortcut: '⌘S' },
                        { icon: Shield, label: 'Security', shortcut: '⌘E' },
                        { icon: LogOut, label: 'Logout', shortcut: '⌘L' },
                      ].map((item, i) => (
                        <motion.button
                          key={i}
                          whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.05)' }}
                          className="flex items-center justify-between w-full p-2 rounded-lg text-sm group"
                        >
                          <div className="flex items-center gap-2">
                            <item.icon className="w-4 h-4 text-gray-400 group-hover:text-[#4f46e5] transition-colors" />
                            <span>{item.label}</span>
                          </div>
                          <span className="text-xs text-gray-600">{item.shortcut}</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;