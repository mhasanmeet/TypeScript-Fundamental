//TypeScript is also be dynamic when don't specify any data type.
//❌ But it should not be use. 
let anyData;
anyData = "String"
anyData = 20
anyData = false



/* If we declare a variable with any specific data types like string, number, boolean, array or object
the data type will not changeable, is not JavaScript where data type is dynamic */
let fruitsName = "Apple"
fruitsName = 20 //data type is not changeable
let personAge = 30;
personAge = "thirty" //data type is not changeable



// We can define data type 
let countryNames: number
countryNames = 20



//Multiple types
let multipleTypes: string | number
multipleTypes = "Hello", 20



//Array of any data types
let anyArray: any[]
anyArray = ["String", 20, true, [10, 20], {color: "red"}]



//Array of specific multiple data types
let multipleArrayTypes: (string | number)[]
multipleArrayTypes = ["Hello", 20, "Bangladesh", 99]



//String array data types
let stringArray: string[]
stringArray = ["Hello", "World"]



//Number array data types
let numberArray: number[]
numberArray = [20, 65]



//Object, TS will dynamically detect object data types
let user = {
    userName: "Mahmudul",
    userAge: 99,
    isAdmin: true
}



//But if we predefine object data then we have to put all data values
let objectData: {
    userName: string
    userAge: number
    isAdmin: boolean
}

objectData = {
    userName: "Mahmudul",
    userAge: 99,
    isAdmin: true,

    //If we try to add any data it will show error
    phone: +8801611111111
}




//Object conditional value, let's day userAge & phone is not required
let objectData2: {
    userName: string
    userAge?: number
    isAdmin: boolean
    phone?: string
}

objectData2 = {
    userName: "Mahmudul",
    isAdmin: true
}