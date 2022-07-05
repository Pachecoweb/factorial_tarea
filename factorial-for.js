function factorial(number) {

    var result = number;

    if (number === 0 || number === 1)
        return 1;

    for (i = number - 1; i > 1; i--) {
        number = number * i;
    }
    return number;
}
console.log(factorial(10));