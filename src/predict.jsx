import React, { useState } from "react";
import { ClipLoader } from "react-spinners";

const PredictForm = () => {
  const initialFormState = {
    baselineValue: 0,
    accelerations: 0,
    fetalMovement: 0,
    uterineContractions: 0,
    lightDecelerations: 0,
    prolongedDecelerations: 0,
    abnormalShortTermVariability: 0,
    meanShortTermVariability: 0,
    abnormalLongTermVariability: 0,
    histogramWidth: 0,
    histogramMin: 0,
    histogramMax: 0,
    histogramPeaks: 0,
    histogramZeroes: 0,
    histogramMode: 0,
    histogramMedian: 0,
    histogramTendency: 0,
  };

  const [formData, setFormData] = useState(initialFormState);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: parseFloat(value) || 0 }));
  };

  const validateForm = () => {
    if (Object.values(formData).some((value) => value === null || value === undefined)) {
      setError("All fields are required.");
      return false;
    }
    setError(null);
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setResult(null);
    try {
      const response = await fetch("https://medistat.onrender.com/predict/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error("Error making prediction:", err);
      setError("An error occurred. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen p-4 bg-[#F0F8FF]">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-4">Predict Fetal Health</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.keys(initialFormState).map((key) => (
            <InputField
              key={key}
              name={key}
              label={formatLabel(key)}
              value={formData[key]}
              onChange={(value) => handleChange(key, value)}
            />
          ))}
          <div className="col-span-full flex justify-center">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded transition duration-200"
              disabled={loading}
            >
              {loading ? <ClipLoader size={24} color={"#ffffff"} /> : "Submit"}
            </button>
          </div>
        </form>
        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded shadow">
            <p>{error}</p>
          </div>
        )}
        {result && (
          <div className="mt-4 p-4 bg-gray-100 rounded shadow">
            <h3 className="text-xl font-semibold">Prediction Result</h3>
            <pre className="whitespace-pre-wrap">{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

const InputField = ({ name, label, value, onChange }) => (
  <div className="flex flex-col">
    <label className="text-sm font-medium" htmlFor={name}>
      {label}
    </label>
    <input
      id={name}
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 border rounded"
    />
  </div>
);

const formatLabel = (key) => {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
    .replace(/_/g, " ");
};

export default PredictForm;
