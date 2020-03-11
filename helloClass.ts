class MyClass {
    constructor(public name: string) {
    }
    public getName() {
        return this.name;
    }
}

let myClass = new MyClass('Nick');
console.log('hello ' + myClass.getName() + '!');