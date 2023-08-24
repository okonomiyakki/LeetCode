/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > maxIndex) return false;

        maxIndex = Math.max(maxIndex, i + nums[i]);

        if (maxIndex >= nums.length - 1) return true;

    }
    return false;
};

/*
6. 현재 요소가 도달 가능한 최대의 인덱스 값을 저장하는 변수를 선언한다.
8. for 문을 돌면서, 현재 요소가 현재 인덱스에 도달할 수 없으면 false 를 반환한다.
10. 현재 요소가 도달 가능한 최대의 인덱스 값을 갱신한다.
12. maxIndex 값이 nums 배열의 최대 인덱스 값보다 크거나 같으면 true 를 반환한다.
*/