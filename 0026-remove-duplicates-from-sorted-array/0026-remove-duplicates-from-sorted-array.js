/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i+1]) nums[i] = 101
    }

    const sorted = nums.sort((x,y) => x - y)

    const seted = [...new Set(sorted)]

    if(seted.includes(101)) seted.pop()

    return seted.length
};

/*
6. for문을 돌며 중복되는 nums배열 요소의 값을 101로 바꾼다.
10. nums배열을 오름차순으로 정렬한다.
12. nums배열에 존재하는 101의 중복을 제거한다.
14. nums배열에 101이 있는 경우에만 101값을 제거한다.
*/