// Welcome to the State Object Practice Exercise!
// In this exercise, you'll be working with a global object called `state`.
// You'll practice adding items to the `state` object and interacting with it using console logs and tables.

// Let's start by creating the global `state` object.
// Note: You don't have to create another state object. Only one `state` object will exist in this file. That is why we call it "global"

let state = {}
    state.name = 'Alice Smith';
    state.email = 'alice@gmail.com';
    state.zipCode = '10000';

    console.log('State', state);
    console.table(state);

    console.log('name:', state.name);
    console.log('email:', state.email);
    console.log('zipCode:', state.zipCode);





// EXERCISE 1: Updating Basic Information
// INSTRUCTIONS: Add properties `name`, `email`, and `zipCode` to the `state` object and assign them appropriate values.
// Then, log the entire `state` object to the console using `console.log` and `console.table`.
// Access and log each property individually as well.

// EXAMPLE:
// state.name = 'Alice Smith';
// state.email = 'alice@example.com';
// state.zipCode = '12345';

// console.log('State:', state);
// console.table(state);

// console.log('Name:', state.name);
// console.log('Email:', state.email);
// console.log('Zip Code:', state.zipCode);

// TODO: Now, you try updating the `state` object with your own values for `name`, `email`, and `zipCode`!
console.log("\nToDo 1")
let state1 = {}
    state1.name = 'Simone Debeauvoir';
    state1.email = 'simone@gmail.com';
    state1.zipCode = '10000';

    console.log('State1', state1);
    console.table(state1);

    console.log('name:', state1.name);
    console.log('email:', state1.email);
    console.log('zipCode:', state1.zipCode);



// EXERCISE 2: Adding More Personal Information
// INSTRUCTIONS: Add properties `age`, `phoneNumber`, and `address` to the `state` object and assign them appropriate values.
// Log the entire `state` object to the console again using both `console.log` and `console.table`.
// Access and log each new property individually as well.
console.log("\nToDo 2")

    state1.age = '78';
    state1.phoneNumber = '888-999=000';
    state1.address = '1234 Jena St.';
// EXAMPLE:
// state.age = 30;
// state.phoneNumber = '555-1234';
// state.address = '123 Main St, Springfield';
console.log('State1', state1);
console.table(state1);
// console.log('State:', state);
// console.table(state);
console.log('Age:', state1.age);
console.log('Phone Number:', state1.phoneNumber);
console.log('Address:', state1.address);


// console.log('Age:', state.age);
// console.log('Phone Number:', state.phoneNumber);
// console.log('Address:', state.address);

// TODO: Now, you try updating the `state` object with your own values for `age`, `phoneNumber`, and `address`!

console.log('\nToDo3')
// EXERCISE 3: Creating a List of Favorite Movies
// INSTRUCTIONS: Add a property `favoriteMovies` to the `state` object that is an array of strings representing movie titles.
// Use `console.log` to log the entire `state` object, and use `console.table` to log the `favoriteMovies` array.
// Log each movie title individually using a loop.
    state.favoriteMovies = ['The Alchemist', 'Steel Magnolias', 'Dracula', 'Beetlejuice'];

    console.log('State1', state1);
    console.table(state.favoriteMovies);
    
    for (let i = 0; i < state.favoriteMovies.length; i++) {
             console.log(`Movie ${i + 1}:`, state.favoriteMovies[i]);
}



// EXAMPLE:
// state.favoriteBooks = ['Pride and Prejudice', '1984', 'To Kill a Mockingbird'];

// console.log('State:', state);
// console.table(state.favoriteBooks);

// for (let i = 0; i < state.favoriteBooks.length; i++) {
//     console.log(`Book ${i + 1}:`, state.favoriteBooks[i]);
// }

// TODO: Now, you try creating your own list of favorite movies and logging them to the console!


// EXERCISE 4: Creating a List of Recent Purchases
// INSTRUCTIONS: Add a property `recentPurchases` to the `state` object that is an array of numbers representing purchase amounts.
// Use `console.log` to log the entire `state` object, and use `console.table` to log the `recentPurchases` array.
// Log each purchase amount individually using a loop.
console.log('\nToDo4')
// EXAMPLE:
// state.recentTemperatures = [72, 75, 80, 68];
    state.recentPurchases = [10, 15, 32];

    console.log('State1', state1);
    console.table(state.recentPurchases);

// console.log('State:', state);
// console.table(state.recentTemperatures);
for (let i = 0; i < state.recentPurchases.length; i++) {
    console.log(`Purchases ${i + 1}:`, state.recentPurchases[i]);
}

// for (let i = 0; i < state.recentTemperatures.length; i++) {
//     console.log(`Temperature ${i + 1}:`, state.recentTemperatures[i]);
// }

// TODO: Now, you try creating your own list of recent purchases and logging them to the console!
console.log('\nToDo5')

// EXERCISE 5: Adding Hobbies and Interests
// INSTRUCTIONS: Add a property `hobbies` to the `state` object that is an array of strings representing different hobbies or interests.
// Use `console.log` to log the entire `state` object, and use `console.table` to log the `hobbies` array.
// Log each hobby individually using a loop.
state.hobbies = ['Reading','Photography', 'Gardening'];
// EXAMPLE:
// state.skills = ['JavaScript', 'HTML', 'CSS'];
console.log('State1:', state1);
console.table(state.hobbies);
// console.log('State:', state);
// console.table(state.skills);
for (let i = 0; i < state.hobbies.length; i++) {
    console.log(`Hobbies: ${i + 1}:`, state.hobbies[i]);
}

// for (let i = 0; i < state.skills.length; i++) {
//     console.log(`Skill ${i + 1}:`, state.skills[i]);
// }

// TODO: Now, you try adding your own hobbies to the `state` object and logging them to the console!


// Excellent work! You've completed the exercises.
// Keep experimenting with the `state` object by adding more properties and interacting with them using logs and tables.