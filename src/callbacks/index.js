function sum(n1, n2){
    return n1 + n2 + " desde sum";
}

function resta(n1, n2, n3) {
    return (n1 - n2)*n3 + " desde resta"
}

function calc(n1, n2, n3, callback) {
    console.log("callback----")
    return callback(n1, n2, n3);
}

console.log(calc(4, 8, 2, resta));


/**/

function date(callback) {
    console.log(new Date, "firts");
    setTimeout(function () {
        let fecha = new Date;
        callback(fecha);
    }, 3000)
}

function printDate (dateNow) {
    console.log(dateNow, "before 3 seconds");
}

date(printDate);