# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root:
            return root
        node_arr = [root]
        while (node_arr):
            node = node_arr.pop()
            if node:
                node.left, node.right = node.right, node.left
                node_arr.append(node.left)
                node_arr.append(node.right)
        return root