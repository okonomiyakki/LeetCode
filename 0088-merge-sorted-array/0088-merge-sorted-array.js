/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for(let i = 0; i < n; i++){
        nums1[m + i] = nums2[i]
    }

    nums1.sort((x,y) => x - y )
};
/*
9. nums1배열에서 무효한 요소인 m번째 인덱스 값부터 n만큼 for문을 돌며 nums2의 값으로 치환한다.
13. nums1배열을 정렬한다.
*/