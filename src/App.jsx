import { useEffect, useState } from "react";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Results from "./components/Results";
import { calculateInvestmentResults } from "./util/investment.js";

function App() {
  const [results, setResults] = useState([]);
  const [duration, setDuration] = useState(0);

  function handleInvestmentResults(result) {
    //console.log(result);

    setResults(calculateInvestmentResults(result));
   
      setDuration(result.duration);
    

    //console.log(calculateInvestmentResults(result));
  }

  return (
    <>
      <Header />
      <Inputs onInputInv={handleInvestmentResults} />
      {duration < 1 && (
        <p className="center">Enter a valid duration greater than 0</p>
      )}
      {duration > 0 && <Results onResult={results} />}
    </>
  );
}

export default App;
