// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was

// hello     world    my    name   is       raman
// After the program runs, the output should be
// hello world my name is raman


// removing spaces from the file

let stringwithspaces = "hello         I am";

let stringwithoutspaces = stringwithspaces.replace(/\s+/g,' ');
console.log(stringwithoutspaces);

