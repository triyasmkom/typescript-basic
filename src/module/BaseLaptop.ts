import ILaptop from "./ILaptop";
import * as Keyboard from "./Keyboard"
import {b} from "./Keyboard"

abstract class BaseLaptop<T> implements ILaptop<T>{
    name: string;
    type: T;
    withNumeric: boolean;
    withTouchButton: boolean;

    constructor(
        name:string,
        type:T,
        withNumeric:boolean,
        withTouchButton:boolean
    ) {
        this.name = name
        this.type = type
        this.withNumeric = withNumeric
        this.withTouchButton = withTouchButton
    }

    a():void {
        console.log(Keyboard.a())
    }

    b():void{
        console.log(Keyboard.b())
    }
}

export default BaseLaptop
