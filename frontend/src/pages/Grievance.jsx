import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  AlertCircle,
  MessageSquare,
  Send,
  Paperclip,
  Star,
  ThumbsUp,
  ThumbsDown,
  Clock,
  CheckCircle,
  XCircle,
  Filter,
  Search
} from 'lucide-react';
import StatusBadge from '../components/StatusBadge';
import GradientText from '../components/GradientText';
import { pageTransition, fadeInUp, staggerContainer } from '../animations/variants';

const Grievance = () => {
  const [activeTab, setActiveTab] = useState('submit');
  const [formData, setFormData] = useState({
    category: '',
    subject: '',
    description: '',
    priority: 'medium',
    department: '',
    anonymous: false
  });

  const categories = [
    'Infrastructure',
    'Public Services',
    'Taxation',
    'Licensing',
    'Environment',
    'Healthcare',
    'Education',
    'Transportation'
  ];

  const departments = [
    'Public Works',
    'Revenue Department',
    'Health Services',
    'Education Board',
    'Transport Authority',
    'Environmental Agency'
  ];

  const recentGrievances = [
    {
      id: 'GRV-2024-001',
      subject: 'Road maintenance required in downtown area',
      category: 'Infrastructure',
      status: 'in_progress',
      submitted: '2 hours ago',
      priority: 'high',
      updates: 3
    },
    {
      id: 'GRV-2024-002',
      subject: 'Tax calculation discrepancy',
      category: 'Taxation',
      status: 'pending',
      submitted: '1 day ago',
      priority: 'medium',
      updates: 1
    },
    {
      id: 'GRV-2024-003',
      subject: 'Hospital appointment system issues',
      category: 'Healthcare',
      status: 'resolved',
      submitted: '3 days ago',
      priority: 'high',
      updates: 5
    },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Grievance submitted:', formData);
    // Handle submission
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
        <motion.div variants={fadeInUp} className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Grievance{' '}
            <GradientText>
              Redressal
            </GradientText>
          </h1>
          <p className="text-gray-400">
            Submit and track your complaints with AI-powered resolution
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div variants={fadeInUp} className="flex gap-4 mb-8">
          {['submit', 'track', 'history'].map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg capitalize ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {tab} Grievance
            </motion.button>
          ))}
        </motion.div>

        {/* Submit Grievance Form */}
        {activeTab === 'submit' && (
          <motion.form
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Category <span className="text-red-400">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all"
                >
                  <option value="">Select a category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Subject <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all"
                  placeholder="Brief summary of your grievance"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Detailed Description <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all"
                  placeholder="Please provide detailed information about your grievance..."
                />
              </div>

              {/* Priority and Department */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Priority Level
                  </label>
                  <div className="flex gap-3">
                    {['low', 'medium', 'high'].map((priority) => (
                      <label key={priority} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="priority"
                          value={priority}
                          checked={formData.priority === priority}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-accent-500"
                        />
                        <span className="text-sm capitalize text-gray-300">{priority}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Assign to Department
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all"
                  >
                    <option value="">Auto-assign (Recommended)</option>
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Supporting Documents
                </label>
                <div className="relative">
                  <input
                    type="file"
                    multiple
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="border-2 border-dashed border-white/10 rounded-xl p-6 text-center hover:border-accent-500/50 transition-colors">
                    <Paperclip className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Drop files here or click to upload</p>
                    <p className="text-xs text-gray-500 mt-1">PDF, Images, DOC (Max 20MB)</p>
                  </div>
                </div>
              </div>

              {/* Anonymous Option */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="anonymous"
                  id="anonymous"
                  checked={formData.anonymous}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-accent-500 rounded"
                />
                <label htmlFor="anonymous" className="text-sm text-gray-300">
                  Submit anonymously (personal information will be hidden)
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg text-white font-medium flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Submit Grievance
              </motion.button>

              {/* AI Notice */}
              <div className="flex items-start gap-3 p-4 bg-primary-500/10 border border-primary-500/20 rounded-xl">
                <MessageSquare className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-primary-400 font-medium">AI-Powered Processing</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Your grievance will be analyzed by our AI system for faster routing and resolution.
                    You'll receive updates via email and SMS.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.form>
        )}

        {/* Track Grievance */}
        {activeTab === 'track' && (
          <motion.div
            variants={fadeInUp}
            className="glass-card rounded-2xl p-8 max-w-3xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-2">Track Your Grievance</h2>
              <p className="text-gray-400">Enter your grievance ID to check status</p>
            </div>

            <div className="flex gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter Grievance ID (e.g., GRV-2024-001)"
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg text-white"
              >
                Track
              </motion.button>
            </div>

            {/* Sample Track Result */}
            <div className="p-6 bg-white/5 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-400">Grievance ID</p>
                  <p className="font-mono text-accent-400">GRV-2024-001</p>
                </div>
                <StatusBadge status="in_progress" size="md" />
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Subject</p>
                  <p className="text-white">Road maintenance required in downtown area</p>
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-3">Progress</p>
                  <div className="relative">
                    <div className="flex justify-between mb-2">
                      {['Submitted', 'Under Review', 'In Progress', 'Resolved'].map((step, i) => (
                        <span key={step} className="text-xs text-gray-400">{step}</span>
                      ))}
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '60%' }}
                        transition={{ duration: 1 }}
                        className="h-full bg-gradient-to-r from-primary-500 to-accent-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Submitted</p>
                    <p className="text-sm text-white">2 hours ago</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Department</p>
                    <p className="text-sm text-white">Public Works</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* History */}
        {activeTab === 'history' && (
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-4"
          >
            {/* Filters */}
            <motion.div variants={fadeInUp} className="flex gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search grievances..."
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all"
                />
              </div>
              <select className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all">
                <option>All Status</option>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Filter className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Grievance List */}
            {recentGrievances.map((grievance, index) => (
              <motion.div
                key={grievance.id}
                variants={fadeInUp}
                className="glass-card rounded-2xl p-6 hover:bg-white/5 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-sm text-accent-400">{grievance.id}</span>
                      <StatusBadge status={grievance.status} size="sm" />
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        grievance.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                        grievance.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {grievance.priority} priority
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-white mb-1">{grievance.subject}</h3>
                    <p className="text-sm text-gray-400">Category: {grievance.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">{grievance.submitted}</p>
                    <p className="text-xs text-gray-500 mt-1">{grievance.updates} updates</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button className="text-sm text-accent-400 hover:text-accent-300 transition-colors">
                      View Details
                    </button>
                    <button className="text-sm text-gray-400 hover:text-white transition-colors">
                      Add Update
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-1 hover:bg-white/10 rounded-lg transition-colors">
                      <ThumbsUp className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="p-1 hover:bg-white/10 rounded-lg transition-colors">
                      <ThumbsDown className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Satisfaction Survey */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 p-6 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl border border-accent-500/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 p-2.5 flex-shrink-0">
                  <Star className="w-full h-full text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">How was your experience?</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Help us improve our grievance redressal system by rating your experience.
                  </p>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <motion.button
                        key={rating}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                      >
                        {rating}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Grievance;