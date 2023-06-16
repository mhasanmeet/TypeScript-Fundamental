// Interface
interface IUser {
    userId: number
    username: string
    email: string
    age: number
}

// Inheritance of interface
interface IEmployee extends IUser {
    employeeId: number
}


// create object base on extended interfaces
const emp: IEmployee = {
    userId: 1,
    employeeId: 1,
    username: "Kazi",
    email: "k@email.com",
    age: 23
}

// create object base on primary interfaces
const person: IUser = {
    userId: 1,
    username: "Kazi",
    email: "k@email.com",
    age: 23
}


// interface of posts
interface IPosts<T> {
    id: number
    title: string
    desc: string
    extra: T[]
}


// objects based posts interfaces
const userPost: IPosts<string> = {
    id: 1,
    title: "User Post Title",
    desc: "post description",
    extra: ["str", "str2"]
}


//
interface IPostsExtended<T extends object> {
    id: number
    title: string
    desc: string
    extra: T[]
}


//
const userPost2: IPosts<{id: number, username: string}> = {
    id: 1,
    title: "User Post Title",
    desc: "post description",
    extra: [{id: 1, username: "kazi"}, {id: 2, username: "kazi2"}]
}


// 
const userPost3: IPosts<IUser> = {
    id: 1,
    title: "User Post Title",
    desc: "post description",
    extra: [{userId: 1, username: "kazi", email: "k@email.com", age: 22}]
}