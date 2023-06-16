// This function will not "return" anything and function type is any
let func = () =>{
    console.log("Hello")
}



//This function will return string type data
//❕ A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.
let func2 = ():string =>{
 return "Hello"
}



//Function parameter define data types, take a specific data types and return any type data
let multiple = (num: number) =>{
    return num * 3
}




//Function parameter define data types, take a specific data types and return a specific data types
let multiple2 = (num: number): number =>{
    return num * 3
}




//Function parameter define data types, takes a specific data types and but can not return anything instead of do some operation
let func3 = (country: string): void =>{
    console.log("Hello")
}




//Function two parameter define different data types and return specific two types of data
let twoParam = (age: number, name: string): number | string =>{
    return `My name is ${name} and I am ${age} years old`
}

//Function arguments
twoParam(29, "Mahmudul")





//Function conditional parameter 
let cond = (age: number, name: string, phone?: string) =>{
    return `My name is ${name} and I am ${age} years old, my phone number is ${phone}`
}

//So phone arguments may or may be not given
cond(22, "Kazi")
cond(27, "Tushar", "+8801711111111")





//Type aliases
type userType = {
    name: string
    age: number
}

let alias = (personName: userType) =>{
    console.log(personName.name)
}