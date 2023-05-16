class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
    #dict for keeping order
        map = {}
        for i, num in enumerate(nums):
            #store val
            complement = target - num
            if complement in map:
                return [map[complement], i]
            else:
                #just store usual val
                map[num] = i