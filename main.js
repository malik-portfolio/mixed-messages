const quotes = require("./quotes.js");

// Get random quote
const randomIndex = Math.floor(Math.random() * quotes.length);
const quote = quotes[randomIndex];

// Print quote with author name
console.log(`\n${quote.en}\n`);
console.log(`Author: ${quote.author}\n`);
