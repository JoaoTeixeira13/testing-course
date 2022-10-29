export function add(numbers) {
    let sum = 0;

    for (const number of numbers) {
        //+number forces a conversion to number

        sum += +number;
    }
    return sum;
}
