import React, { useState } from 'react';
import './App.css';
function App() {
  const [numbers, setNumbers] = useState([]);
  const [average, setAverage] = useState(0);
  const [primeNumbers, setPrimeNumbers] = useState([]);
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [fibonacciNumbers, setFibonacciNumbers] = useState([]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    const nums = value.split(',').map(num => parseInt(num.trim(), 10));
    setNumbers(nums);
  };

  const calculateAverage = () => {
    if (numbers.length === 0) {
      setAverage(0);
      return;
    }
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    setAverage(sum / numbers.length);
  };

  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const findPrimeNumbers = () => {
    const primeNums = numbers.filter(num => isPrime(num));
    setPrimeNumbers(primeNums);
  };

  const generateRandomNumbers = () => {
    const randomNums = numbers.map(num => Math.floor(Math.random() * num) + 1);
    setRandomNumbers(randomNums);
  };

  const calculateFibonacciNumbers = () => {
    if (numbers.length === 0) {
      setFibonacciNumbers([]);
      return;
    }
    const maxNum = Math.max(...numbers);
    const fibs = [];
    let a = 1, b = 0, temp;
    
    while (a <= maxNum) {
      fibs.push(a);
      temp = a;
      a = a + b;
      b = temp;
    }

    setFibonacciNumbers(fibs);
  };

  return (
    <div className="App">
      <div className="a1">
      <h1>Number Operations</h1>
      </div>
      <div className="a3">
        <label>Enter numbers (comma separated): </label><br></br>
        <input type="text" onChange={handleInputChange} id="id1"/>
      </div>
      <div className="a2">
        <button onClick={calculateAverage}>Calculate Average</button>
        <button onClick={findPrimeNumbers}>Find Prime Numbers</button>
        <button onClick={generateRandomNumbers}>Generate Random Numbers</button>
        <button onClick={calculateFibonacciNumbers}>Calculate Fibonacci Numbers</button>
      </div>
      <div>
        <h2>Average: {average}</h2>
        <h2>Prime Numbers: {primeNumbers.join(', ')}</h2>
        <h2>Random Numbers: {randomNumbers.join(', ')}</h2>
        <h2>Fibonacci Numbers: {fibonacciNumbers.join(', ')}</h2>
      </div>
    </div>
  );
}

export default App;
