// 🔹 Basic String Questions

// Reverse a string
// Check if a string is palindrome
// Count vowels and consonants in a string
// Find length of string without using .length
// Convert first letter of each word to uppercase
// Remove spaces from a string
// Remove duplicate characters from string
// Find frequency of each character
// Check if two strings are anagrams
// Count number of words in a string



// 🔹 Medium Level (Important for Interviews)

// Find first non-repeating character
// Find first repeating character
// Check if string is rotation of another string
// Check if string contains only digits
// Find longest word in a sentence
// Find longest substring without repeating characters
// Check if two strings are isomorphic
// Compress string (e.g., "aaabb" → "a3b2")
// Remove all special characters
// Find all substrings of a string



// 🔹 Pattern-Based / Sliding Window

// Longest palindromic substring
// Count occurrences of a substring
// Smallest window containing all characters of another string
// Check if one string is subsequence of another
// Group anagrams



// 🔹 Tricky Interview Questions

// Reverse words in a sentence
// Check balanced parentheses
// String to integer (implement atoi)
// Find common characters between two strings
// Minimum insertions to make string palindrome















////String Methods

// 🔹 1. Basic String Methods

// 1️⃣ length
// What it does: Returns total number of characters (including spaces).
// Returns: Number
// let str = "Hello";
// console.log(str.length); // 5

// 2️⃣ toUpperCase()
// What it does: Converts string to uppercase.
// Returns: New string
// "hello".toUpperCase(); // "HELLO"

// 3️⃣ toLowerCase()
// What it does: Converts string to lowercase.
// Returns: New string
// "HELLO".toLowerCase(); // "hello"

// 4️⃣ trim()
// What it does: Removes spaces from start and end.
// Returns: New string
// "  hello  ".trim(); // "hello"

// 5️⃣ trimStart() / trimEnd()
// What it does: Removes spaces only from start / end.
// Returns: New string
// "  hello  ".trimStart(); // "hello  "

// 🔹 2. Searching Methods

// 6️⃣ indexOf(value)
// What it does: Finds first position of value.
// Returns: Index number OR -1 if not found
// "hello".indexOf("l"); // 2

// 7️⃣ lastIndexOf(value)
// What it does: Finds last position.
// Returns: Index number OR -1
// "hello".lastIndexOf("l"); // 3

// 8️⃣ includes(value)
// What it does: Checks if value exists.
// Returns: true / false
// "hello".includes("he"); // true

// 9️⃣ startsWith(value)
// What it does: Checks starting characters.
// Returns: true / false
// "hello".startsWith("he"); // true

// 🔟 endsWith(value)
// What it does: Checks ending characters.
// Returns: true / false
// "hello".endsWith("lo"); // true

// 🔹 3. Extracting Methods

// 1️⃣1️⃣ slice(start, end)
// What it does: Extracts part of string.
// Returns: New string
// "hello".slice(1, 4); // "ell"
// 👉 Supports negative index:
// "hello".slice(-2); // "lo"

// 1️⃣2️⃣ substring(start, end)
// What it does: Extracts substring.
// Returns: New string
// "hello".substring(1, 4); // "ell"
// 👉 Does NOT support negative values.

// 1️⃣3️⃣ substr(start, length)
// What it does: Extract using length.
// Returns: New string
// "hello".substr(1, 2); // "el"
// ⚠️ Old method (not recommended).

// 🔹 4. Replacing Methods

// 1️⃣4️⃣ replace(old, new)
// What it does: Replaces first match only.
// Returns: New string
// "hello hello".replace("hello", "hi");
// // "hi hello"

// 1️⃣5️⃣ replaceAll(old, new)
// What it does: Replaces all matches.
// Returns: New string
// "hello hello".replaceAll("hello", "hi");
// // "hi hi"

// 🔹 5. Conversion & Other Methods

// 1️⃣6️⃣ split(separator)
// What it does: Converts string into array.
// Returns: Array
// "hello world".split(" ");
// // ["hello", "world"]

// 1️⃣7️⃣ concat()
// What it does: Joins strings.
// Returns: New string
// "Hello".concat(" ", "World");
// // "Hello World"

// 1️⃣8️⃣ repeat(n)
// What it does: Repeats string n times.
// Returns: New string
// "hi".repeat(3);
// // "hihihi"

// 🔹 6. Character Methods

// 1️⃣9️⃣ charAt(index)
// What it does: Gets character at index.
// Returns: Character
// "hello".charAt(1); // "e"

// 2️⃣0️⃣ charCodeAt(index)
// What it does: Returns ASCII code.
// Returns: Number
// "hello".charCodeAt(0); // 104

// 2️⃣1️⃣ at(index)
// What it does: Gets character (supports negative index).
// Returns: Character
// "hello".at(-1); // "o"

// 🔹 7. Padding Methods

// 2️⃣2️⃣ padStart(length, value)
// What it does: Adds characters at start.
// Returns: New string
// "5".padStart(3, "0"); // "005"

// 2️⃣3️⃣ padEnd(length, value)
// What it does: Adds characters at end.
// Returns: New string
// "5".padEnd(3, "0"); // "500"



// for...of
// 👉 Used to iterate over values
// 👉 Works with iterable objects (Array, String, Map, Set)

// Example with String
// let str = "sachin";

// for (let ch of str) {
//     console.log(ch);
// }

// Output:
// s
// a
// c
// h
// i
// n

// for...in
// 👉 Used to iterate over keys / indexes
// 👉 Mainly used for objects

// Example with String
// let str = "sachin";

// for (let index in str) {
//     console.log(index);
// }

// Output:
// 0
// 1
// 2
// 3
// 4
// 5
 
// 🚀 Important Interview Concept
// 👉 Strings are immutable in JavaScript.
// All these methods return a new string.
// They do NOT change the original string.
// let str = "hello";
// str.toUpperCase();
// console.log(str); // still "hello"

// If you’re preparing for frontend interviews, next you should practice:
// Reverse a string
// Check palindrome
// Count vowels
// Remove duplicates
// Find frequency of characters