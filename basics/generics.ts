// Generics 
interface IAuthor {
    id: number
    username: string
}

interface ICategory{
    id: number
    title: string 
}

interface IPost {
    id: number
    title: string
    desc: string
    extra: IAuthor[] | ICategory[]
}

