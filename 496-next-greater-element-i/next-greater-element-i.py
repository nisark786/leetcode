class Solution(object):
    def nextGreaterElement(self, nums1, nums2):
        res = []
        for num in nums1:
            index = nums2.index(num)
            greater = -1
            for i in range(index+1,len(nums2)):
                if num < nums2[i]:
                    greater = nums2[i]
                    break
            res.append(greater)
        return res


        