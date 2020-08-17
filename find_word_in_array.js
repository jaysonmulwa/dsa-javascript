
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
