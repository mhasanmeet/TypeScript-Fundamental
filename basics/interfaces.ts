// Interface
interface IUser {
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
    employeeId: 1,
    username: "Kazi",
    email: "k@email.com",
    age: 23
}

// create object base on primary interfaces
const person: IUser = {
    username: "Kazi",
    email: "k@email.com",
    age: 23
}