class User {
    constructor(userName, password){
        this.userName =  userName;
        this.password=password;
    }

    get password(){
        // return this._password.toUpperCase();
        return `${this._password}xxzz`;
    }

    set password(value){
        this._password = value;
    }
}

const chetan = new User("Chetan","acgxzf");
console.log(chetan.password);