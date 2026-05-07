import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'

function Home()  // this is for the home view
{
    return <>
            <Nav />
             <h1> Routes Demo </h1>
            This is the home page!
           </>
}

function About()
{
    return <>
             <Nav />
             <h1> Routes Demo </h1>
            This is the about page!
             <Link to="/policies">Policies</Link>
           </>
}

function Policies()
{
    return <>
             <Nav />
             <h1> Policies Page </h1>
            This is from the about page!
           </>
}

function Unknown()
{
    return <>
             <Nav />
             <h1> Page not found! </h1>
             Oops!  You seem to have lost your way!
             Try going home!
             </>
}

function Nav()      //inserts nav elements 
{
    return <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
           </>
}



function MyApp() {
   
    return (
        <Router>
          <Routes>
                
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />
                <Route path="/policies" element={<Policies />} />
                <Route path="*" element={<Unknown />} />
          </Routes>

        </Router>
    )
}

export default MyApp
          

