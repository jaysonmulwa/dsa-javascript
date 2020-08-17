//get binary
//convert to decimal
//add them
//convert answer back to binary
//rule is dont use inbuilt functions
//passing tests for small binary... but getting errors for big binary numbers

function addBinaryStrings(a, b) {
    
    var dec_a = converToDecimal(a);
    
    var dec_b = converToDecimal(b);
    
    var sum = Number(dec_a) + Number(dec_b);
    
    var final_result = converToBinary(sum);    
    

    return final_result;
    
}  
 
function converToDecimal(x){


    var totalz = 0;
    
    for(var i = 0; i < x.length; i++){
        
        var byte = x.charAt(x.length - (i + 1));
        
        if(byte == 1){
            var temp = Math.pow(2, i* parseInt(byte));
            totalz = totalz + temp;
        }
        
    }

    return totalz;
    
    
}

function converToBinary(x){

    
    let basetwo = "";
    let temp = x;
 
    while(temp > 0){
        
        if(temp % 2 == 0){
            basetwo = "0" + basetwo;
        }
        else {
            basetwo = "1" + basetwo;
        }

        temp = Math.floor(temp / 2);
    }

    return basetwo;
    
    
}
