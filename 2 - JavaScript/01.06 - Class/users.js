class User {
    constructor(name, age, height, weight) {
        this.name = name;
        this.height = height;
        this.age = age;
        this.weight = weight
        this.BMI = this.weight / (this.height * this.height)
    }

    getHobbies() {
        return `${this.name} love to sleep`
    }
}

const udiUser = new User('Udi', 25, 180, 66)
const yakovUser = new User('Yakov', 18, 190, 70)

// console.log(udiUser)
// console.log(yakovUser)

// console.log(udiUser.getHobbies())

// function getHobbies(nameUser) {
//     return `${nameUser} love to sleep`
// }

// console.log(getHobbies('Udi'))

// const obj = {
//     one: 'one',

//     getOne: function () {
//         console.log(this.one)
//     }
// }

// obj.getOne()

class Baby extends User {
    constructor(name, age, height, weight, study, hobbies) {
        super(name, age, height, weight);
        this.study = study
        this.hobbies = hobbies
    }
}

const orel = new Baby("orel", 34, 170, 80, "school", "walk")

console.log(orel.getHobbies())

