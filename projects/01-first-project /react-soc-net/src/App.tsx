import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import {DialogsType, MessagesType, PostsDateType} from "./index";

type AppPropsType = {
    postsDate: Array<PostsDateType>
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

const App = (props: any) => {
    return (
        // <HashRouter>
       <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/dialogs/*'} element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                        <Route path={'/profile/'} element={<Profile postsDate={props.postsDate}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
        // </HashRouter>
    );
}

export default App;
