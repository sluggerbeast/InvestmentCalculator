import React from 'react'
import {formatter} from '../util/investment.js'

function getFormat(val){

    return formatter.format(val);
}

function Results({onResult}) {
    console.log(onResult);
    let TI = 0; // Total Interest
  return (
    <>
    <table className="center" id="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            
            {
                onResult.map((result)=>{
                    TI = TI+result.interest;
                    return(
                    <tr key={result.year}>
                    
                    <td>{result.year}</td>
                    <td>{getFormat(result.valueEndOfYear)}</td>
                    <td>{getFormat(result.interest)}</td>
                    <td>{getFormat(TI)}</td>
                    <td>{getFormat(result.valueEndOfYear - TI)}</td>
                </tr>)})
            }
          </tbody>
        </table>
    </>
  )
}

export default Results