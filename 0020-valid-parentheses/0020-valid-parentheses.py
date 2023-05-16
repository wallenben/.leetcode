class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        lost_brackets = []
        for i in s:
            if i in ("(", "[", "{"):
                stack.append(i)
            elif i in (")", "]", "}"):
                #check for edgecase:
                lost_brackets.append(i)
                if len(stack) == 0: return False
                if i == ")" and stack[-1] == "(":
                    stack.pop(-1)
                    lost_brackets.pop(-1)
                elif i == "]" and stack[-1] == "[":
                    stack.pop(-1)
                    lost_brackets.pop(-1)
                elif i == "}" and stack[-1] == "{":
                    stack.pop(-1)
                    lost_brackets.pop(-1)
        return len(stack) == 0 and len(lost_brackets) == 0