let regexp = /^[A-Z]/;
let text = 'jAne';

console.log(regexp);
console.log('--------1---------');

console.log(regexp instanceof RegExp);
console.log('--------2---------');

console.log(regexp.test());
console.log('--------3---------');

console.log(regexp.test(text));
console.log('--------4---------');

function upperCaseCheck(text) {
    let regexp = /^[A-Z]/;
    if (regexp.test(text)) {
        alert('Word with upper case was found');
    } else {
        alert('NO word with upper case found');
    }
}
upperCaseCheck('toms');
upperCaseCheck('Toms');
console.log('--------5---------');

for (let i = 0; i <= 4; i++) {
    if (i % 2 === 0) {
        console.log('Number is Even ' + i)
    } else {
        console.log('Number is Odd ' + i)
    }
}
console.log('--------6---------');

let stringNum = '4';

typeof stringNum
console.log(typeof stringNum);

let num = parseInt(stringNum);
console.log(num);
console.log(typeof num);
console.log('--------7---------');

let nums = prompt('');
if (nums === '0') {
    console.log('This is number 1 ' + nums);
}
console.log('--------8---------');

for (let i = 0; i < 5; i++) {
    if (i % 2 === 0) {
        console.log('Even number');
    } else {
        console.log('Odd number');
    }
}

function checkValue() {
    let inputValue = document.getElementById('numToCheck').value;
    let answerField = document.getElementById('result');
    if (inputValue < 0 || inputValue > 4) {
        answerField.innerText = 'Wrong number';
    } else if (inputValue % 2 === 0) {
        answerField.innerText = 'Number' + inputValue + ' is even';
    } else {
        answerField.innerText = 'Number' + inputValue + ' is odd';
    }
}
console.log('-------- Task-students-marks ---------');

let students = [
    { student: 'David', mark: 80 },
    { student: 'Vinoth', mark: 77 },
    { student: 'Divyra', mark: 88 },
    { student: 'Ishitha', mark: 95 },
    { student: 'Thomas', mark: 68 },
    { student: 'Ann', mark: 101 },
    { student: 'Peter', mark: 20 }
];
console.log(students);

function checkMark(mark) {
    if (mark < 50) {
        console.log("Failed");
    } else if (mark < 60) {
        console.log("less then 60 is F");
    } else if (mark <= 70) {
        console.log('range 60-70 is D');
    } else if (mark < 80) {
        console.log("range 70-80 is C");
    } else if (mark < 90) {
        console.log("range 80-90 is B");
    } else if (mark <= 100) {
        console.log("range 90-100 is A");
    } else if (mark > 100) {
        console.log("Not possible - mistake");
    } else {
        console.log("NO result");
    }
}

for (let i = 0; i < students.length; i++) {
    checkMark(students[i].mark);
}

/*
let result = '';

if (result < 60) {
    console.log("F");
} else if (result < 70 > 60) {
    console.log("D");
} else if (result < 80 > 70) {
    console.log("C");
} else if (result < 90 > 80) {
    console.log("B");
} else if (result < 100 > 90) {
    console.log("A");
} else {
    console.log("NO result");
}
*/