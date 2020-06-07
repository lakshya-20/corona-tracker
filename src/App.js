import React,{useState,useEffect,useMemo} from 'react';
import './App.css';

import {fetchData} from './api/index';
import Cards from './components/cards/index'

const App=()=> {
  const [data,setData]=useState({})
  const [country,setCountry]=useState("")
  useMemo(()=>{
    const getData=async()=>{
      const data=await fetchData();
      setData(data)
    }
    getData()
  },[])
  
  const getCountryData=(country)=>{
    const data=fetchData(country)
    setData(data);
    setCountry(country);
  }
  
  
  return (
    <div className="App">
      <div className="top-wrapper">

      </div>
      <div className="content-wrapper">
        <div className="left-wrapper">
          <Cards data={data}/>
        </div>
        <div className="right-wrapper">
          Right Wrapper
        </div>      
      </div>
    </div>
  );
}

export default App;
