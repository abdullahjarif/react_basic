// template string ``
const numbers = [10, 12, 30, 25, 50];
const employee = {
    name: 'abir',
    experience: '5 years',
    salary: '25000',
    usingLang: ['C++', 'C', 'python', 'JavaScript']
}

// template string
const about_me = `my name is ${employee.name} salary of ${employee.salary} now use language ${employee.usingLang[2]}`;

console.log(about_me);

// arrow function
const getNum = () => 55;

const addVal = num => num + 65;

const isEven = x => x % 2 === 0; // even check

const isOdd = x => x % 2 !== 0; // odd check


// multiple parameter 
const addNumbers = (x,y,z) => x + y + z;

// multiline arrow function
const multiLineArrowFunc = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}


// spread operator
const newNums = [...numbers];
console.log(newNums);

numbers.push(75);
console.log(newNums);

// concept for spread operator
const arr1 = [1, 10, 20];
const arr2 = [11, 12, 15];
console.log(...arr1, ...arr2);

console.log(...arr1, 26,28);






