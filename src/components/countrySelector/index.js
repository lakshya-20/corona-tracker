import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core'
import {fetchCountries} from '../../api/index'

import './styleSheet.css'

const CountrySelector=()=>{
    const [countries,setCountries]=useState([])
    useEffect(()=>{
        const getData=async ()=>{
            const data=(await fetchCountries())
            setCountries(data)
        }
        getData()
    },[])
    return(
        <div>
            <FormControl className="formControl">
                <NativeSelect>
                    <option>Global</option>
                    {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountrySelector;