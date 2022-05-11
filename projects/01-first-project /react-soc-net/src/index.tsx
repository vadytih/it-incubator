import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {truncate} from "fs";

export type PostsDateType = {
    id: number,
    message: string,
    likesCount: number
}

let postsDate: Array<PostsDateType> = [
    {id:1, message: 'Hi777', likesCount: 5},
    {id:1, message: 'My first post', likesCount: 10},
    {id:1, message: 'Good', likesCount: 8},
    {id:1, message: 'Yas!', likesCount: 2},
    {id:1, message: 'Happy', likesCount: 0},
]

export type DialogsType = {
    id: number,
    name:string
}

let dialogs: Array<DialogsType> = [
    {id: 1, name: 'Vadim'},
    {id: 2, name: 'Pasha'},
    {id: 3, name: 'Makar'},
    {id: 4, name: 'Sveta'},
    {id: 5, name: 'Oksana'},
]

export type MessagesType = {
    id:number,
    message: string
}

let messages: Array<MessagesType> = [
    {id: 1, message: 'HI'},
    {id: 2, message: 'hi hi'},
    {id: 7, message: 'No'},
    {id: 3, message: 'how is your it-kamasutra'},
    {id: 4, message: 'FUUUCK'},
    {id: 6, message: 'Yes'},
    {id: 5, message: 'Is good!'},
]


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App postsDate={postsDate} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
