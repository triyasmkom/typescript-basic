import BaseLaptop from "./BaseLaptop";


class Macbook<T> extends BaseLaptop<T>{
    constructor(type:T,numeric: boolean, touchButton:boolean) {
        super("Macbook",type,numeric, touchButton);
    }
}

export default Macbook

