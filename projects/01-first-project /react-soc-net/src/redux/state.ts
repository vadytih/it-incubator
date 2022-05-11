type MassageType = {
    id:number
    message: string
}

type DialogType = {
    id: number
    name: string
}
type  PostType = {
    id: number
    message: string
    likesCount: number
}

type ProfilePageType ={
    posts: Array<PostType>
}
type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MassageType>
}

type Sidebar = {}

type RootStateType ={
    profilePage: ProfilePageType
    dialogsPage: DialogType
    sidebar: Sidebar
}


export let state ={
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
            {id:1, name: 'Vadim'},
            {id:2, name: 'Makar'},
            {id:3, name: 'Pavel'},
            {id:4, name: 'Sveta'},
            {id:5, name: 'Oksan'},
            {id:6, name: 'Mity'},
            {id:7, name: 'Andrey'},
        ],
        messages: [
            {id:1, message: 'Hi'},
            {id:2, message: 'How is your it-kamasutra?'},
            {id:3, message: 'Yo'},
            {id:4, message: 'Fuck'},
            {id:5, message: 'Beer one love!'},
        ]
    },
    sidebar: {}
}
