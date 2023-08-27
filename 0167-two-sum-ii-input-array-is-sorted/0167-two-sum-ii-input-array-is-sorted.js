/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    let answer;

    while (left < right) {
        if (numbers[left] + numbers[right] === target)
            return (answer = [left + 1, right + 1]);
        else if (numbers[left] + numbers[right] > target) right--;
        else left++;
    }
    return answer;
};