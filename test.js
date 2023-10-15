class Person {
    personArr = [];

    constructor({name}) {
        this.name =  name;
      }

    introduce() {
        console.log(`Меня зовут ${this.name}`);
    }

    getConnections() {
        console.log(this.personArr);
    }

    addConnections() {
        this.personArr.push(arguments[0]);
        arguments[0].personArr.push(this);
    }
}

const Ivan = new Person({'name': 'Ivan'});
const Kolya = new Person({'name': 'Kolya'});

Ivan.addConnections(Kolya);
Ivan.getConnections();
Kolya.getConnections();