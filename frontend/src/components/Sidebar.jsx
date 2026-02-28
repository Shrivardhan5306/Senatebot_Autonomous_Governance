import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import {
  LayoutDashboard,
  FileText,
  Clock,
  AlertCircle,
  Shield,
  Settings,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  MessageSquare,
  HelpCircle,
  Database,
  GitBranch,
  Activity,
  Cpu,
  Globe,
  Lock,
  Users,
  Zap
} from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard', badge: null, color: 'from-blue-500 to-cyan-500' },
    { path: '/permit', icon: FileText, label: 'Permits', badge: '12', color: 'from-green-500 to-emerald-500' },
    { path: '/status', icon: Clock, label: 'Status', badge: '3', color: 'from-yellow-500 to-orange-500' },
    { path: '/grievance', icon: AlertCircle, label: 'Grievances', badge: '8', color: 'from-red-500 to-pink-500' },
    { path: '/admin', icon: Shield, label: 'Admin', badge: null, color: 'from-purple-500 to-indigo-500' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics', badge: 'New', color: 'from-cyan-500 to-blue-500' },
    { path: '/messages', icon: MessageSquare, label: 'Messages', badge: '5', color: 'from-pink-500 to-rose-500' },
  ];

  const bottomMenuItems = [
    { path: '/help', icon: HelpCircle, label: 'Help', color: 'from-gray-500 to-slate-500' },
    { path: '/settings', icon: Settings, label: 'Settings', color: 'from-gray-500 to-slate-500' },
  ];

  const systemStats = [
    { icon: Cpu, label: 'CPU', value: '45%', color: 'blue' },
    { icon: Database, label: 'Memory', value: '62%', color: 'purple' },
    { icon: Activity, label: 'Network', value: '28%', color: 'green' },
  ];

  return (
    <motion.aside
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className="fixed left-0 top-0 h-screen z-40"
    >
      {/* Main sidebar */}
      <motion.div
        animate={{
          width: isOpen ? 280 : 80,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
        className="relative h-full"
      >
        {/* Glass background */}
        <div className="absolute inset-0 bg-[#030014]/90 backdrop-blur-xl border-r border-white/10" />
        
        {/* Animated gradient border */}
        <motion.div
          className="absolute right-0 top-0 bottom-0 w-[1px]"
          animate={{
            background: [
              'linear-gradient(180deg, transparent, #4f46e5, #00f2fe, #7c3aed, transparent)',
              'linear-gradient(180deg, transparent, #7c3aed, #4f46e5, #00f2fe, transparent)',
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Toggle button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleSidebar}
          className="absolute -right-3 top-24 w-6 h-6 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#00f2fe] flex items-center justify-center z-10 shadow-lg"
        >
          {isOpen ? (
            <ChevronLeft className="w-4 h-4 text-white" />
          ) : (
            <ChevronRight className="w-4 h-4 text-white" />
          )}
        </motion.button>

        {/* Content */}
        <div className="relative h-full flex flex-col pt-20">
          {/* Logo area */}
          <div className="px-4 mb-6">
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex items-center gap-2 px-2"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#4f46e5] to-[#00f2fe] p-1.5">
                    <Shield className="w-full h-full text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">SenateBot</p>
                    <p className="text-xs text-gray-500">v2.0.1</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Menu items */}
          <div className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {menuItems.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {({ isActive }) => (
                  <motion.div
                    className="relative"
                    animate={{
                      x: hoveredItem === index && isOpen ? 5 : 0,
                    }}
                  >
                    <div
                      className={`
                        relative flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200
                        ${isActive 
                          ? 'text-white' 
                          : 'text-gray-400 hover:text-white'
                        }
                      `}
                    >
                      {/* Active background */}
                      {isActive && (
                        <motion.div
                          layoutId="activeBackground"
                          className="absolute inset-0 bg-gradient-to-r from-[#4f46e5]/20 to-[#00f2fe]/20 rounded-xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}

                      {/* Icon container */}
                      <div className="relative z-10">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.color} p-1.5 relative overflow-hidden`}
                        >
                          <item.icon className="w-full h-full text-white" />
                          
                          {/* Shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-white"
                            initial={{ x: '-100%' }}
                            animate={{ x: hoveredItem === index ? '100%' : '-100%' }}
                            transition={{ duration: 0.5 }}
                            style={{ opacity: 0.3 }}
                          />
                        </motion.div>

                        {/* Icon glow */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-lg blur-xl -z-10`}
                          animate={{
                            scale: isActive ? 1.2 : 1,
                            opacity: isActive ? 0.5 : 0
                          }}
                        />
                      </div>

                      {/* Label */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="text-sm font-medium z-10"
                          >
                            {item.label}
                          </motion.span>
                        )}
                      </AnimatePresence>

                      {/* Badge */}
                      {item.badge && isOpen && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className={`ml-auto px-2 py-0.5 rounded-full text-xs bg-gradient-to-r ${item.color} text-white z-10`}
                        >
                          {item.badge}
                        </motion.div>
                      )}

                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute left-0 w-1 h-8 bg-gradient-to-b from-[#4f46e5] to-[#00f2fe] rounded-r-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                  </motion.div>
                )}
              </NavLink>
            ))}
          </div>

          {/* System stats */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mx-3 mb-4 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <p className="text-xs text-gray-500 mb-3">SYSTEM HEALTH</p>
                <div className="space-y-3">
                  {systemStats.map((stat, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <div className="flex items-center gap-1">
                          <stat.icon className="w-3 h-3 text-gray-500" />
                          <span className="text-gray-400">{stat.label}</span>
                        </div>
                        <span className="text-white">{stat.value}</span>
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: stat.value }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className={`h-full bg-gradient-to-r ${
                            stat.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                            stat.color === 'purple' ? 'from-purple-500 to-pink-500' :
                            'from-green-500 to-emerald-500'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom menu */}
          <div className="px-3 py-4 border-t border-white/10">
            {bottomMenuItems.map((item) => (
              <NavLink key={item.path} to={item.path}>
                {({ isActive }) => (
                  <div
                    className={`
                      flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200
                      ${isActive ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'}
                    `}
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.color} p-1.5`}>
                      <item.icon className="w-full h-full text-white" />
                    </div>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          className="text-sm font-medium"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </NavLink>
            ))}
          </div>

          {/* User presence */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mx-3 mb-6 p-3 rounded-xl bg-gradient-to-r from-[#4f46e5]/20 to-[#00f2fe]/20 border border-[#4f46e5]/30"
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#4f46e5] to-[#00f2fe] flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-[#030014]"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">24 online</p>
                    <p className="text-xs text-gray-400">2 in queue</p>
                  </div>
                  <Zap className="w-4 h-4 text-yellow-400" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.aside>
  );
};

export default Sidebar;