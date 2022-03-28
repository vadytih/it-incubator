import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";


function AppTitle () {
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
                <Rating value={3}/>
                <Accordion/>
                <Rating value={0}/>
                <Rating value={1}/>
                <Rating value={2}/>
                <Rating value={3}/>
                <Rating value={4}/>
                <Rating value={5}/>
            </div>
        </>

    )
}

export default App;
