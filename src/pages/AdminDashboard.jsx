import { useEffect, useState } from "react";
import api from "../services/api";

const AdminDashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    const res = await api.get("/admin/applications");
    setApplications(res.data);
  };

  const updateStatus = async (id, status) => {
    await api.put(`/admin/update/${id}`, { status });
    fetchApplications();
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      {applications.map((app) => (
        <div key={app.id}>
          <p>ID: {app.id}</p>
          <p>Status: {app.status}</p>
          <button onClick={() => updateStatus(app.id, "Approved")}>
            Approve
          </button>
          <button onClick={() => updateStatus(app.id, "Rejected")}>
            Reject
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;