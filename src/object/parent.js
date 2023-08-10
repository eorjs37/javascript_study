const parent = {
    name: 'parent',
    sayHi() {
        console.log(`Hi ${this.name}`);
    },
    name2(nm = 'parent2') {
        let name2 = nm;
        return name2;
    }
}

const child = Object.create(parent);
child.name = "child"

parent.sayHi();
console.log(parent.name);
let ss = parent.name2();
console.log(ss = "change");
child.sayHi();