import { useState } from "react";
import api from "../services/api";

const Status = () => {
  const [id, setId] = useState("");
  const [status, setStatus] = useState(null);

  const checkStatus = async () => {
    const res = await api.get(`/application/status/${id}`);
    setStatus(res.data);
  };

  return (
    <div>
      <h2>Track Application</h2>
      <input
        placeholder="Application ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={checkStatus}>Check</button>

      {status && (
        <div>
          <p>Status: {status.status}</p>
          <p>Explanation: {status.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default Status;