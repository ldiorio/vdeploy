import { useState } from "react";
import {Routes, Route, Link, useParams} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import './App.css'


function Option({cityval})
{
    return <option>{cityval}</option>
}



function Home()
{
    var [city,setCity] = useState("Boston");
    var cities = ["Boston","Cambridge","Somerville","Medford"]
    return  <>
            <h1>Home</h1>
             <select name= 'city' id = 'sel' onChange= {(e)=>setCity(e.target.value)}>
               { cities.map( (c, i)=><Option key={i} cityval={c} /> )}
            </select>
        
            <div id='picked'>Selected City: {city} </div>

            </>
}
function About()
{
    return <>
            <h1>About</h1>
            
           </>
}

function Nav()
{
	return (
		<ul id='main-nav'>
		<li><Link to="/">Home</Link></li>
		<li><Link to="/about">About</Link></li>
		</ul>
	);
}

function MyApp() {
    
    
    
    
    return (
        <Router>
          <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
          </Routes>
          <Nav />
        </Router>
    )
}

export default MyApp
          

