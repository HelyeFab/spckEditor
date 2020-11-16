// // Class

// class Stack {
//     // Constructor is method once we instantiate an object from this class
//     constructor() {
//         this.items = []
//         this.count = 0
//     }
//     // Add element to the top of the stack
//     push(element) {
//         this.items[this.count] = element
//         console.log(`${element} added to ${this.count}`);
//         this.count++
//         return this.count - 1
//     }

//     // Return and remove top element
//     // Return undefined if stack is empty
//     pop() {
//         if (this.count === 0) return undefined
//         let deleteItem = this.items[this.count - 1]
//         this.count--
//         console.log(`${deleteItem} removed`);
//         return deleteItem

        
//     }


// }

// // Object
// const stack = new Stack()


// stack.push(100);
// stack.push(200);
// stack.push(300);
// stack.push(400);

// stack.pop()




// const multiplication = multiply(5, 4);

// function multiply(a, b) {
//     return a*b
// }

// console.log(multiplication);


 console.log(secondThing());

function secondThing() {
    return firstThing() + " SECOND THING"
}

function firstThing() {
    return "FIRST THING"
}