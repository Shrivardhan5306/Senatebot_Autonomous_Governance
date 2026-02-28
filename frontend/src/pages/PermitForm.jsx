import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FileText, 
  Upload, 
  CheckCircle, 
  AlertCircle,
  ArrowRight,
  Building,
  MapPin,
  Calendar,
  Mail,
  Phone,
  User
} from 'lucide-react';
import GradientText from '../components/GradientText';
import { pageTransition, fadeInUp, staggerContainer } from '../animations/variants';

const PermitForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    permitType: '',
    projectName: '',
    description: '',
    address: '',
    city: '',
    zipCode: '',
    startDate: '',
    endDate: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    documents: []
  });

  const steps = [
    { number: 1, title: 'Permit Type', icon: FileText },
    { number: 2, title: 'Project Details', icon: Building },
    { number: 3, title: 'Location', icon: MapPin },
    { number: 4, title: 'Contact Info', icon: User },
    { number: 5, title: 'Documents', icon: Upload },
  ];

  const permitTypes = [
    { id: 'building', label: 'Building Permit', description: 'For new construction or renovations' },
    { id: 'business', label: 'Business License', description: 'For operating a business' },
    { id: 'environmental', label: 'Environmental Permit', description: 'For projects affecting environment' },
    { id: 'zoning', label: 'Zoning Permit', description: 'For land use and zoning compliance' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({ ...prev, documents: [...prev.documents, ...files] }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen pt-24 px-6 pb-12"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Apply for{' '}
            <GradientText>
              Permit
            </GradientText>
          </h1>
          <p className="text-gray-400">
            Complete the form below to submit your permit application
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          variants={fadeInUp}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1 last:flex-none">
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step.number <= currentStep
                        ? 'bg-gradient-to-r from-primary-500 to-accent-500'
                        : 'bg-white/10'
                    }`}
                  >
                    {step.number < currentStep ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : (
                      <step.icon className="w-5 h-5 text-white" />
                    )}
                  </motion.div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    step.number < currentStep ? 'bg-gradient-to-r from-primary-500 to-accent-500' : 'bg-white/10'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            {steps.map(step => (
              <span key={step.number} className="text-xs text-gray-400">
                {step.title}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          onSubmit={handleSubmit}
          className="glass-card rounded-2xl p-8"
        >
          {/* Step 1: Permit Type */}
          {currentStep === 1 && (
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">Select Permit Type</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {permitTypes.map((type) => (
                  <motion.label
                    key={type.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      relative p-4 rounded-xl border cursor-pointer transition-all
                      ${formData.permitType === type.id
                        ? 'border-accent-500 bg-accent-500/10'
                        : 'border-white/10 hover:border-white/20 bg-white/5'
                      }
                    `}
                  >
                    <input
                      type="radio"
                      name="permitType"
                      value={type.id}
                      checked={formData.permitType === type.id}
                      onChange={handleInputChange}
                      className="absolute opacity-0"
                    />
                    <h3 className="font-medium text-white mb-1">{type.label}</h3>
                    <p className="text-xs text-gray-400">{type.description}</p>
                  </motion.label>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Project Details */}
          {currentStep === 2 && (
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">Project Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Project Name</label>
                  <input
                    type="text"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all"
                    placeholder="Enter project name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Project Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all"
                    placeholder="Describe your project"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Start Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">End Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Location */}
          {currentStep === 3 && (
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">Project Location</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Street Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all"
                    placeholder="Enter street address"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">ZIP Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all"
                      placeholder="ZIP Code"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4: Contact Info */}
          {currentStep === 4 && (
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Contact Person</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all"
                      placeholder="Full name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 5: Documents */}
          {currentStep === 5 && (
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">Upload Documents</h2>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-accent-500/50 transition-colors">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-300 mb-1">Drop files here or click to upload</p>
                    <p className="text-xs text-gray-500">Supported: PDF, JPG, PNG (Max 10MB)</p>
                  </div>
                </div>

                {formData.documents.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm text-gray-400">Uploaded files:</p>
                    {formData.documents.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-300">{file.name}</span>
                        </div>
                        <span className="text-xs text-gray-500">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <motion.div variants={fadeInUp} className="flex justify-between mt-8">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg transition-all ${
                currentStep === 1
                  ? 'bg-white/5 text-gray-500 cursor-not-allowed'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              Previous
            </motion.button>

            {currentStep < steps.length ? (
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={nextStep}
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg text-white font-medium flex items-center gap-2"
              >
                Next Step
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            ) : (
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg text-white font-medium flex items-center gap-2"
              >
                Submit Application
                <CheckCircle className="w-4 h-4" />
              </motion.button>
            )}
          </motion.div>
        </motion.form>

        {/* Help Text */}
        <motion.div
          variants={fadeInUp}
          className="mt-6 flex items-start gap-3 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl"
        >
          <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-yellow-400 font-medium">Important Information</p>
            <p className="text-xs text-gray-400 mt-1">
              Please ensure all information is accurate before submitting. Incomplete applications may be rejected or delayed.
              Processing time typically takes 3-5 business days.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PermitForm;