import React from 'react';
import './App.css';
import Header from "./Header";
import Technologies from "./Technologies";
import Star from "./Star";


// function hello () {
//     alert('hello')
// }
// hello();

const App = () => {
    return (
        <div>
            <Header/>
            <Technologies/>
            <div>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
            </div>
        </div>
    )
}

export default App;
