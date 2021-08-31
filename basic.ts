function add(n1: number, n2: number, printResult: boolean, resultPrase: string) {
    // if (typeof n1 !== 'number' && typeof n2 !== 'number') {
    //     throw new Error("Incorrect  input!")
    // }
    const result = n1 + n2
    if (printResult) {
        console.log(resultPrase + result)
    } else {
        return result
    }
}
const num1 = 5;
const num2 = 2.8;
const printResult = true;
const resultPrase = "The result is : "

add(num1, num2, printResult, resultPrase)