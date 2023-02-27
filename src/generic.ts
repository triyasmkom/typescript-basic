// contoh function generic (tetapi masih ada kekurangan)
function getData(value:any){
    return value
}

console.log(getData("test").length)
console.log(getData(1234).length)

// generic function
function myData<T>(value: T){
    return value
}

console.log(myData("test").length)
console.log(myData(1234))

// generic Arrow Function Typescript biasa
const arrowFunction = <T>(value:T) =>{

}
// generic Arrow Function Typescript jst
const arrow1 = <T extends unknown>(value:T) =>{
}
const arrow2 = <T extends {}>(value:T) =>{
}

const arrow3 = <T,>(value:T) =>{
}
