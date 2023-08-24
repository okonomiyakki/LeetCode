/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;

    for(let i = 1; i < prices.length; i++){
        if(prices[i-1] < prices[i]) profit += prices[i] - prices[i-1];
    }

    return profit;
};

/*
8. i-1 번째 요소가 i 번째 요소보다 작으면 profit 변수에 두 요소의 차이의 절대값(이익)을 누적 할당한다.
*/