class Solution(object):
    def findLengthOfLCIS(self, nums):
        count = 1
        temp = 1
        for i in range(0,len(nums)-1):
            if nums[i] < nums[i+1]:
                temp += 1
            else:
                count = max(count,temp)   
                temp = 1
        return max(count,temp)

        