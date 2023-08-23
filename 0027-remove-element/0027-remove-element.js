/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0
    for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) nums[i] = 0;
    else k++
}

nums.sort((x, y) => y - x);

return k
};

/*
9. for문을 돌며 val과 같은 nums배열 요소의 값을 0으로 바꾼다.
12. 같지 않은 경우를 카운트한다.
15. nums배열을 내림차순으로 정렬한다.
*/