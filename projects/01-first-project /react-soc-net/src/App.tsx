import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import {RootStateType} from "./redux/state";

type AppProps ={
    state: RootStateType
}
const App = (props: AppProps) => {
    return (
        // <HashRouter>
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar sidebar={props.state.sidebar}/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/'} element={<div>999</div>}/>
                        <Route path={'/dialogs/*'} element={<Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                        <Route path={'/profile/'} element={<Profile profilePage={props.state.profilePage}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
        // </HashRouter>
    );
}

export default App;
