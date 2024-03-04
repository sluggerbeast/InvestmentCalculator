import React, { useEffect, useState } from "react";

function Inputs({ onInputInv }) {
  const [userInput, setUserInput] = useState({
    intialInvestment: 1000,
    annualInvestment: 1000,
    expectedReturn: 60,
    duration: 4,
  });
  function handleChange(num, val) {
    setUserInput((prevInput) => {
      return { ...prevInput, [val]: parseInt(num) };
    });
    //console.log(typeof parseInt(num));
  }
  useEffect(() => {
   onInputInv(userInput)
    //console.log(userInput.intialInvestment);
  }, [userInput]);

  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              value={userInput.initialInvestment}
              onChange={(e) =>
                handleChange(e.target.value, "initialInvestment")
              }
              type="number"
              required
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              value={userInput.annualInvestment}
              onChange={(e) => handleChange(e.target.value, "annualInvestment")}
              type="number"
              required
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              value={userInput.expectedReturn}
              onChange={(e) => handleChange(e.target.value, "expectedReturn")}
              type="number"
              required
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              value={userInput.duration}
              onChange={(e) => handleChange(e.target.value, "duration")}
              type="number"
              required
            />
          </p>
        </div>
      </div>
    </>
  );
}

export default Inputs;
