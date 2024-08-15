
import  { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';
import SensorTable from './SensorTable';
import Cards from './Cards';
import Navbar from '../Components/Navbar';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale);

const Dashboard = () => {
  const [sensorData, setSensorData] = useState([]);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Fetch sensor data from API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5100/api/sensor-data');
        const data = await response.json();
        setSensorData(data.sensorData);
        setLocation(data.location); // Set the location data
      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    };

    fetchData();
  }, []);

  // Prepare chart data
  const chartData = {
    labels: sensorData.map(data => data.time),
    datasets: [
      {
        label: "Temperature (°C)",
        data: sensorData.map(data => parseFloat(data.temperature)),
        borderColor: "rgb(46, 141, 78)",
        backgroundColor: "rgba(46, 141, 78, 0.3)",
        fill: "start",
      },
    ],
  };

  const chartData1 = {
    labels: sensorData.map(data => data.time),
    datasets: [
      {
        label: "Humidity (%)",
        data: sensorData.map(data => parseFloat(data.humidity)),
        borderColor: "rgb(78, 46, 141)",
        backgroundColor: "rgba(78, 46, 141, 0.3)",
        fill: "start",
      },
    ],
  };

  const chartData2 = {
    labels: sensorData.map(data => data.time),
    datasets: [
      {
        label: "Soil Moisture",
        data: sensorData.map(data => parseFloat(data.soilMoisture)),
        borderColor: "rgb(141, 78, 46)",
        backgroundColor: "rgba(141, 78, 46, 0.3)",
        fill: "start",
      },
    ],
  };

  const chartData3 = {
    labels: sensorData.map(data => data.time),
    datasets: [
      {
        label: "Light Intensity (Lux)",
        data: sensorData.map(data => parseFloat(data.lightIntensity)),
        borderColor: "rgb(46, 141, 78)",
        backgroundColor: "rgba(46, 141, 78, 0.3)",
        fill: "start",
      },
    ],
  };

  return (<>
  <Navbar />
    <div className="p-6 bg-gray-200 min-h-screen">
      <h1 className="text-4xl p-4 font-extrabold mb-10 bg-[#2E8B57] text-white">Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-500">
          <h2 className="text-lg text-center font-semibold mb-4 text-gray-700">Temperature (°C)</h2>
          <div className="h-64 w-full mx-auto">
            <Line data={chartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-500">
          <h2 className="text-lg text-center font-semibold mb-4 text-gray-700">Humidity (%)</h2>
          <div className="h-64 w-full mx-auto">
            <Line data={chartData1} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-500">
          <h2 className="text-lg text-center font-semibold mb-4 text-gray-700">Soil Moisture</h2>
          <div className="h-64 w-full mx-auto">
            <Line data={chartData2} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-500">
          <h2 className="text-lg text-center font-semibold mb-4 text-gray-700">Light Intensity (Lux)</h2>
          <div className="h-64 w-full mx-auto">
            <Line data={chartData3} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      </div>

      {/* Add live location section */}
      {location && (
        <div className="mt-10 p-6 bg-white rounded-lg shadow-lg border border-gray-500">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Live Location</h2>
          <div>
            <p><strong>City:</strong> {location.city}</p>
            <p><strong>Region:</strong> {location.region}</p>
            <p><strong>Country:</strong> {location.country}</p>
            <p><strong>Latitude:</strong> {location.latitude}</p>
            <p><strong>Longitude:</strong> {location.longitude}</p>
          </div>
        </div>
      )}

      <SensorTable />
      <Cards />
    </div>
  </>
  );
};

export default Dashboard;



