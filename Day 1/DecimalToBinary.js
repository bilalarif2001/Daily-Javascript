// Create a function that will convert a base 10 decimal number to base 2 binary number.

function decimalToBinary(number){

    let binary= ""
    let reverseBinary= "";


    while (number>1){
         binary= binary+ ""+number%2;
        number=Math.trunc(number/2);
    }

    if (number==1){
        binary= binary+ 1;
    }
    else {
        binary= binary+ 0;
    }

    for (let i=binary.length-1; i>=0; i--){
reverseBinary = reverseBinary+binary[i];
    }


    return reverseBinary;
 
    

    }
  console.log("Binary:"+ decimalToBinary(10));