function sum(n1, n2){
    return n1 + n2;
}

function calc(n1, n2, callback) {
    return callback(n1, n2);
}

console.log(calc(3, 5, sum));