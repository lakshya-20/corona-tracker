import React,{useState,useEffect,useMemo} from 'react';
import './App.css';

import {fetchData} from './api/index';
import Cards from './components/cards/index'
import CountrySelector from './components/countrySelector/index'
import Chart from './components/chart/index'
import Header from './components/header/index'

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
  
  const getCountryData= async (country)=>{
    const data=await fetchData(country)
    setData(data);
    setCountry(country);
  }
  
  return (
    <div className="App">
      <div className="top-wrapper">
        <Header/>
      </div>
      <div className="content-wrapper">
        <div className="right-wrapper">
          <CountrySelector getCountryData={getCountryData}/>
          <Chart country={country} data={data}/>
        </div>
        <div className="left-wrapper">
          <Cards data={data}/>
        </div>
              
      </div>
    </div>
  );
}

export default App;
