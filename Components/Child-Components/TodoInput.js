import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";


export default function TodoInput(props) {
    
    // Handling theme for the input box
    const theme = useContext(ThemeContext)
    let inputStyle = {
        backgroundColor: (theme.dark) ? "#3500D3" : "#EDF5E1",
        color: (theme.dark) ? "white": "#05386B",
    }
    let h1Color = { color: (theme.dark) ? "white": "#05386B" }

    // 

    return (
        <div className="todoInput">
            <h1 style={h1Color}>My TODO APP</h1>
            <input 
                type='text' 
                style={inputStyle} 
                value={props.val} 
                onChange = {props.handlerInputChange}
                onKeyDown = {(e) => {
                    props.addToList(e)
                }}
                >
            </input>
        </div>
    )

}