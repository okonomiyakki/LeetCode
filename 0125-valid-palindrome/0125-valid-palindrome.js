/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const toLower = s.toLowerCase();
    const splited = toLower
        .split('')
        .filter((x) => (x >= 'a' && x <= 'z') || (x >= 0 && x <= 9))
        .filter((x) => x !== ' ');
    const newStr = splited.join('');

    let left = 0;
    let right = newStr.length - 1;
    let answer = true;

    while (left <= right) {
        if (newStr[left] === newStr[right]) {
            left++;
            right--;
        } else return (answer = false);
    }
    return answer;
};