/**
 * highestAndLowest - Modify initial string into new one, that start with highest number and and with lowest:
 * @param {string} numbers - the source numbers
 * @returns {string} - returns the new string
 */
 export const highestAndLowest = (numbers) => {
    const minValue = numbers.split(" ").map(Number).sort(function(a, b){return a-b}).shift();
    const maxValue = numbers.split(" ").map(Number).sort(function(a, b){return a-b}).pop();

    return minValue.toString() + ' ' + maxValue.toString();

}
