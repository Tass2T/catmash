import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import List from './components/List';

function App() {

  const [data, setData] = useState([])
  const [count, setCount] = useState(0)

  const initVoteAttribute = (data) => {
      data.forEach(element => {
        element.vote = 0
      });
      setData(data)
  }

  const fetchCatData = () => {
    axios.get("https://latelier.co/data/cats.json", {crossdomain: true})
    .then(res => initVoteAttribute(res.data.images))
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
            <Route path="/list" element={<List data={data}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
