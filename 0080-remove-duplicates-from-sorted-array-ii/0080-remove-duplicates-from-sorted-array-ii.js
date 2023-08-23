/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i+1] && nums[i+1] === nums[i+2]) nums[i] = 10001
    }

    const sorted = nums.sort((x,y) => x - y)

    while(sorted.includes(10001)) sorted.pop()

    return sorted.length    
};

/*
6. for 문을 돌며 3번 이상 중복되는 nums 배열 요소의 값을 두 개만 남기고 10001로 바꾼다.
10. nums 배열을 오름차순으로 정렬한다.
12. while 문을 돌며 nums 배열에 10001이 존재하지 않을 때까지 10001을 pop 해준다.
*/