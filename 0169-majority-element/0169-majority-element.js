/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const setNums = [...new Set(nums)];

    let numsCount = [];
    setNums.forEach((x) => {
        numsCount.push(nums.filter((y) => x === y).length);
    });

    return setNums[numsCount.indexOf(Math.max(...numsCount))]
};

/*
6. nums 배열의 중복값을 제거하여 setNums 배열에 할당한다.
9. nums 배열의 중복된 요소의 각 빈도수를 numsCount 배열에 할당한다.
13. numsCount 배열에서 가장 빈도수가 높은 값의 인덱스를 가져오고, 해당 인덱스로 setNums 배열을 참조하여 가장 빈도수가 높은 요소를 반환한다.
*/