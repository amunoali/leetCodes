// Given the head of a singly linked list, reverse the list, and return the reversed list.


// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:

// Input: head = []
// Output: []


class LinkedList {
    constructor () {
      this.head = this.tail = null
    }
  
    append(value) {
  
      if (!this.tail) {
        this.head = this.tail = new Node(value)
      }
   
      else {
        let oldTail = this.tail
        this.tail = new Node(value)
        oldTail.next = this.tail
      }
    }
    reverseList(){
       let current = this.head
       let prev = null
       while (current) {
          const temp = current.next
          current.next = prev
          prev = current
          current = temp
      }
      return prev
    }
  }
  
  class Node {
    constructor (value, prev, next) {
      this.value = value
      this.next = next || null
     }
  }
  
  const list = new LinkedList()
  
  list.append(1)
  list.append(2)
  list.append(3) 

