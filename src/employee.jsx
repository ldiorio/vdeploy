import './App.css'
import './employee.css'


function Employee2 ({userID, children})
    {
        var pick = () => alert("You picked: " + children)
        return  <div className= 'emp'>
                    <p>{children}</p>
                    <p>ID: {userID}</p>
                    <button onClick = {pick}>Pick {children}</button></div> 
    }
      
function MyApp() {
    
    return (
        <div className = 'employees'>
           <Employee2 userID='101'>Sally</Employee2>
           <Employee2 userID='102'>Sam</Employee2>
        </div>
    )
}

export default MyApp
          

