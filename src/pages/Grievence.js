import React, { useState } from "react";
import "./Grievence.css";

const Grievence = () => {
  const [formData, setFormData] = useState({
    areaName: "",
    complaintName: "",
    grievanceType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission (e.g., API request, data processing)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="grievance-form-container">
      <div className="head">
        <h2>Grievance Form</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Area Name:
          <input
            type="text"
            name="areaName"
            value={formData.areaName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Name of Complainant:
          <input
            type="text"
            name="complaintName"
            value={formData.complaintName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Grievance Type:
          <select
            name="grievanceType"
            value={formData.grievanceType}
            onChange={handleChange}
            required
          >
            <option value="">Select grievance type</option>
            <option value="newPipelineConnection">
              New Pipeline Connection
            </option>
            <option value="blockagesInExisting">Blockages in Existing</option>
            <option value="waterQuality">Water Quality</option>
            <option value="leakageDetected">Leakage Detected</option>
          </select>
        </label>
        <div className="buttonn">
       <button type="submit">Submit</button>
       </div>
      </form>
    </div>
  );
};

export default Grievence;
