import { useState } from "react";
import api from "../services/api";

const PermitForm = () => {
  const [propertySize, setPropertySize] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await api.post("/application/submit", {
      service_type: "permit",
      data: {
        property_size: Number(propertySize),
        location
      }
    });

    alert("Application Submitted: " + res.data.application.id);
  };

  return (
    <div>
      <h2>Permit Application</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Property Size"
          value={propertySize}
          onChange={(e) => setPropertySize(e.target.value)}
        />
        <input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PermitForm;