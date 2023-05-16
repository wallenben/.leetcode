class Solution:
    def isValid(self, s: str) -> bool:
       #place closing brackets, map to find out what works
        stack = []
        map = {"(": ")", "[": "]",  "{": "}"}
        for i in s:
            #if i is a key
            if i in map:
                #append the paran
                stack.append(map[i])
            elif i in (")", "]", "}"):
                #if the stack doesn't have an init paren or it doesn't equal the end
                if (len(stack) == 0 or i != stack.pop()):
                    return False
        return len(stack) == 0