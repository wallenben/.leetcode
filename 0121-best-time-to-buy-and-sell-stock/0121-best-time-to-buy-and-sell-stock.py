from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if len(prices) <= 0:
            return 0
        current_profit = 0
        max_profit = 0
        min_val = prices[0]
        for price in prices:
            if price < min_val and price != prices[-1]:
                min_val = price
            else:
                max_profit = max(max_profit, price - min_val)
        return max_profit
