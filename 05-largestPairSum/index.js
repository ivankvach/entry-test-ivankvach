/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {
    const maxValue1 = Math.max(...numbers);
    const index = numbers.indexOf(maxValue1);
    numbers.splice(index, 1);
    const maxValue2 = Math.max(...numbers);

    return maxValue1 + maxValue2;
}
