export class User{
    public name: string

    constructor(name: string, public age: number) {
        this.name = name
    }

    setName(val: string):void{
        this.name = val
    }

    getName = (): string =>{
        return this.name
    }
}

export class Product{
    constructor(public name: string) {}
}

let  user = new User("triyas", 25)
let product = new Product("Sabun")
console.log(user.name, product.name)


class  Admin extends User{
    read: boolean = true
    write: boolean = true
    phone: string
    private _email:string = ""
    static  getRoleName: string = "Admin"

    constructor(phone:string, name: string, age: number) {
        super(name, age);
        this.phone = phone
    }
    getRole():{read: boolean, write:boolean}{
        return {
            read: this.read,
            write: this.write
        }
    }

    set email(value:string){
        // add validator
        if(value.length < 5){
            this._email = "email salah"
        } else {
            this._email = value
        }

    }

    get email(): string{
        return this._email
    }
}


// let admin = new Admin("0812343333", "admin", 25, )
// console.log(
//     admin.name, admin.getRole(),
//     admin.age,
//     admin.phone
// )
//
//
// admin.email = "triyas@gmail.com"
// console.log(admin.email)

let admin = Admin.getRoleName
console.log(admin)
