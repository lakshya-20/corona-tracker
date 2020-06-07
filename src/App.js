import React,{useState,useEffect} from 'react';
import './App.css';

import {fetchData} from './api/index';

const App=()=> {
  const [data,setData]=useState({})
  const [country,setCountry]=useState("")
  useEffect(()=>{
    const data=fetchData();
    setData(data)
  },[])
  
  const getCountryData=(country)=>{
    const data=fetchData(country);
    setData(data);
    setCountry(country);
  }
  
  console.log(data)
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
