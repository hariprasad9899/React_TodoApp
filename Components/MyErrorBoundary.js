import React, { Component } from "react";

export default class MyErrorBoundary extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error,errorInfo) {
        console.log(error,errorInfo)
    } 

    render() {
        if(this.state.hasError) {
            return <h1><center>Oops! Some error Occured</center></h1>
        } else {
            return this.props.children
        }
    }

}