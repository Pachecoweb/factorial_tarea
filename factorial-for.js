function factorizar(numero) {

    if (numero === 0 || numero === 1) {
        return 1;

        for (let i = numero - 1; i >= 1; i++) {
            numero *= i;
        }
    }
    return numero;
}
console.log(factorizar(7));