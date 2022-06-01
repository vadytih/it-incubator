import vadim from './../images/avatars/vadim.jpg'

type MassageType = {
    id:number
    message: string
}

export type DialogType = {
    id: number
    name: string
    avatar: string
}
export type  PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType ={
    posts: Array<PostType>
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MassageType>
}

export type Sidebar = {
    lastFrends: Array<DialogType>
}

export type RootStateType ={
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: Sidebar
}



export let state: RootStateType ={
    profilePage: {
        posts:[
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blablabla', likesCount: 5},
            {id: 1, message: 'Dada', likesCount: 1},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id:1, name: 'Vadim', avatar:"https://i10.fotocdn.net/s107/6f4f14f7c38e6e55/public_pin_l/2340078498.jpg" },
            {id:2, name: 'Makar', avatar:'https://yandex.by/images/search?utm_source=main_stripe_big&text=%D0%91%D0%B5%D0%BB%D0%BE%D0%B5%20%D0%9C%D0%BE%D1%80%D0%B5&nl=1&source=morda&pos=1&rpt=simage&img_url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FC7bdng5V0AAnnM4.jpg' },
            {id:3, name: 'Pavel', avatar:'./../images/avatars/pasha.jpg'},
            {id:4, name: 'Sveta', avatar:'./../images/avatars/sveta.jpg'},
            {id:5, name: 'Oksan', avatar:'./../images/avatars/mam.jpg' },
            {id:6, name: 'Mity', avatar:'./../images/avatars/mity.jpg' },
            {id:7, name: 'Andrey', avatar:'./../images/avatars/andrey.jpg'},
        ],
        messages: [
            {id:1, message: 'Hi'},
            {id:2, message: 'How is your it-kamasutra?'},
            {id:3, message: 'Yo'},
            {id:4, message: 'Fuck'},
            {id:5, message: 'Beer one love!'},
        ]
    },
    sidebar: {
        lastFrends: [{id:0, name: 'test', avatar: ""}],
    }
}

const lastFrends = () => {
    state.sidebar.lastFrends = state.dialogsPage.dialogs.slice(-3)
}
lastFrends();


