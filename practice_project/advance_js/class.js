// class User {
//     constructor(userName, email, password){
//         this.userName = userName;
//         this.email = email;
//         this.password= password;
//     }

//     encryptPassword(){
//         return `Encrypted pas: ${this.password+"334"}`;
//     }

//     changeUserName(){
//         console.log(`${this.userName.toUpperCase()}`);
//     }
// }

// const user = new User("chetan","chetan@gmail.com","ssbc");
// console.log(user);
// console.log(user.encryptPassword());
// user.changeUserName();



//-------------------------------////////
// function User(userName,email,password){
//     this.userName = userName;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password+"555"}`;
// }

// User.prototype.changeName = function(){
//     return `${this.userName.toUpperCase()}`;
// }

// const newUser = new User("harsh","harsh@gmail.com","1245");
// console.log(newUser);
// console.log(newUser.encryptPassword());
// console.log(newUser.changeName());


/// ----------------Inheritance-----------------


class User {
    constructor(userName){
        this.userName = userName;
    }

    logMe(){
        console.log(`UserName is: ${this.userName}`);
    }
}

class Teacher extends User {
    constructor(userName,email,password){
        super(userName);
        this.email=email;
        this.password = password;
    }

    addCourse(){
        console.log(`a new course is added by ${this.userName}`);
    }
}

const studentOne = new User("Chetan");
console.log(studentOne);
studentOne.logMe();

const master = new Teacher("ramesh","r@fmail.com",56732);
console.log(master);
master.addCourse();
master.logMe()
console.log(studentOne instanceof Teacher);
console.log(studentOne instanceof User);
console.log(master instanceof User);


