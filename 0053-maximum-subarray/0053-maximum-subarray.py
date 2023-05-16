class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        #max sum of subarray - kadane's algorithm,
        max = float('-inf')
        current = 0
        for num in nums:
            #increment the temp sum
            current += num
            #if current is larger (if the sum was positive), add to max
            if current > max:
                max = current
            #if the sum is less than 0, restart at new index
            if current < 0:
                current = 0
        return max