import React, { useState } from "react";
import "./App.css";
import AnimalCard from './AnimalCard';

const Header = ({ age }) => {
  const headerStyle = {
    border: "2px solid #ccc",
    padding: "20px",
    textAlign: "center",
    backgroundColor: age && parseInt(age, 10) >= 18 ? "green" : "#f0f0f0"
  };

  const renderMessage = () => {
    if (age !== "" && !isNaN(age)) {
      return parseInt(age, 10) < 18
        ? "You cannot come to the zoo alone. You must be accompanied with an adult."
        : "Congratulations! You can come alone.";
    }
    return "Welcome to the Animal Kingdom";
  };

  return (
    <div style={headerStyle} className="header">
      <img src= '/images/pexels-pixabay-45170.jpg' width="150px" height="150px" alt="Company Logo" />
      <h1>{renderMessage()}</h1>
      <p>Your Age: {age}</p>
    </div>
  );
};

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>Home</li>
        <li>Animals</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};



const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2023 Jamila Wilson</p>
    </div>
  );
};

const App = () => {

  const animalData = [
    {
      name: 'Lena',
      age: 5,
      species: 'Lion',
      image: '/images/pexels-pixabay-247502.jpg', // Add the correct image path
      interestingFact: 'Lions are the only cats that live in groups.',
    },
    {
      name: 'Timo',
      age: 5,
      species: 'Leopard',
      image: '/images/pexels-rachel-claire-4577775.jpg', // Add the correct image path
      interestingFact: 'Lions are the only cats that live in groups.',
    },
    {
      name: 'Opie',
      age: 5,
      species: 'Tiger',
      image: '/images/pexels-george-desipris-792381.jpg', // Add the correct image path
      interestingFact: 'Lions are the only cats that live in groups.',
    },
    // Add more animal data as needed
  ];

  const [age, setAge] = useState("");

  const handleAgeInput = () => {
    const userAge = prompt("Please enter your age:");
    setAge(userAge);
  };

  return (
    <div className="app">
      <Header age={age} />
      <Navigation />
      <div className="main-content">
      {animalData.map((animal, index) => (
        <AnimalCard key={index} {...animal} />
      ))}
      <button onClick={handleAgeInput}>Set Age</button>
    </div>
      <Footer />
    </div>
  );
};

export default App;