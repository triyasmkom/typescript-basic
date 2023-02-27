// type data function

function getName(): string{
    return "Hello, my name is Triyas"
}

console.log(getName())

// type data function mengembalikan number

function getNumber(): number{
    return 1234
}

console.log(getNumber())

// type data function tidak mengembalikan nilai
function printName(): void{
    console.log("print name")
}

// Argument
function multiply(val1: number, val2:number): number{
    return val1*val2
}

const result = multiply(20,100)
console.log(result)

// Function sebagai type data
type Age = number;
let age: Age = 12;

type Tambah = (val1: number, val2: number)=> number
const  Add: Tambah = (val1:number, val2:number):number =>{
    return val1+val2
}


// function default parameter
const fullname = (first: string, last: string = "Saputra"): string =>{
    return first+" "+last
}

console.log(fullname("Triyas"))


// optional parameter
const getNama = (val1: string, val2?: string): string =>{
    return val1+" "+val2
}

console.log(getNama("Triyas"))
