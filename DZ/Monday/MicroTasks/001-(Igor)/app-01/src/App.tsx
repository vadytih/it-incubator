import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Body} from "./components/Body";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="App">
        <>
            <Header contentHeader={"HEADER"}/>
            <Body contentBody={"BODY content"}/>
            <Footer contentFooter={"FOOTER content"}/>
        </>
    </div>
  );
}

export default App;
