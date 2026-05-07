//storage
import {useState} from "react"

function StorageDemo()
{
    const data = {
        name:"Sam",
        id: 101,
        title:"Manager"
    }

    var names = ["sam", "sally", "ferncroft", "pat", "flint"]
    const getName = ()=> names[Math.round(Math.random()*4)]
    
    function home()
    {
        var dataStr = JSON.stringify(data)
        localStorage.setItem('p2', dataStr);
        setStateData(dataStr)
        console.log("At home")
    }
    
    function changeName()
    {
        var s = localStorage.getItem('p2');
        var p1= JSON.parse(s);
        p1.name = getName()
        var p1Str = JSON.stringify(p1)
        localStorage.setItem('p2', p1Str);
        setStateData(p1Str)
        console.log("Name changed")
    }
    
    function show()
    {
        var s = localStorage.getItem('p2');
        console.log(s)
    }
    
    const [stateData, setStateData] = useState(JSON.stringify(data))

    function Data()
    {
        return <>{stateData}</>
    }
    
    
    return (
        <>
        <button onClick={()=>home()}>reset</button> &nbsp; 
        <button onClick={()=>changeName()}>new name</button> &nbsp; 
        <button onClick={()=>show()}>show</button>
        <br /><br /><br />
        <Data />
        </>
    )
}

export function MyApp()
{
    return (
            <>
            <StorageDemo />
            </>
        )
}