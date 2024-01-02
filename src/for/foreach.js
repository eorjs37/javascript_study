const list2 = [1, 2, 3, 4];
const oddList = []
function odd(val) {
    if (val % 2 === 1) {
        oddList.push(val)
    }
}

list2.forEach(odd)
console.log(oddList);