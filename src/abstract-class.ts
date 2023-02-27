abstract class Vechile{
    abstract wheels: number

    start():void{
        console.log("Brummm...")
    }
}

class Car extends Vechile{
    wheels: number = 4
}

let car = new Car();
console.log(
    car.wheels
)
car.start()
