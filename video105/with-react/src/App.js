import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  const [value, setValue] = useState(0)

  return (
    <div className="App">
      <Navbar logoText="raghav"/>
      <div className='Value'> {value} </div>
      <button onClick={() => { setValue(value + 1) }}>click me</button>
      <Footer/>
    </div>
  );
}

export default App;
