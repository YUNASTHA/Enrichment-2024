//add 2 numbers
function sumNumbers(num1, num2){
    return num1 + num2;
    
    }


console.log(sumNumbers( 50, 60));

//array loop

const array = ["a", "b", "c", "d", 5, 6, 7, 8, 9, 10];

for (i of array){
    console.log(i);
}

for (i in array){
    console.log(i);
}

for (let i= 0; i < 10; i++){ 
    console.log(i);

 console.log(array[5])
console.log(array.toString());
    for (j of array.toString()){
        console.log(typeof j);
    }
}

const nestedArray = [1,2,3,["a","b","c"], [4,5,6], "d", "e", "f", [7,8,9, ["g","h", "i"]]]

for (i of nestedArray){
    console.log("each nestedArray: " , i);
}

console





//Es6+
//arrow function

function someFunction() {}