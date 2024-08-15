// import React, { useEffect, useState } from 'react';

// const SensorTable = () => {
//   const [sensorData, setSensorData] = useState([]);

//   useEffect(() => {
//     // Fetch sensor data from API
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/api/sensor-data');
//         const data = await response.json();
//         setSensorData(data.sensorData);
//       } catch (error) {
//         console.error('Error fetching sensor data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-4xl p-3 font-extrabold text-center mb-10 text-gray-800">Sensor Data Overview</h1>
//       <div className="overflow-x-auto">
//         {/* <div className="mb-6">
//           <h2 className="text-2xl font-semibold ml-10 text-gray-700">Detailed Sensor Data History</h2>
//         </div> */}
//         <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
//           <thead className="bg-gray-800 text-white">
//             <tr>
//               <th className="py-3 px-4 text-left">Time</th>
//               <th className="py-3 px-4 text-left">Temperature (°C)</th>
//               <th className="py-3 px-4 text-left">Humidity (%)</th>
//               <th className="py-3 px-4 text-left">Soil Moisture</th>
//               <th className="py-3 px-4 text-left">Light Intensity (Lux)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {sensorData.map((data, index) => (
//               <tr key={index} className="border-b border-gray-200">
//                 <td className="py-3 px-4">{data.time}</td>
//                 <td className="py-3 px-4">{data.temperature}</td>
//                 <td className="py-3 px-4">{data.humidity}</td>
//                 <td className="py-3 px-4">{data.soilMoisture}</td>
//                 <td className="py-3 px-4">{data.lightIntensity}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default SensorTable;




import React, { useEffect, useState } from 'react';

const SensorTable = () => {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    // Fetch sensor data from API
    const fetchData = async () => {
      try {
        const response = await fetch('https://krishiconnect-backend-deployment.onrender.com/api/sensor-data');
        const data = await response.json();
        setSensorData(data.sensorData);
      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl p-3 font-extrabold text-center mb-10 text-gray-800">Sensor Data Overview</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          <thead className="bg-[#2E8B57] text-white">
            <tr>
              <th className="py-3 px-4 text-left">Time</th>
              <th className="py-3 px-4 text-left">Temperature (°C)</th>
              <th className="py-3 px-4 text-left">Humidity (%)</th>
              <th className="py-3 px-4 text-left">Soil Moisture</th>
              <th className="py-3 px-4 text-left">Light Intensity (Lux)</th>
            </tr>
          </thead>
          <tbody>
            {sensorData.map((data, index) => (
              <tr key={index} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <td className="py-3 px-4">{data.time}</td>
                <td className="py-3 px-4">{data.temperature}</td>
                <td className="py-3 px-4">{data.humidity}</td>
                <td className="py-3 px-4">{data.soilMoisture}</td>
                <td className="py-3 px-4">{data.lightIntensity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SensorTable;

