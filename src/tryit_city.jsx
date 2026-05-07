import { useState } from "react";
import './App.css'


function Option({cityval})
{
    return <option>{cityval}</option>
}

function MyApp() {
    
    var [city,setCity] = useState("Boston");
    var cities = ["Boston","Cambridge","Somerville","Medford"]
    
    return (
        <>
            <select name= 'city' id = 'sel' onChange= {(e)=>setCity(e.target.value)}>
               { cities.map( (c, i)=><Option key={i} cityval={c} /> )}
            </select>
            <div id='picked'>Selected City: {city} </div>
        </>
    )
}

export default MyApp
          

