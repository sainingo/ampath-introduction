class person  {
    constructor(firstName, lastName, language, age) {
        this.firstName = "John",
        this.lastName = "Doe",
        this.language = 'en',
        this.age = '20'
    }
    /**
     * @param {string} language
     */
    set setLanguge(language) {
        this.language = language;
    }

    /**
     * @param {string} age
     */
    set setAge(age) {
        this.age = age;
    }

    get getAge() {
        return this.age;
    }
}

const john = new person();

console.log(john.language);

const lang = "KIswahli"


john.setLanguge = `${lang}`;
john.setAge = "30";
console.log(john.language);
console.log(john.age);
console.log(john.getAge);