// fs file system : reading writing data to file system 
// is a built in module and returns us the obj 
const fs =require ('fs'); // fs require returned us object and we stored in the variable fs 
const textIn = fs.readFileSync('./txt/input.txt','utf-8');         //synchronus version of reading file (1st path, 2nd character encoding)- we can use buffer in 2nd
// console.log(textIn); // successsfull 

const textOut = `this is we can use ${textIn} lorem inside our txt file.\nCreated on ${Date.now().toLocaleString()}`; // $ we can pass any js exp 
fs.writeFileSync('./txt/output.txt',textOut);
// console.log('file written succesfully');

// read and write in node js done synchronusly///////////////////////// 
// each statement executed line by line sync  - blocking code 



// >> now read file aysnc 
fs.readFile('./txt/start.txt','utf-8', (err, dataPass) => {
    console.log(dataPass);
    // console.log(err); // if there is no error it will print null 
}); // (1st path,2nd character encode, 3nd callback function (1st error: useually first one, 2nd data itself =))

console.log('will read file'); // it got printed first and then readfile : async run // it didnt blocked the code 
 





