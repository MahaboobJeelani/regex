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

// Quantifiers
// The a* matches zero or more occurrences of a. It greedily matches all as in the string.
const regex = /a*/
const str = "aaa"
console.log(str.match(regex));

// Greedy by default: Matches at least one occurrence and as many as possible.
// Explanation: The a+ matches one or more as. It matches the entire "aaa".
const regex = /a+/
const str = "aaa"
console.log(str.match(regex));

// Greedy by default: Matches zero or one occurrence.
// Explanation: The a? matches zero or one a. It matches "bad" because a is present.
const regex = /ba?d/
const str = "bad"
console.log(str.match(regex));

// (Matches exactly n times)
// Explanation: The a{3} matches exactly three as. It matches "aaa".
const regex = /a{3}b{3}/
const str = "aaabbbbccc"
console.log(str.match(regex));

// {n,} (Matches at least n times)
// Explanation: The a{2,} matches at least two as. It matches all "aaa".
const regex = /a{2,}/
const str = "aaa"
console.log(str.match(regex));

// {n,m} (Matches between n and m times)
// Explanation: The a{1,2} matches between 1 and 2 as. It matches the first two as.
const regex = /a{1,3}/
const str = "aaaaa"
console.log(str.match(regex));

// Explanation: The a*? matches zero or more as, but lazily. It stops at the first possible match: the empty string before the first a.
const regex = /a*?/
const str = "aaa"
console.log(str.match(regex));

// Explanation: The a+? matches one or more as, but lazily. It stops at the first a.
const regex = /ab+?/
const str = "abbb"
console.log(str.match(regex));

// Explanation: The a?? matches zero or one a, but lazily. It prefers zero occurrences, so it matches "bd"
const regex = /ba??d/;
const str = "bd";
console.log(str.match(regex));

// Explanation: The a{1,3}? matches between 1 and 3 as, but lazily. It stops at the minimum match: one a.
const regex = /a{1,3}?/;
const str = "aaa";
console.log(str.match(regex)); 

// Explanation: The .* greedily matches everything between the first and last quotes.
const regex = /".*"/;
const str = '"hello" "world"';
console.log(str.match(regex)); 

// Explanation: The .*? lazily matches the fewest characters, stopping at the first closing quote.
const regex = /".*?"/;
const str = '"hello" "world"';
console.log(str.match(regex));