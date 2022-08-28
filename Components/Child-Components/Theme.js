import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function Theme(props) {

    const myTheme1 = React.useContext(ThemeContext);
    const ballMovement = {
        backgroundColor: (myTheme1.dark) ? "white": "#05386B",
        left: (myTheme1.dark) ? "50px" : "5px"
    }
    const buttonBackground = {
        backgroundColor: (myTheme1.dark) ? "#3500D3": "white",
    }

    return (
        <div className="themeSwitcher">
            <div className="themeButton" style={buttonBackground} onClick = {myTheme1.toggle}>
                <p className="ball" style={ballMovement}></p>
            </div>
        </div>
    )
}
