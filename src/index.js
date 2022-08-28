import React from "react";
import ReactDOM  from "react-dom/client";
import App from "../Components/App";
import MyErrorBoundary from "../Components/MyErrorBoundary";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <MyErrorBoundary>
        <App />
    </MyErrorBoundary>
)