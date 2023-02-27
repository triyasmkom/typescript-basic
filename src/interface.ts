interface Laptop{
    name:string,
    on() : void
    off(): void
}

class Asus implements Laptop{
    name: string;
    isGaming: boolean
    constructor(name:string, isGaming:boolean) {
        this.name = name
        this.isGaming = isGaming
    }
    off(): void {
        console.log("Mati")
    }

    on(): void {
        console.log("Nyala")
    }
}

class MacBook implements Laptop{
    name: string;
    keyBoardLight: boolean
    constructor(name: string, keyBoardLight:boolean) {
        this.name = name
        this.keyBoardLight = keyBoardLight
    }
    off(): void {
        console.log("Mati")
    }

    on(): void {
        console.log("Nyala")
    }
}

let asus = new Asus('Asus', true)
console.log(asus.on())
console.log(asus.off())

let mb = new MacBook('Asus', true)
console.log(mb.on())
console.log(mb.off())
