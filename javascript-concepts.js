// String Methods
const str = "Hello, World!";
document.getElementById("string-methods-demo").textContent = `
    Original String: "${str}"
    Length: ${str.length}
    Uppercase: ${str.toUpperCase()}
    Lowercase: ${str.toLowerCase()}
    Substring: ${str.substring(0, 5)}
    Replace: ${str.replace("World", "JavaScript")}
`;

// Number Methods
const num = 42.75;
document.getElementById("number-methods-demo").textContent = `
    Original Number: ${num}
    Fixed to 2 Decimal Places: ${num.toFixed(2)}
    To Exponential: ${num.toExponential(2)}
    Parsing Int: ${parseInt("42.75")}
    Parsing Float: ${parseFloat("42.75")}
`;

// Array Methods
const numbersArray = [1, 2, 3, 4, 5];
const stringsArray = ["apple", "banana", "cherry"];
document.getElementById("array-methods-demo").textContent = `
    Original Numbers Array: [1, 2, 3, 4, 5]
    Original Strings Array: ["apple", "banana", "cherry"]
    Join: ${numbersArray.join(", ")}
    Concatenate: ${numbersArray.concat(stringsArray)}
    Reverse: ${numbersArray.reverse()}
    Sort (ascending): ${numbersArray.sort((a, b) => a - b)}
    Find: ${numbersArray.find(num => num > 3)}
`;

// Date Methods
const currentDate = new Date();
document.getElementById("date-methods-demo").textContent = `
    Current Date: ${currentDate.toDateString()}
    Current Time: ${currentDate.toTimeString()}
    Date in ISO format: ${currentDate.toISOString()}
    Year: ${currentDate.getFullYear()}
    Month: ${currentDate.getMonth() + 1}
`;

// Function Methods
function greet(name) {
    return `Hello, ${name}!`;
}
document.getElementById("function-methods-demo").textContent = `
    Function: function greet(name) {
        return "Hello, " + name + "!";
    }
    Call the function: ${greet("John")}
`;
