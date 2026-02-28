import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FileText, 
  Clock, 
  AlertCircle, 
  Users, 
  TrendingUp,
  Shield,
  Activity,
  Award,
  Zap,
  Globe,
  Database,
  Cpu,
  Network,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  Bot,
  Brain,
  LineChart,
  PieChart
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import StatusBadge from '../components/StatusBadge';
import GradientText from '../components/GradientText';
import { pageTransition, fadeInUp, staggerContainer } from '../animations/variants';

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState('24h');

  const stats = [
    { 
      icon: FileText, 
      label: 'Active Permits', 
      value: '1,234',
      change: '+12.3%',
      trend: 'up',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Clock, 
      label: 'Pending Reviews', 
      value: '56',
      change: '-5.2%',
      trend: 'down',
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      icon: AlertCircle, 
      label: 'Open Grievances', 
      value: '23',
      change: '-8.7%',
      trend: 'down',
      color: 'from-red-500 to-pink-500'
    },
    { 
      icon: Users, 
      label: 'Active Users', 
      value: '8,947',
      change: '+23.1%',
      trend: 'up',
      color: 'from-purple-500 to-indigo-500'
    },
  ];

  const systemMetrics = [
    { icon: Cpu, label: 'AI Processing', value: '1.2s', progress: 85, color: 'blue' },
    { icon: Database, label: 'Storage', value: '78%', progress: 78, color: 'purple' },
    { icon: Network, label: 'Network', value: '45 Mbps', progress: 45, color: 'green' },
    { icon: Brain, label: 'Neural Load', value: '62%', progress: 62, color: 'orange' },
  ];

  const recentActivities = [
    { id: 1, action: 'Permit #1234 approved', time: '2 min ago', status: 'approved', user: 'John Smith', department: 'Planning' },
    { id: 2, action: 'New grievance filed', time: '15 min ago', status: 'pending', user: 'Sarah Johnson', department: 'Public Works' },
    { id: 3, action: 'Application in review', time: '1 hour ago', status: 'processing', user: 'Mike Chen', department: 'Revenue' },
    { id: 4, action: 'Document verification', time: '2 hours ago', status: 'in_review', user: 'Emily Brown', department: 'Health' },
  ];

  const aiInsights = [
    { type: 'prediction', text: 'Permit applications expected to increase by 23% next week', confidence: 94 },
    { type: 'alert', text: 'Unusual activity detected in grievance system', confidence: 87 },
    { type: 'recommendation', text: 'Consider allocating more resources to Public Works department', confidence: 91 },
  ];

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen pt-24 px-6 pb-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with AI greeting */}
        <motion.div 
          variants={fadeInUp}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#4f46e5] to-[#00f2fe] p-1.5"
              >
                <Bot className="w-full h-full text-white" />
              </motion.div>
              <h1 className="text-4xl font-bold">
                Welcome back,{' '}
                <GradientText>
                  Admin
                </GradientText>
              </h1>
            </div>
            <p className="text-gray-400 ml-11">
              AI-powered insights show 3 urgent items requiring your attention
            </p>
          </div>

          {/* Time range selector */}
          <div className="flex gap-2 p-1 bg-white/5 rounded-xl border border-white/10">
            {['24h', '7d', '30d', '90d'].map((range) => (
              <motion.button
                key={range}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTimeframe(range)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  timeframe === range
                    ? 'bg-gradient-to-r from-[#4f46e5] to-[#00f2fe] text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {range}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Stats Grid with animated backgrounds */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass-card p-6 rounded-2xl relative overflow-hidden group"
            >
              {/* Animated background gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10`}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Particle effect */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  initial={{
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                  }}
                  animate={{
                    y: [null, -30, 30],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} p-2.5`}
                  >
                    <stat.icon className="w-full h-full text-white" />
                  </motion.div>
                  <div className={`flex items-center gap-1 ${
                    stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stat.trend === 'up' ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4" />
                    )}
                    <span className="text-sm font-medium">{stat.change}</span>
                  </div>
                </div>
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>

              {/* Sparkline (simulated) */}
              <div className="absolute bottom-0 left-0 right-0 h-12 opacity-20">
                <svg width="100%" height="100%" viewBox="0 0 100 30">
                  <motion.path
                    d="M0,15 Q10,5 20,20 T40,10 T60,25 T80,5 T100,15"
                    stroke={`url(#gradient-${index})`}
                    fill="none"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: index * 0.1 }}
                  />
                  <defs>
                    <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4f46e5" />
                      <stop offset="100%" stopColor="#00f2fe" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* System Metrics */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {systemMetrics.map((metric, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              className="glass-card p-4 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r from-${metric.color}-500 to-${metric.color}-600 p-1.5`}>
                  <metric.icon className="w-full h-full text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">{metric.label}</p>
                  <p className="text-sm font-medium">{metric.value}</p>
                </div>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.progress}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className={`h-full bg-gradient-to-r from-${metric.color}-500 to-${metric.color}-600`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Services */}
          <div className="lg:col-span-2">
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-between mb-4"
            >
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#4f46e5]" />
                Quick Services
              </h2>
              <motion.button
                whileHover={{ x: 5 }}
                className="text-sm text-[#4f46e5] hover:text-[#00f2fe] transition-colors"
              >
                View All →
              </motion.button>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                {
                  icon: Shield,
                  title: 'Permit Management',
                  description: 'AI-powered permit processing with real-time tracking',
                  status: 'active',
                  stats: { 'Applications': '1.2k', 'Approved': '85%' },
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: AlertCircle,
                  title: 'Grievance Redressal',
                  description: 'Smart grievance resolution with predictive analytics',
                  status: 'pending',
                  stats: { 'Open': '23', 'Resolved': '156' },
                  color: 'from-red-500 to-pink-500'
                },
                {
                  icon: Award,
                  title: 'Digital Certificates',
                  description: 'Blockchain-verified certificates and documents',
                  status: 'active',
                  stats: { 'Issued': '3.4k', 'Verified': '2.1k' },
                  color: 'from-green-500 to-emerald-500'
                },
              ].map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </motion.div>
          </div>

          {/* AI Insights */}
          <div>
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-between mb-4"
            >
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Brain className="w-5 h-5 text-[#4f46e5]" />
                AI Insights
              </h2>
              <StatusBadge status="active" size="sm" label="Live" />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-4"
            >
              {aiInsights.map((insight, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="glass-card p-4 rounded-xl relative overflow-hidden group"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${
                      insight.type === 'prediction' ? 'from-blue-500 to-cyan-500' :
                      insight.type === 'alert' ? 'from-red-500 to-pink-500' :
                      'from-purple-500 to-indigo-500'
                    } p-1.5`}>
                      {insight.type === 'prediction' ? (
                        <LineChart className="w-full h-full text-white" />
                      ) : insight.type === 'alert' ? (
                        <AlertCircle className="w-full h-full text-white" />
                      ) : (
                        <PieChart className="w-full h-full text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-300 mb-2">{insight.text}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${insight.confidence}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="h-full bg-gradient-to-r from-[#4f46e5] to-[#00f2fe]"
                          />
                        </div>
                        <span className="text-xs text-gray-400">{insight.confidence}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(79, 70, 229, 0)",
                        "0 0 40px rgba(79, 70, 229, 0.2)",
                        "0 0 20px rgba(79, 70, 229, 0)",
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Recent Activity with Timeline */}
        <motion.div
          variants={fadeInUp}
          className="mt-8 glass-card rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Activity className="w-5 h-5 text-[#4f46e5]" />
              Recent Activity
            </h2>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-sm text-[#4f46e5] hover:text-[#00f2fe] transition-colors"
              >
                Export Log
              </motion.button>
            </div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4f46e5] via-[#00f2fe] to-transparent" />

            {recentActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-start gap-4 mb-6 last:mb-0"
              >
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  className={`w-3 h-3 rounded-full mt-1.5 ${
                    activity.status === 'approved' ? 'bg-green-400' :
                    activity.status === 'pending' ? 'bg-yellow-400' :
                    activity.status === 'processing' ? 'bg-blue-400' :
                    'bg-purple-400'
                  }`}
                />

                <div className="flex-1 glass-panel p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-white">{activity.action}</p>
                    <StatusBadge status={activity.status} size="sm" />
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">{activity.user}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-400">{activity.department}</span>
                    </div>
                    <span className="text-gray-500">{activity.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Real-time Updates */}
        <motion.div
          variants={fadeInUp}
          className="mt-8 flex items-center justify-between p-4 bg-gradient-to-r from-[#4f46e5]/20 to-[#00f2fe]/20 rounded-xl border border-[#4f46e5]/30"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-green-400 rounded-full"
            />
            <span className="text-sm">Live updates enabled - </span>
            <span className="text-xs text-gray-400">Last sync: just now</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1 bg-white/5 rounded-lg text-xs hover:bg-white/10 transition-colors"
          >
            Refresh
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;