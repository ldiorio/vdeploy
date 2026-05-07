import {pi} from './pi.jsx' 
import Circle from './circle2.jsx'
import './App.css'



function MyApp() {
    var radius = 10
    var area = pi * radius * radius
    return (
        <>
           <h1>Circle Modules</h1>
            <p>The area is: {area}</p>
            <Circle diameter = '10'/>
        </>
    )
}

export default MyApp
          

