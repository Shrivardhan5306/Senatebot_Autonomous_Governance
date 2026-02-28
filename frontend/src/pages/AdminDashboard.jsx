import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Users,
  FileText,
  AlertCircle,
  Settings,
  Shield,
  Activity,
  BarChart3,
  Clock,
  CheckCircle,
  XCircle,
  TrendingUp,
  TrendingDown,
  MoreVertical,
  Download,
  Filter,
  RefreshCw
} from 'lucide-react';
import StatusBadge from '../components/StatusBadge';
import GradientText from '../components/GradientText';
import { pageTransition, fadeInUp, staggerContainer } from '../animations/variants';

const AdminDashboard = () => {
  const [timeRange, setTimeRange] = useState('today');

  const stats = [
    {
      title: 'Total Users',
      value: '12,847',
      change: '+12.3%',
      icon: Users,
      trend: 'up',
      color: 'blue'
    },
    {
      title: 'Applications',
      value: '3,421',
      change: '+8.1%',
      icon: FileText,
      trend: 'up',
      color: 'green'
    },
    {
      title: 'Open Grievances',
      value: '156',
      change: '-5.4%',
      icon: AlertCircle,
      trend: 'down',
      color: 'yellow'
    },
    {
      title: 'System Health',
      value: '98.5%',
      change: '+0.5%',
      icon: Activity,
      trend: 'up',
      color: 'purple'
    }
  ];

  const recentActivities = [
    { id: 1, user: 'John Smith', action: 'Submitted permit application', time: '2 min ago', status: 'pending' },
    { id: 2, user: 'Sarah Johnson', action: 'Filed new grievance', time: '15 min ago', status: 'processing' },
    { id: 3, user: 'Mike Chen', action: 'Approved permit #APP-2024-002', time: '1 hour ago', status: 'approved' },
    { id: 4, user: 'Emily Brown', action: 'Escalated grievance to supervisor', time: '2 hours ago', status: 'escalated' },
    { id: 5, user: 'David Wilson', action: 'Rejected application #APP-2024-005', time: '3 hours ago', status: 'rejected' },
  ];

  const systemMetrics = [
    { label: 'AI Response Time', value: '1.2s', target: '< 2s', status: 'good' },
    { label: 'Processing Queue', value: '23', target: '< 50', status: 'good' },
    { label: 'Error Rate', value: '0.3%', target: '< 1%', status: 'good' },
    { label: 'API Usage', value: '78%', target: '< 90%', status: 'warning' },
  ];

  const departmentPerformance = [
    { department: 'Public Works', efficiency: '94%', pending: '12', resolved: '156' },
    { department: 'Revenue', efficiency: '87%', pending: '23', resolved: '89' },
    { department: 'Health Services', efficiency: '92%', pending: '8', resolved: '67' },
    { department: 'Transport', efficiency: '78%', pending: '15', resolved: '45' },
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
        {/* Header */}
        <motion.div variants={fadeInUp} className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              Admin{' '}
              <GradientText>
                Dashboard
              </GradientText>
            </h1>
            <p className="text-gray-400">
              Monitor and manage your governance platform
            </p>
          </div>
          <div className="flex gap-3">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all"
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
            >
              <RefreshCw className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg text-white flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Export</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Grid */}
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
              <motion.div
                className={`absolute inset-0 bg-${stat.color}-500/10 opacity-0 group-hover:opacity-100`}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-${stat.color}-500/20 p-2.5`}>
                    <stat.icon className={`w-full h-full text-${stat.color}-400`} />
                  </div>
                  <div className={`flex items-center gap-1 ${
                    stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stat.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span className="text-sm">{stat.change}</span>
                  </div>
                </div>
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* System Health */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-2 glass-card rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">System Health</h2>
              <Shield className="w-5 h-5 text-accent-400" />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {systemMetrics.map((metric, index) => (
                <div key={index} className="p-4 bg-white/5 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">{metric.label}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      metric.status === 'good' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {metric.status}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-white mb-1">{metric.value}</p>
                  <p className="text-xs text-gray-500">Target: {metric.target}</p>
                </div>
              ))}
            </div>

            {/* CPU/Memory Usage */}
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">CPU Usage</span>
                  <span className="text-sm text-white">45%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '45%' }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-primary-500 to-accent-500"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Memory Usage</span>
                  <span className="text-sm text-white">62%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '62%' }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-primary-500 to-accent-500"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Storage</span>
                  <span className="text-sm text-white">78%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '78%' }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="h-full bg-gradient-to-r from-yellow-500 to-orange-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            variants={fadeInUp}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Recent Activity</h2>
              <Clock className="w-5 h-5 text-accent-400" />
            </div>

            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-3 bg-white/5 rounded-xl"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white mb-1">{activity.user}</p>
                    <p className="text-xs text-gray-400 mb-2">{activity.action}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{activity.time}</span>
                      <StatusBadge status={activity.status} size="sm" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ x: 5 }}
              className="mt-4 text-sm text-accent-400 hover:text-accent-300 transition-colors flex items-center gap-1"
            >
              View all activity
              <BarChart3 className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>

        {/* Department Performance */}
        <motion.div
          variants={fadeInUp}
          className="mt-6 glass-card rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Department Performance</h2>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Filter className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
              >
                <MoreVertical className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Department</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Efficiency</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Pending</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Resolved</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {departmentPerformance.map((dept, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="p-4 text-sm text-white">{dept.department}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: dept.efficiency }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                          />
                        </div>
                        <span className="text-sm text-white">{dept.efficiency}</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-yellow-400">{dept.pending}</td>
                    <td className="p-4 text-sm text-green-400">{dept.resolved}</td>
                    <td className="p-4">
                      <StatusBadge 
                        status={parseInt(dept.efficiency) > 90 ? 'active' : 'pending'} 
                        size="sm" 
                      />
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          variants={fadeInUp}
          className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Generate Report', icon: FileText, color: 'blue' },
            { label: 'System Backup', icon: Shield, color: 'purple' },
            { label: 'User Management', icon: Users, color: 'green' },
            { label: 'AI Training', icon: Activity, color: 'accent' },
          ].map((action, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-4 bg-${action.color}-500/10 border border-${action.color}-500/20 rounded-xl hover:bg-${action.color}-500/20 transition-all flex items-center justify-between group`}
            >
              <span className="text-sm font-medium text-white">{action.label}</span>
              <action.icon className={`w-5 h-5 text-${action.color}-400 group-hover:rotate-12 transition-transform`} />
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;