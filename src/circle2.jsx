import {pi} from './pi.jsx'
function Circle({diameter})
{
    var radius = diameter/2
    var area = pi * radius * radius
    return <>
        <p>The circle has a diameter of {diameter}</p>
        <p>The area is {area}</p>
        </>
}


export default Circle