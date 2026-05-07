import { useState } from "react";
import { createContext, useContext } from "react";


function Comp1()
{
    const [myval, setVal] = useState("cow");
    
    
	return (
		<>
            <h1>Use Context Demo</h1>
            <p>In Comp1, the value is: {myval}</p><br/>
            <Comp2 val = {myval} />
                    
        </>
	)
}

function Comp2({val})
{
    
	return (
		<>
            <h2>Hello Comp2!</h2>
            <p>The value is {val}</p>
        </>
	)
}

const myvalContext = createContext();


function Comp1b()
{
    const [myval, setVal] = useState("cow");
    
	return (
		<>
            <h1>Use Context Demo</h1>
            <p>In Comp1, the value is: {myval}</p><br/>
            <myvalContext.Provider func = {myval} >
                <Comp2b />
            </myvalContext.Provider >
            
            <button style= {{'width':'150px','margin': 'auto'}}
                    onClick={(e)=>
                        {setVal('chicken');}
                            }
                    >
            Chicken
            </button>
                        
        </>
	)
}

function Comp2b()
    {
        const val = useContext (myvalContext);
        
        return (
            <>
                <h2>Hello Comp2!</h2>
                <p>The value is {val}</p>
            </>
        )
    }


function MyApp() {
    
  return (
      <Comp1b />
  );
}


export default MyApp;
