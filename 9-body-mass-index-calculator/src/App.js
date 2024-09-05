import React, { useState } from "react";
import "./App.css";

function App() {
  const [weight, setweight] = useState(null);
  const [height, setHeight] = useState(null);
  const [bmi, setbmi] = useState(null);
  const [message, setmessage] = useState(null);
  const [error, seterror] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightinmeters = height / 100;
      const bmiValue = (weight / (heightinmeters * heightinmeters)).toFixed(1);
      setbmi(bmiValue);
      setmessage(getbmimessage(bmiValue));
      seterror(null); 
    } else {
      seterror("Please enter your height and weight.");
      setbmi(null);
      setmessage(null); 
    }
  };

  const getbmimessage = (bmi) => {
    if (bmi < 18.5) {
      return "skinny";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "normal";
    } else if (bmi >= 25 && bmi < 30) {
      return "overweight";
    } else {
      return "obesity";
    }
  };

  return (
    <div className="App">
      <h4>Body Mass Index(BMI)</h4>

      <div className="inputcontainer">
        <input
          type="text"
          placeholder="Height(cm)"
          value={height}
          required
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="text"
          placeholder="Weight(kg)"
          value={weight}
          required
          onChange={(e) => setweight(e.target.value)}
        />
        <button onClick={calculateBMI}>Calculate BMI</button>
        {error && <p>{error}</p>}
        {bmi && (
          <div>
            <p>Your BMI is {bmi} and you are {message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
