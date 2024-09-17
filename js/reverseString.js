function reverseString(string) {
    let stringReverse = string.split('').reverse().join('');
    return stringReverse;
}

function exibirStringInvertida() {
    const input = document.getElementById('inputString').value;
    const resultado = reverseString(input);
    document.getElementById('resultado').textContent = `String invertida: ${resultado}`;
}