import { useState } from 'react'
<<<<<<< HEAD
import InputWithLabel from './components/inputWithLabel';
import  backgroundImage from "./assets/background15.jpg";

function App() {
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState({ month: "", date: "", year: "" });

  const handleGetAge = (e) => {
    e.preventDefault();

    let newError = { month: "", date: "", year: "" };
    let isValid = true;

    if (!/^(0?[1-9]|1[0-2])$/.test(month)) {
      newError.month = "Month must be between 1 and 12";
      isValid = false;
    }

    if (!/^(0?[1-9]|[12][0-9]|3[01])$/.test(date)) {
      newError.date = "Date must be between 1 and 31";
      isValid = false;
    }

    const currentYear = new Date().getFullYear();
    if (!/^\d{4}$/.test(year) || Number(year) > currentYear) {
      newError.year = "Enter a valid birth year";
      isValid = false;
    }

    if (!isValid) {
      setError(newError);
      return;
    }

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    let calculatedAge = currentYear - Number(year);
    if (
      Number(month) < currentMonth || Number(month) >= currentMonth && Number(date) < currentDay) {
      calculatedAge--;
    }
    setAge(calculatedAge);
    setError({ month: "", date: "", year: "" });
    setMonth("");
    setDate("");
    setYear("");
  }

  return (
    <div className='w-full min-h-dvh flex gap-6 justify-center items-center'
      style={{
        background: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='bg-gray-100 flex flex-col p-10 w-120 gap-6 shadow-md'>
        <div className='text-center'>
          <h1 className='text-xl font-bold font-serif text-center'>Age Calculator</h1>
        </div>
        <form onSubmit={handleGetAge} className="flex flex-col gap-3">
          <InputWithLabel
            id="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            Month
          </InputWithLabel>
          {error.month && <p className='text-red-500 text-sm'>{error.month}</p>}
          <InputWithLabel
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            
          >
            Date
          </InputWithLabel>
          {error.date && <p className='text-red-500 text-sm'>{error.date}</p>}
          <InputWithLabel
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            Year
          </InputWithLabel>
          {error.year && <p className='text-red-500 text-sm'>{error.year}</p>}
          <button type="submit" className='bg-green-700 p-1 mt-4 rounded hover:bg-green-800 transition text-white shadow-md shadow-gray-400'>
            Get Age
          </button>
        </form>
        {
          age && (<p className='text-lg font-semibold text-center'>Your age is: {age}</p>)
        }
      </div>
    </div>
  )
}


=======
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

>>>>>>> 699ec49da5c7ced94287737dc7af1741a9c7bf5e
export default App
