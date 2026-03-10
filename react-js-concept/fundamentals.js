// how to declare variable using let and const
/**
 * if value fixed use const
 */

const name = "Arnold";
let season = "rainy";
season = 'winter';

// 2. condition
// 6 basic conditons: <>, =, !==, <=, >=
// multiple conditions && ||

if(fathername === "arnold" || season === "winter"){

}
else if(season === "winter"){

}else{

}

// 3. Array
// index
// length, push
const numbers = [12, 10, 15, 25];
numbers[0] = 56;
console.log(numbers);


// 4. for Loop
for(let i = 0; i<length; i++){
    const num = numbers[i];
    console.log(i);
    
}


// 5. function
function multyply(a,b){
    const result = a*b;
    return result;
}

const output = multyply(4,5);
console.log(output);


// 6. object
// 3 ways to access property
const student = {
    name: "abdullah jarif",
    age: 25,
    learnCourse: ['java', 'c++', 'C#']
}

const myVar = 'name';

// 1
console.log(student.name); // direct by property

// 2
console.log(student['name']); // access via property string 

// 3
console.log(myVar);







