class Solution:
    def generateTag(self, caption: str) -> str:
        arr = caption.strip().split(" ")
        acc = "#"+arr[0].lower()
        for i in arr[1:]:
            acc += i.capitalize()
        return acc[:100]
        