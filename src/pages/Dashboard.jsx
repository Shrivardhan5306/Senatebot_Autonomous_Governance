import { motion } from "framer-motion";
import { Shield, FileText, AlertCircle, BarChart } from "lucide-react";

const services = [
  { icon: Shield, title: "Apply Permit" },
  { icon: FileText, title: "Track Application" },
  { icon: AlertCircle, title: "File Grievance" },
  { icon: BarChart, title: "Analytics Dashboard" },
];

const Dashboard = () => {
  return (
    <div style={{ padding: "40px" }}>
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{ fontSize: "40px", marginBottom: "40px" }}
      >
        Citizen Dashboard
      </motion.h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "rgba(30, 41, 59, 0.8)",
                padding: "30px",
                borderRadius: "20px",
                cursor: "pointer",
                backdropFilter: "blur(10px)",
                boxShadow: "0 0 20px rgba(0,0,0,0.3)"
              }}
            >
              <Icon size={40} color="#3b82f6" />
              <h2 style={{ marginTop: "20px" }}>{service.title}</h2>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;