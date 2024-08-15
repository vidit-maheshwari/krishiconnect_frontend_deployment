import React from 'react';
import PropTypes from 'prop-types';

const AverageCard = ({ title, value, unit }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-2xl font-bold text-gray-900">
        {value} {unit}
      </p>
    </div>
  );
};

AverageCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

export default AverageCard;
