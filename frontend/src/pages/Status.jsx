import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Search,
  Filter,
  Download,
  Eye,
  MoreVertical,
  Calendar,
  FileText,
  Building,
  User,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle
} from 'lucide-react';
import StatusBadge from '../components/StatusBadge';
import GradientText from '../components/GradientText';
import { pageTransition, fadeInUp, staggerContainer } from '../animations/variants';

const Status = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const applications = [
    {
      id: 'APP-2024-001',
      type: 'Building Permit',
      applicant: 'John Smith',
      project: 'Residential Renovation',
      submitted: '2024-01-15',
      status: 'approved',
      progress: 100
    },
    {
      id: 'APP-2024-002',
      type: 'Business License',
      applicant: 'Sarah Johnson',
      project: 'Restaurant Opening',
      submitted: '2024-01-18',
      status: 'processing',
      progress: 65
    },
    {
      id: 'APP-2024-003',
      type: 'Environmental Permit',
      applicant: 'Mike Chen',
      project: 'Solar Panel Installation',
      submitted: '2024-01-20',
      status: 'pending',
      progress: 30
    },
    {
      id: 'APP-2024-004',
      type: 'Zoning Permit',
      applicant: 'Emily Brown',
      project: 'Commercial Development',
      submitted: '2024-01-22',
      status: 'in_review',
      progress: 45
    },
    {
      id: 'APP-2024-005',
      type: 'Building Permit',
      applicant: 'David Wilson',
      project: 'Office Renovation',
      submitted: '2024-01-23',
      status: 'rejected',
      progress: 100
    },
  ];

  const stats = [
    { label: 'Total Applications', value: '156', icon: FileText, color: 'blue' },
    { label: 'Approved', value: '89', icon: CheckCircle, color: 'green' },
    { label: 'In Progress', value: '42', icon: Clock, color: 'yellow' },
    { label: 'Rejected', value: '25', icon: XCircle, color: 'red' },
  ];

  const filteredApplications = applications.filter(app => {
    const matchesSearch = 
      app.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.applicant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.project.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || app.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    const colors = {
      approved: 'text-green-400',
      processing: 'text-blue-400',
      pending: 'text-yellow-400',
      in_review: 'text-purple-400',
      rejected: 'text-red-400'
    };
    return colors[status] || 'text-gray-400';
  };

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
        <motion.div variants={fadeInUp} className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Application{' '}
            <GradientText>
              Status
            </GradientText>
          </h1>
          <p className="text-gray-400">
            Track and manage your permit applications
          </p>
        </motion.div>

        {/* Stats */}
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
              className="glass-card p-6 rounded-2xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl bg-${stat.color}-500/20 p-2.5`}>
                  <stat.icon className={`w-full h-full text-${stat.color}-400`} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Search and Filters */}
        <motion.div variants={fadeInUp} className="mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by ID, applicant, or project..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all"
              >
                <option value="all">All Status</option>
                <option value="approved">Approved</option>
                <option value="processing">Processing</option>
                <option value="pending">Pending</option>
                <option value="in_review">In Review</option>
                <option value="rejected">Rejected</option>
              </select>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                <span>More Filters</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg text-white flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Export</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Applications Table */}
        <motion.div
          variants={fadeInUp}
          className="glass-card rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Application ID</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Type</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Applicant</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Project</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Submitted</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Progress</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredApplications.map((app, index) => (
                  <motion.tr
                    key={app.id}
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="p-4">
                      <span className="font-mono text-sm text-accent-400">{app.id}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-300">{app.type}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-300">{app.applicant}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-gray-300">{app.project}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-300">{app.submitted}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <StatusBadge status={app.status} size="sm" />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${app.progress}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className={`h-full bg-gradient-to-r from-primary-500 to-accent-500`}
                          />
                        </div>
                        <span className="text-xs text-gray-400">{app.progress}%</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                        >
                          <Eye className="w-4 h-4 text-gray-400" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                        >
                          <MoreVertical className="w-4 h-4 text-gray-400" />
                        </motion.button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 border-t border-white/10 flex items-center justify-between">
            <p className="text-sm text-gray-400">
              Showing 1-5 of 156 applications
            </p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((page) => (
                <motion.button
                  key={page}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-8 h-8 rounded-lg ${
                    page === 1
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {page}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Status;