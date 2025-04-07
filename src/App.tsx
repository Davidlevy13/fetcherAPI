import { useState } from 'react'
import EmployeeCard from './components/EmployeeCard'
import './App.css'

function App() {
  const [employee, setEmployee] = useState(employee);
  const getEmployee = () => {

    fetch("https://randomuser.me/api?nat=en")
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data.results[0]);
      });
  };
  return (
    <div className='App'>
      <EmployeeCard employee={employee} />
      <button type="button" onClick={getEmployee}>Get employee</button>
    </div>
  );
}

export default App