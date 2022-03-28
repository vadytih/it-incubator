import React from 'react';
import './App.css';
import Header from "./Header";
import Accordion from "./Accordion";
import Rating from "./Rating";

const AppTitle = () => {
    console.log("AppTitle - компанент отрисован")
    return (
        <>This is APP components</>
    )
}

const App = () => {
    console.log("App - компанент отрисован")
    return (
        <>
            <AppTitle/>
            <div>
                <Header/>
                <Rating/>
                <Accordion/>
                <Rating/>
            </div>
        </>

    )
}

export default App;
