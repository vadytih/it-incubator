import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import  {OnOff2} from "./components/OnOff2/OnOff2";
import {Accordion2} from "./components/Accordion2/Accordion2";
import {Rating2} from "./components/Rating2/Rating2";


function PageTitle(props: any) {
    console.log("PageTitle - компанент отрисован")
    return (
        <h1>
            {props.title}
        </h1>
    )
}

const App = () => {
    console.log("App - компанент отрисован")
    return (
        <>
            <PageTitle title={"This is APP components"}/>
            <div>
                <Header/>
                <Rating value={3}/>
                <Accordion titleValue={"Меню"} collapse={true}/>
                <Accordion titleValue={"Пользователи"} collapse={false}/>
                <Rating value={0}/>
                <Rating value={1}/>
                <Rating value={2}/>
                <Rating value={3}/>
                <Rating value={4}/>
                <Rating value={5}/>
            </div>
            <OnOff value={true}/>
            <OnOff value={false}/>

            <OnOff2/>
            <OnOff2/>
            <OnOff2/>
            <OnOff2/>
            <OnOff2/>

            <Accordion2 titleValue={"Меню"} collapse={true}/>

            <Rating2/>
        </>
    )
}

export default App;
