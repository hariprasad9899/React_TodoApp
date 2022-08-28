import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function TodoList(props) {

    const myTheme = useContext(ThemeContext);

    const JSXItems = props.items.map((eachItem) => {

        let strikeStyle = {
            userSelect: "none",
            width: "100%",
            textDecoration: (eachItem.done) ? "line-through": "none",
        }

        let listStyle = {
            backgroundColor: (myTheme.dark) ? "white" : "#05386B",
            color: (myTheme.dark) ? "#282828" : "white",
        }
        
        return (
            <div className='eachItem' key = {eachItem.id} style = {listStyle}>
                <p 
                    onClick={() => props.handleStrike(eachItem.id)}
                    style = {strikeStyle}
                >{eachItem.work}</p>

                <p 
                    className='close'
                    onClick={() => props.handleClose(eachItem.id)}
                >&#10060;</p>

            </div>
        )
    })

    

    return (
        <div className='todoList' >
            {JSXItems}
        </div>
    )
}

export default TodoList;