function factorialize(num) {

    var result = num;

    if (num === 0 || num === 1)
        return 1;

    while (num > 1) {
        if (num <= 10 || num < 10) {
            num--;
            result = result * num;
            if (num >= (1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10)) {
                break;
            }
        }

    }
    return result;
}
console.log(factorialize(10));