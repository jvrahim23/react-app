import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AnimalCard.css';

const AnimalCard = ({ name, age, species, image, interestingFact }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="animal-card">
      <img src={process.env.PUBLIC_URL + image} alt={name} />
      <div className="animal-info">
        <h3>{name}</h3>
        <p>Age: {age}</p>
        <p>Species: {species}</p>
        <button onClick={toggleDetails}>Show Details</button>
        {showDetails && (
          <div className="additional-info">
            <p>Interesting Fact: {interestingFact}</p>
          </div>
        )}
      </div>
    </div>
  );
};

AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  interestingFact: PropTypes.string.isRequired,
};

export default AnimalCard;