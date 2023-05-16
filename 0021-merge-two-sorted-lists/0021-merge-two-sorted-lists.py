# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        head = ListNode(0)
        value = head
        while list1 and list2:
            if list1.val <= list2.val:
                value.next = list1
                list1 = list1.next
            else: 
                value.next = list2
                list2 = list2.next
            #move to next spot in list
            value = value.next
        if list1 is not None:
            value.next = list1
        elif list2 is not None:
             value.next = list2
                
        return head.next