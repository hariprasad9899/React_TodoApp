import React, { useContext, useState } from 'react';
import Theme from './Child-Components/Theme';
import ThemeContext from './Child-Components/ThemeContext';
import TodoInput from './Child-Components/TodoInput';
import TodoList from './Child-Components/TodoList';
import { nanoid } from 'nanoid'

export default function App() {

    // Helpers for Themes 
    const [theme,setTheme] = React.useState({ dark: false, toggle: toggleTheme })
    function toggleTheme() {
        setTheme(prevTheme => {
            return {
                ...prevTheme,
                dark: !prevTheme.dark
            }
        })
    }
    // 

    // Handling Input values 


    const  [inputval, setInputVal] = useState("Add and enter 🙂...")
    function handlerInputChange(e) {
        setInputVal(prevVal => {
            return e.target.value   
        })
    }

    // Adding items into list when user hits enter
    function addToList(e) {
        if(e.key === "Enter" && e.target.value.length > 0) {
            setTodoItems(prevTodoItem => {
                return [...prevTodoItem, {
                    work: e.target.value,
                    done: false,
                    id: nanoid()
                }]
            })
            setInputVal(prevVal => "")
        }
    }

    // 


    // creating array to store todo list items

    const [todoItems, setTodoItems] = useState([
        {
            work: "Task 1",
            done: false,
            id: nanoid()
        },
        {
            work: "Task 2",
            done: false,
            id: nanoid()
        },
    ])
    
    function handleStrike(receivedId) {

        setTodoItems((prevTodoItems) => {
            let newItemList = prevTodoItems.map(eachItem => {
                return (eachItem.id === receivedId) ? {...eachItem, done: !eachItem.done} : eachItem
            })
            return newItemList;
        })

    }
    
    function handleClose(receivedId) {

        setTodoItems(prevTodoItem => {
            let newItemList = prevTodoItem.filter(eachItem => {
                if(eachItem.id !== receivedId) { 
                    return eachItem;
                }
            })
            return newItemList;
        })
    }

    return (

        <ThemeContext.Provider value = {theme}   >
            <div className='wrapper' style={{backgroundColor : (theme.dark ? "#0C0032" : "#5CDB95")}}>
                <Theme />
                <TodoInput  
                    val ={inputval}  
                    handlerInputChange = {handlerInputChange} 
                    addToList = {addToList}
                />
                <TodoList  items = {todoItems} handleStrike = {handleStrike} handleClose = {handleClose} />
            </div>
        </ThemeContext.Provider>
    )
}
