import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


function PageTitle(props: any) {
    console.log("PageTitle - компанент отрисован")
    return (
        <h1>
            {props.title}
        </h1>
    )
}

const App = () =>
{
    console.log("App - компанент отрисован")
    return (
        <>
            <PageTitle title={"This is APP components"}/>
            <div>
                <Header/>
                <Rating value={3}/>
                <Accordion titleValue={"Меню"} collapse={true}/>
                <Accordion titleValue={"Пользователи"} collapse={false}/>
            </div>
        </>

    )
}

export default App;
