//Objective is to design a phone directory class with 3 methods:
//get: Returns the first available phone number and makes it unavailable
//check: Checks if a target phone number is available
//release: Makes the target phone number available again


//Get, Set, Release: O(n) since we are iterating through the entire list
//in worst case

class Node {
    constructor(val, next = null) {
        this.val = val 
        this.avail = true 
        this.next = next
    }
}

class PhoneDirectory {
    constructor(maxNumbers) {
        let newNode = new Node(-1)
        let temp = newNode 

        for (let i = 0; i < maxNumbers; i++) {
            temp.next = new Node(i)
            temp = temp.next
        }

        this.direc = newNode.next
    }

    get() {
        let curr = this.direc 

        while (curr) {
            if (curr.avail) {
                curr.avail = false
                return curr.val
            }

            curr = curr.next
        }

        return -1
    }

    check(val) {
        let curr = this.direc 

        while (curr) {
            if (curr.val == val) {
                return curr.avail
            }

            curr = curr.next
        }
    }

    release(val) {
        let curr = this.direc 

        while (curr) {
            if (curr.val == val) {
                curr.avail = true 
                return
            }

            curr = curr.next
        }
    }
}