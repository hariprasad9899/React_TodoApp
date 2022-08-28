import React from "react";

const ThemeContext = React.createContext({
    dark: true,
    toggle: () => {}
})

export default ThemeContext;