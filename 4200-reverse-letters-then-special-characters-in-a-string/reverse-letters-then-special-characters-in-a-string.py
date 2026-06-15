class Solution:
    def reverseByType(self, s: str) -> str:
        charecters = "!@#$%^&*()"
        special = []
        a= 0
        b= 0
        letter = []
        result = []
        for i in range(len(s)-1,-1,-1):
            if s[i] in charecters:
                special.append(s[i])
            else:
                letter.append(s[i])
        for i in range(len(s)):
            if s[i] in charecters:
                result.append(special[a])
                a +=1
            else:
                result.append(letter[b])
                b+=1
        final = ""
        for i in range(len(result)):
            final+=result[i]
        return final