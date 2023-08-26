/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 1) return 0;

    let left = 0;
    let right = 1;
    let temp = 0;

    while (right < prices.length) {
        if (prices[right] > prices[left])
            temp = Math.max(temp, prices[right] - prices[left]);
        else left = right;
        right++;
    }

    return temp;
};