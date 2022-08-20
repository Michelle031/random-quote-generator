import { useEffect } from 'react';
import './App.css';
import { loadingRandom, randomQuote } from './atoms/quoteAtom';
import { useRecoilState } from "recoil";
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { RefreshIcon } from '@heroicons/react/solid';
import Author from './components/Author';


function App() {

  const [quote, setQuote] = useRecoilState(randomQuote);
  const [loading, setloading] = useRecoilState(loadingRandom);

  const fetchData = async () => {
    setloading(true);
    const res = await fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random").then((data) => data.json());
    setQuote(res?.data?.[0]);
    setloading(false);
  }

  useEffect(() => {
    fetchData();
  },[]);


  return (
    <div className="app flex items-center justify-center h-screen ">
      <button className=" absolute right-12 top-5 text-[#333333] text-md" onClick={fetchData}>random <RefreshIcon className='h-5 inline-flex' /></button>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/author' element={<Author />} />
      </Routes>
      <footer className="font-xs px-6"><p>created by <b>Michelle031</b> - devChallenges.io </p></footer>
    </div>
  );
}

export default App;
