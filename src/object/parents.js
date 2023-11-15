const parents = {
    name: 'jang',
    sayHi() {
        console.log(`Hello :${this.name}`);
    }
}

const child = {
    __proto__: parents,
    name: "Test"
}

child.sayHi();