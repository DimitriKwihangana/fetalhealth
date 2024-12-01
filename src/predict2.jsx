import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

function SecondPredict() {
  const [baselineValue, setBaselineValue] = useState(0);
  const [accelerations, setAccelerations] = useState(0);
  const [fetalMovement, setFetalMovement] = useState(0);
  const [uterineContractions, setUterineContractions] = useState(0);
  const [lightDecelerations, setLightDecelerations] = useState(0);
  const [prolongedDecelerations, setProlongedDecelerations] = useState(0);
  const [abnormalShortTermVariability, setAbnormalShortTermVariability] =
    useState(0);
  const [meanShortTermVariability, setMeanShortTermVariability] = useState(0);
  const [abnormalLongTermVariability, setAbnormalLongTermVariability] =
    useState(0);
  const [histogramWidth, setHistogramWidth] = useState(0);
  const [histogramMin, setHistogramMin] = useState(0);
  const [histogramMax, setHistogramMax] = useState(0);
  const [histogramPeaks, setHistogramPeaks] = useState(0);
  const [histogramZeroes, setHistogramZeroes] = useState(0);
  const [histogramMode, setHistogramMode] = useState(0);
  const [histogramMedian, setHistogramMedian] = useState(0);
  const [histogramTendency, setHistogramTendency] = useState(0);
  const [loading, setLoading] = useState(false);
  const [predictionResult, setPredictionResult] = useState(""); 

  const notifySuccess = (message) =>
    toast.success(message, { position: "top-right", autoClose: 3000 });
  const notifyError = (message) =>
    toast.error(message, { position: "top-right", autoClose: 3000 });

  const MakePrediction = async () => {
    setLoading(true);
    try {
      const response = await axios.post("https://medistat.onrender.com/predict/", {
        baseline_value: baselineValue,
        accelerations,
        fetal_movement: fetalMovement,
        uterine_contractions: uterineContractions,
        light_decelerations: lightDecelerations,
        prolongued_decelerations: prolongedDecelerations,
        abnormal_short_term_variability: abnormalShortTermVariability,
        mean_value_of_short_term_variability: meanShortTermVariability,
        percentage_of_time_with_abnormal_long_term_variability:
          abnormalLongTermVariability,
        histogram_width: histogramWidth,
        histogram_min: histogramMin,
        histogram_max: histogramMax,
        histogram_number_of_peaks: histogramPeaks,
        histogram_number_of_zeroes: histogramZeroes,
        histogram_mode: histogramMode,
        histogram_median: histogramMedian,
        histogram_tendency: histogramTendency,
      });

      setLoading(false);
      const prediction = response.data.prediction;
      setPredictionResult(response.data.prediction);
      notifySuccess(`Prediction: ${prediction}`);
    } catch (err) {
      setLoading(false);
      notifyError("Failed to get prediction. Please try again.");
    }
  };

  const inputFields = [
    { label: "Baseline Value", value: baselineValue, setter: setBaselineValue },
    { label: "Accelerations", value: accelerations, setter: setAccelerations },
    { label: "Fetal Movement", value: fetalMovement, setter: setFetalMovement },
    {
      label: "Uterine Contractions",
      value: uterineContractions,
      setter: setUterineContractions,
    },
    {
      label: "Light Decelerations",
      value: lightDecelerations,
      setter: setLightDecelerations,
    },
    {
      label: "Prolonged Decelerations",
      value: prolongedDecelerations,
      setter: setProlongedDecelerations,
    },
    {
      label: "Abnormal Short-Term Variability",
      value: abnormalShortTermVariability,
      setter: setAbnormalShortTermVariability,
    },
    {
      label: "Mean Short-Term Variability",
      value: meanShortTermVariability,
      setter: setMeanShortTermVariability,
    },
    {
      label: "Abnormal Long-Term Variability",
      value: abnormalLongTermVariability,
      setter: setAbnormalLongTermVariability,
    },
    { label: "Histogram Width", value: histogramWidth, setter: setHistogramWidth },
    { label: "Histogram Min", value: histogramMin, setter: setHistogramMin },
    { label: "Histogram Max", value: histogramMax, setter: setHistogramMax },
    { label: "Histogram Peaks", value: histogramPeaks, setter: setHistogramPeaks },
    { label: "Histogram Zeroes", value: histogramZeroes, setter: setHistogramZeroes },
    { label: "Histogram Mode", value: histogramMode, setter: setHistogramMode },
    { label: "Histogram Median", value: histogramMedian, setter: setHistogramMedian },
    { label: "Histogram Tendency", value: histogramTendency, setter: setHistogramTendency },
  ];

  return (
    <>
      <ToastContainer />
      <div className="flex  justify-center items-center bg-[#F0F8FF] my-14">
        <div className="w-full max-w-4xl p-4 bg-white shadow-md rounded-lg">
          <header className="mb-2">
            <h1 className="text-xl font-semibold text-blue-700 text-center">
              Fetal Health Prediction Model
            </h1>
            <p className="text-sm text-gray-500 text-center">
              Enter the relevant metrics to predict fetal health conditions.
            </p>
          </header>
          <div className="grid grid-cols-3 gap-2">
            {inputFields.map((field, index) => (
              <div key={index}>
                <label
                  htmlFor={field.label}
                  className="block text-sm font-medium text-gray-700"
                >
                  {field.label}
                </label>
                <input
                  id={field.label}
                  type="number"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={field.value}
                  onChange={(event) => field.setter(event.target.value)}
                />
              </div>
            ))}
          </div>
           {predictionResult && (
                <div className="p-2 mb-4 bg-blue-100 border border-blue-300 rounded">
                  <strong>Prediction Result:</strong> {predictionResult}
                </div>
              )}
              
          <div className="mt-6 flex justify-center">
            <button
              onClick={MakePrediction}
              disabled={loading}
              className={`px-6 py-2 text-white font-semibold rounded-md ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              {loading ? "Processing..." : "Predict"}
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

export default SecondPredict;
