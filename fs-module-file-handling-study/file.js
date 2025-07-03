import fs from 'fs';
import os from 'os';

console.log(os.cpus().length);


// // Sync.... Blocking Operation
// fs.writeFileSync('./sample-text.txt', 'Hello Node');

// // Async.... Non-blocking operation
// fs.writeFile('./sample-text.txt', 'Hello Node thourgh async', (err) => {})

const result = fs.readFileSync('./sample-text.txt', 'utf-8')
// console.log(result);
// console.log('1');
