//Predefined Classes
// \d (Matches any digit 0-9)
// Explanation: \d+ matches one or more digits. In this case, it matches "42".
const regex = /\d+/;
const str = "i have 233 apples"
console.log(str.match(regex));

// \D (Matches any non-digit)
// Explanation: \D+ matches one or more non-digit characters. It matches the parts of the string without numbers, like "I have " and " apples.".
const regex = /\D+/
const str = "i have 233 apples"
console.log(str.match(regex));

// \w (Matches any word character: a-z, A-Z, 0-9, _)
// Explanation: \w+ matches word characters. It matches "hello", which is the first word in the string.
const regex = /\w+/
const str = 'Hello world_123'
console.log(str.match(regex));

// \W (Matches any non-word character)
// Explanation: \W+ matches non-word characters, such as spaces or punctuation. Here it matches the space between "hello" and "world".
const regex = /\W+/
const str = 'Hello world_123'
console.log(str.match(regex));

// \s (Matches any whitespace character)
// Explanation: \s+ matches one or more whitespace characters. It matches the space between "hello" and "world".
const regex = /\s+/
const str = 'hello world great'
console.log(str.match(regex));

// [abc] (Matches any of a, b, or c)
// Explanation: [abc] matches either a, b, or c. In this case, it matches the first occurrence of "a".
const regex = /[abc]/
const str = "i am a cat"
console.log(str.match(regex));

// [^abc] (Matches any character except a, b, or c)
// Explanation: [^abc] matches any character except a, b, or c. In this case, it matches "p", which is not in the list a, b, or c.
const regex = /[^abc]/;
const str = "apple banana cat";
console.log(str.match(regex));

// [A-Za-z] (Matches any uppercase or lowercase letter)
// Explanation: [A-Za-z] matches any uppercase or lowercase letter. It matches "h", the first letter of "hello"
const regex = /[A-Za-z]/;
const str = "hello 123!";
console.log(str.match(regex));

