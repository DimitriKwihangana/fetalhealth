import React, { useState } from "react";

const RetrainModel = () => {
  const [csvFile, setCsvFile] = useState(null);
  const [status, setStatus] = useState("");
  const [accuracy, setAccuracy] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [secondcsvFile, setsecondCsvFile] = useState(null);
  const [secondstatus, setsecondStatus] = useState("");
  const [secondaccuracy, setsecondAccuracy] = useState(null);
  const [secondisLoading, setsecondIsLoading] = useState(false);


  const handleFileChange = (e) => {
    setCsvFile(e.target.files[0]);
  };

  const handleFileChangesecond = (e) => {
    setsecondCsvFile(e.target.files[0]);
  };

  const handlesecondSubmit = async (e) => {
    e.preventDefault();
    if (!secondcsvFile) {
      alert("Please select a CSV file.");
      return;
    }

    setsecondIsLoading(true);
    const formData = new FormData();
    formData.append("file", secondcsvFile);

    try {
      const response = await fetch("https://medistat.onrender.com/fine_tune/", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setsecondStatus(result.status);
        setsecondAccuracy(result.accuracy);
      } else {
        setsecondStatus("Failed to retrain the model.");
        setsecondAccuracy(null);
      }
    } catch (error) {
      setsecondStatus("Error occurred while retraining the model.");
      setsecondAccuracy(null);
    } finally {
      setsecondIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!csvFile) {
      alert("Please select a CSV file.");
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", csvFile);

    try {
      const response = await fetch("https://medistat.onrender.com/retrain/", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setStatus(result.status);
        setAccuracy(result.accuracy);
      } else {
        setStatus("Failed to retrain the model.");
        setAccuracy(null);
      }
    } catch (error) {
      setStatus("Error occurred while retraining the model.");
      setAccuracy(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" bg-[#F0F8FF] flex px-20 pt-10" >
 
    <div className=" w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow-md mt-10 mx-5">
      <h1 className="text-2xl font-semibold mb-4">Retrain Model</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
            Upload CSV File
          </label>
          <input
            type="file"
            id="file"
            accept=".csv"
            onChange={handleFileChange}
            className="p-2 border border-gray-300 rounded-md"
            />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 disabled:bg-gray-400 font-bold"
          disabled={isLoading}
          >
          {isLoading ? "Retraining..." : "Retrain Model"}
        </button>
      </form>

      {status && (
  <div className="mt-4">
    <p className="text-sm font-medium text-gray-700">Status: {status}</p>
    {accuracy !== null && (
      <p className="text-sm font-medium text-gray-700">
        Accuracy: <span className="text-blue-500">{accuracy.toFixed(2)}</span>
      </p>
    )}
  </div>
)}
    </div>
    <div className=" w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow-md mt-10 mx-5">
      <h1 className="text-2xl font-semibold mb-4">Fine tune the Model</h1>

      <form onSubmit={handlesecondSubmit}>
        <div className="mb-4">
          <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
            Upload CSV File
          </label>
          <input
            type="file"
            id="file"
            accept=".csv"
            onChange={handleFileChangesecond}
            className="p-2 border border-gray-300 rounded-md"
            />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 disabled:bg-gray-400 font-bold"
          disabled={secondisLoading}
          >
          {secondisLoading ? "Fine tuning..." : "Fine tune Model"}
        </button>
      </form>

      {secondstatus && (
          <div className="mt-4">
          <p className="text-sm font-medium text-gray-700">Status: {secondstatus}</p>
          {secondaccuracy !== null && <p className="text-sm font-medium text-gray-700"><span className="text-blue-500">Accuracy: {secondaccuracy.toFIxed(2)}</span></p>}
        </div>
      )}
    </div>
            </div>
  );
};

export default RetrainModel;
