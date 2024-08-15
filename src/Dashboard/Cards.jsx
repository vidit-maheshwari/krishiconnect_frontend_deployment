import React, { useEffect, useState } from 'react';
import AverageCard from './AverageCard'; // Adjust the import path as necessary

const Cards = () => {
  const [sensorData, setSensorData] = useState([]);
  
  useEffect(() => {
    // Fetch sensor data from API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5100/api/sensor-data');
        const data = await response.json();
        setSensorData(data.sensorData);
      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    };

    fetchData();
  }, []);

  // Calculate averages
  const calculateAverage = (field) => {
    if (sensorData.length === 0) return 0;

    const sum = sensorData.reduce((acc, curr) => acc + parseFloat(curr[field]), 0);
    return (sum / sensorData.length).toFixed(2);
  };

  const averageTemperature = calculateAverage('temperature');
  const averageHumidity = calculateAverage('humidity');
  const averageSoilMoisture = calculateAverage('soilMoisture');
  const averageLightIntensity = calculateAverage('lightIntensity');

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">Sensor Data Overview</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AverageCard
          title="Average Temperature"
          value={averageTemperature}
          unit="°C"
        />
        <AverageCard
          title="Average Humidity"
          value={averageHumidity}
          unit="%"
        />
        <AverageCard
          title="Average Soil Moisture"
          value={averageSoilMoisture}
          unit="units"
        />
        <AverageCard
          title="Average Light Intensity"
          value={averageLightIntensity}
          unit="Lux"
        />
      </div>
    </div>
  );
};

export default Cards;
