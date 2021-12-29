import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import List from './components/List';

function App() {

  const [data, setData] = useState(false)
  const [count, setCount] = useState(0)

  const fetchCatData = () => {
    axios.get("https://latelier.co/data/cats.json")
    .then(res => setData(res.data.images))
    .catch(err => console.warn(err))
  }

  useEffect(() => {
    fetchCatData()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home data={data} setData={setData} count={count} setCount={setCount} />}/>
            <Route path="/list" element={<List/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
