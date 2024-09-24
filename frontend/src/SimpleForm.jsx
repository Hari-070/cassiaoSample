import React, { useState } from 'react';
import axios from 'axios';

function SimpleForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name,age)
    try {
      const response = await axios.post('https://script.google.com/macros/s/AKfycby0juNrq1bzCWs4AXiyiIbmTWstRzygVin8WzF-4iPJcYqcO-gdP9-iHEnu4ek8oO2l/exec', {
        name,
        age
      },
      {headers: {
        "Content-Type": "text/plain;charset=utf-8",}
      },
);

      if (response.data.result === 'success') {
        alert(`Data submitted: Name - ${response.data.name}, Age - ${response.data.age}`);
      } else {
        alert('Failed to submit data');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('An error occurred while submitting data.');
    }
  };

  return (
    <div>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SimpleForm;
