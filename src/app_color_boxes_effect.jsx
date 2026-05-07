import { useState, useEffect } from "react";

function ColorBoxes()
{
    var [color, setColor] = useState('#ff0000');
    var [hexColor, setHexColor] = useState('#ff0000');
    
    useEffect(() => 
        {
            setHexColor(color);
            
        }, [color]);
    return (
        <>
        <ColorPicker changeHandler={(e)=>setColor(e.target.value)} />
        <ColorBox />
        </>
    )

    function ColorBox()
    {
        var styles =
            {
                h:'100px',
                w:'200px',
                bc:color,
            }
        return (
            <div style={
                    {marginTop: '20px', textAlign:'center', height: styles.h, width:styles.w, backgroundColor:styles.bc, color:'#fff'}
                    }>
            <br />The color is {color}
            </div>
        )
    }

    function ColorPicker(props)
    {
    return (
        <>
            <input type='radio' name='color' value='#ff0000' 
                            onChange={props.changeHandler} 
                            checked={color==='#ff0000'}   />
                            Red
            <input type='radio' name='color' value='#008800' 
                            onChange={props.changeHandler} />Green
            <input type='radio' name='color' value='#0000ff' 
                            onChange={props.changeHandler} />Blue
        </>
        );
    }
}  //end color boxes

export function MyApp()
{
    return (
            <div style={{"margin": "35px"}} >
            <ColorBoxes />
            </div>
        )
}