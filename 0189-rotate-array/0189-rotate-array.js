/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
    if(nums.length < k) k = k % nums.length

    const spliced = nums.splice(-k)

    nums.unshift(...spliced);
};

/*
8. k 가 nums 배열의 길이보다 크다면, k 를 nums 배열의 길이로 나눈 나머지로 재할당한다.
10. nums 배열의 끝에서 k 번째 요소(1부터 가정)부터 배열을 잘라내고 spliced 변수에 할당한다.
12. 구조분해 할당을 사용하여 nums 배열의 앞 부분에 spliced 배열을 붙여넣는다.
*/