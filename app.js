console.log("Hello World!\n==========\n");

// Exercise 1 Section

console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            continue;} else {
            console.log(i)
            }
        }
// Exercise 2 Section

console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log(i, "FIZZBUZZ");
    } else {
        if (i % 3 == 0) {
            console.log(i, "FIZZ");
        }
        if (i % 5 == 0) {
            console.log(i, "BUZZ");
        } else {
            console.log(i);
        }
    }
}
// Exercise 3

console.log("EXERCISE 3:\n==========\n");
let i = 1;
// While loop
while (i <= 100) {
    let output = "";

    if (i % 3 == 0) {
        output += "FIZZ";
    }

    if (i % 5 == 0) {
        output += "BUZZ";
    }

    console.log(`${i} ${output}`);

    i++;
}

let x = 1;
// do while loop
do {
    let output = "";

    if (x % 3 == 0) {
        output += "FIZZ";
    }

    if (x % 5 == 0) {
        output += "BUZZ";
    }

    console.log(`${x} ${output}`);

    x++;
} while (x <= 100);

// Exercise 4

let numberToFind = Math.round((Math.random() * 500)); 
// creates a random number between 0 and 500

let q = Math.round(Math.random() * (500 - 100) + 100); 
// creates a random number between 100 and 500

for (i = 1; i <= q; i++) {
    if(i == numberToFind) {
    console.log(`Found ${numberToFind}!`);
    break;
    }

    if(i == q) {
        console.log(`Did not find value ${numberToFind} from 1-${q}`);
    }
}

// Exercise 5

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (i = start; i <= end; i++) {
    let output = "";

if (i % fizzDivisor == 0) {
    output += "FIZZ"
}

if (i % buzzDivisor == 0) {
    output += "BUZZ"
}
    console.log(`${i} ${output}`);
}

console.log(fizzDivisor, buzzDivisor);