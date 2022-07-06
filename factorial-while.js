function factorialize(num) {

    var result = num;

    while (num > 1) {
        num--;
        result = result * num;

    }

    return result;
}
console.log(factorialize(10));