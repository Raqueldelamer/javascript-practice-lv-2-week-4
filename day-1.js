
// Welcome to the Array Building and For Loop Practice Exercise!
// In this exercise, you'll build arrays using the `push` method and interact with them using a for loop.
// You'll be using factory functions to create objects and methods to manipulate those objects.

// TODO: First, familiarize yourself with the two factory functions provided below:


// Factory function to create a book
function createBook(title, author) {
    return {
        title,
        author,
        
        showDetails() {
            console.log(`"${this.title}" by ${this.author}.`);
        }
    };
}

// Factory function to create a task
function createTask(description, dueDate) {
    return {
        description,
        dueDate,
        completed: false,
        completeTask() {
            this.completed = true;
            console.log(`Task "${this.description}" is now completed.`);
        }
    };
}

// Now, let's move on to the exercises!

// EXERCISE 1: Building a Book Collection
// INSTRUCTIONS: Create an empty array called `bookCollection`.
// Use the `push` method to add 3 books to the array using the `createBook` factory function.
// Then, use a for loop to display the details of each book using the `showDetails` method.

// EXAMPLE:
// const exampleBookCollection = [];
// exampleBookCollection.push(createBook('Pride and Prejudice', 'Jane Austen'));
// exampleBookCollection.push(createBook('1984', 'George Orwell'));
// exampleBookCollection.push(createBook('To Kill a Mockingbird', 'Harper Lee'));

// for (let i = 0; i < exampleBookCollection.length; i++) {
//     exampleBookCollection[i].showDetails();
// }

// TODO: Now, you try building your own book collection with different books!
console.log("\nToDo 1")

let bookCollection = [];
bookCollection.push(createBook("On the Road", "Jack Kerouac", 1957));
bookCollection.push(createBook("The Stranger", "Albert Camus", 1942));
bookCollection.push(createBook("Peter Pan", "James Barrie", 1904));

for (let i=0; i<bookCollection.length; i++) {
    let book = bookCollection[i];
    book.showDetails();
    //same code as above
    //bookCollection[i].showDetails();
}
// EXERCISE 2: Managing a Task List
// INSTRUCTIONS: Create an empty array called `taskList`.
// Use the `push` method to add 3 tasks to the array using the `createTask` factory function.
// Then, use a for loop to mark each task as completed using the `completeTask` method.
// EXAMPLE:
// const exampleTaskList = [];
// exampleTaskList.push(createTask('Write a report', '2024-08-30'));
// exampleTaskList.push(createTask('Grocery shopping', '2024-08-31'));
// exampleTaskList.push(createTask('Call the bank', '2024-09-01'));

// for (let i = 0; i < exampleTaskList.length; i++) {
//     exampleTaskList[i].completeTask();
// }
console.log("\nToDo 2")

let taskList = [];
taskList.push(createTask('Buy cat food', '8-20-2024'));
taskList.push(createTask('Do homework', '8-20-2024'));
taskList.push(createTask('Doctor Appt', '8-21-2024'));

for (let i = 0; i < taskList.length; i++) {
    let task = taskList[i];
    task.completeTask();

    // taskList[i].completeTask();
};

// EXERCISE 3: Updating Book Titles
// INSTRUCTIONS: Create an empty array called `library`.
// Use the `push` method to add 3 books to the array using the `createBook` factory function.
// Then, use a for loop to update the title of each book by adding " - Second Edition" to the end of the title.
// EXAMPLE:
// const exampleLibrary = [];
// exampleLibrary.push(createBook('The Great Gatsby', 'F. Scott Fitzgerald'));
// exampleLibrary.push(createBook('Brave New World', 'Aldous Huxley'));
// exampleLibrary.push(createBook('Moby Dick', 'Herman Melville'));

// for (let i = 0; i < exampleLibrary.length; i++) {
//     exampleLibrary[i].title += ' - Second Edition';
//     exampleLibrary[i].showDetails(); // Showing the updated title
// }

// TODO: Now, you try updating the titles of your own library!
console.log("\nToDo 3")
let smallLibrary = [];
smallLibrary.push(createBook('Pulp', 'Charles Bukowski'));
smallLibrary.push(createBook('Hiroshima Mon Amour', 'Marguerite Duras'));
smallLibrary.push(createBook('Synchronicity', 'Carl Jung'));

for (let i = 0; i < smallLibrary.length; i++) {
    let library = smallLibrary[i];

    library.showDetails();
    // smallLibrary[i].showDetails();
    smallLibrary[i].title += ' - Second Edition';
    console.log("Updated Title = " + smallLibrary[i].title);
}

// EXERCISE 4: Rescheduling Tasks
// INSTRUCTIONS: Create an empty array called `taskList`.
// Use the `push` method to add 3 tasks to the array using the `createTask` factory function.
// Then, use a for loop to reschedule each task by changing its due date to one day later.

// EXAMPLE:
// const exampleTaskList = [];
// exampleTaskList.push(createTask('Finish project', '2024-09-10'));
// exampleTaskList.push(createTask('Visit the dentist', '2024-09-11'));
// exampleTaskList.push(createTask('Submit assignment', '2024-09-12'));
// for (let i = 0; i < exampleTaskList.length; i++) {
//     let oldDate = new Date(exampleTaskList[i].dueDate);
//     let newDate = new Date(oldDate.setDate(oldDate.getDate() + 1));
//     exampleTaskList[i].dueDate = newDate.toISOString().split('T')[0];
//     console.log(`New due date for "${exampleTaskList[i].description}": ${exampleTaskList[i].dueDate}`);
// }

// TODO: Now, you try rescheduling your own tasks!

console.log("\nToDo 4")
taskList.push(createTask('Clean house', '8-20-2024'));
taskList.push(createTask('Take out trash', '8-20-2024'));
taskList.push(createTask('Water garden', '8-21-2024'));

for (let i = 0; i < taskList.length; i++) {
    let oldDate = new Date(taskList[i].dueDate);
    let newDate = new Date(oldDate.setDate(oldDate.getDate() + 1));
    taskList[i].dueDate = newDate.toISOString().split('T') [0];
    console.log(`New due date to "${taskList[i].description}": ${taskList[i].dueDate}`);
}

// EXERCISE 5: Counting Completed Tasks
// INSTRUCTIONS: Create an empty array called `taskList`.
// Use the `push` method to add 3 tasks to the array using the `createTask` factory function.
// Use a for loop to mark only 2 tasks as completed. Then, use another for loop to count and display
// how many tasks have been completed.

// EXAMPLE:
// const exampleTaskList = [];
// exampleTaskList.push(createTask('Clean the house', '2024-09-15'));
// exampleTaskList.push(createTask('Pay electricity bill', '2024-09-16'));
// exampleTaskList.push(createTask('Prepare presentation', '2024-09-17'));
console.log("\nToDo 5")
taskList.push(createTask('Do laundry', '8-20-2024'));
taskList.push(createTask('Buy groceries', '8-20-2024'));
taskList.push(createTask('Go jogging', '8-21-2024'));

taskList[0].completeTask();
taskList[2].completeTask();
taskList[4].completeTask();
taskList[5].completeTask();
taskList[6].completeTask();
taskList[7].completeTask();
taskList[8].completeTask();

let completedCount = 0;
for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].completed) {
        completedCount++;
    }
}
console.log(`Number of completed tasks: ${completedCount}.`);
// exampleTaskList[0].completeTask(); // Mark first task as completed
// exampleTaskList[2].completeTask(); // Mark third task as completed

// let completedCount = 0;
// for (let i = 0; i < exampleTaskList.length; i++) {
//     if (exampleTaskList[i].completed) {
//         completedCount++;
//     }
// }
// console.log(`Number of completed tasks: ${completedCount}`);

// TODO: Now, you try counting the completed tasks in your own task list!


// Great job! You've completed the exercises.
// Feel free to experiment further with the factory functions and loops to create more complex arrays and interactions.
