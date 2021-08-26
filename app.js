function add(n1, n2, printResult, resultPrase) {
    // if (typeof n1 !== 'number' && typeof n2 !== 'number') {
    //     throw new Error("Incorrect  input!")
    // }
    var result = n1 + n2;
    if (printResult) {
        console.log(resultPrase + result);
    }
    else {
        return result;
    }
}
var num1 = 5;
var num2 = 2.8;
var printResult = true;
var resultPrase = "The result is : ";
add(num1, num2, printResult, resultPrase);
