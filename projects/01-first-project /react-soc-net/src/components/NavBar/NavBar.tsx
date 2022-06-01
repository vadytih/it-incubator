import React from "react";
import s from "./NavBar.module.css";
import {NavLink} from "react-router-dom";
import {Sidebar} from "../../redux/state";
import {LastFrends} from "./lastFrends/LastFrends";

type NavBarProps = {
    sidebar: Sidebar
}

export const NavBar = (props: NavBarProps) => {
    return (
        <>
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <br/>
            <br/>
            <br/>
            <div className={s.item}>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <LastFrends lastFrend={props.sidebar.lastFrends}/>
        </nav>
        </>
    )
}