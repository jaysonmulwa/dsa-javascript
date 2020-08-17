//vertical and diagonal not complete
function wordCount(board, word) {
    
    let hor_c = 0;
    let ver_c = 0;
    let dia_c = 0;
    
    let y = board.length;
    
    let x = board[0].length;
    
    hor_c = hor(board, y, x, word); 
    ver_c = ver(board, y, x, word);  
    dia_c = dia(board, y, x, word);
    
    return hor_c + ver_c + dia_c;

}

function hor(board, y, x, word){
    
    
    //var all words;
    var wordd = "";
    
    let count = 0;
    
    for(let i = 0; i < y; i++){
        
        for(let j = 0; j < y; j++){
            
            wordd = wordd + board[i][j];
            
        }
        
        let exists = wordd.includes(word);
        
        if (exists){
            
            count++;
        }
        
        word = "";
        
        
    } 
    
    return count;
        
       
}

function ver(board, y, x, word){
    
    
    //var all words;
    var wordd = "";
    
    let count = 0;
    
    for(let i = 0; i < y; i++){
        
        for(let j = 0; j < y; j++){
            
            wordd = wordd + board[i][j];
            
        }
        
        let exists = wordd.includes(word);
        
        if (exists){
            
            count++;
        }
        
        word = "";
        
        
    } 
    
    return count;
        
       
}

function dia(board, y, x, word){
    
    
    //var all words;
    var wordd = "";
    
    let count = 0;
    
    for(let i = 0; i < y; i++){
        
        for(let j = 0; j < y; j++){
            
            wordd = wordd + board[i][j];
            
        }
        
        let exists = wordd.includes(word);
        
        if (exists){
            
            count++;
        }
        
        word = "";
        
        
    } 
    
    return count;
        
       
}

/*

Given a rectangular matrix of English lowercase letters board and a string word, your task is to find the number of occurrences of word in the rows(→), columns(↓) and diagonals(↘) of board.

Example

For

board = [['s', 'o', 's', 'o'],
         ['s', 'o', 'o', 's'],
         ['s', 's', 's', 's']]
and word = "sos", the output should be wordCount(board, word) = 3.

There are 2 occurrences of word starting from board[0][0](going → and ↘), and one starting from board[0][2](going ↓).

No other occurrences of word were counted, so the answer is 3.

For

board = [['a', 'a'],
         ['a', 'a']]
and word = "aa", the output should be
wordCount(board, word) = 5.

There are 2 horizontal, 2, vertical, and 1 diagonal occurrence of word, for a total of 5.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.char board

A rectangular matrix of lowercase English letters.

Guaranteed constraints:
1 ≤ board.length ≤ 100,
1 ≤ board[0].length ≤ 100,
board[i].length = board[0].length.

[input] string word

A string consisting of lowercase English letters.

Guaranteed constraints:
2 ≤ word.length ≤ 100.

[output] integer

The number of occurrences of word in the rows(→), columns(↓) and diagonals(↘) of board.
[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}


*/
