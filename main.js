'use strict'; //strict mode


let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :)");

// strict mode reserves words for instance you can't use words like const private 

//functions 
//A function is block of code we  can reuse 

function newFunction() {
    const A = 20;
    const B = 23;
    console.log(A + B)
}

newFunction();
newFunction();
newFunction();// we called the function 3 times

function fruitProcessor(apples, oranges) {
    const juice = `your juice contains ${apples} apples and ${oranges} oranges`;
    return juice;  // so if we do not return juice we can't use this data stored inside the variable juice outside the code block 
}

const fruitJuice = fruitProcessor(20, 30);
console.log(fruitJuice);

const fruitJuiceII = fruitProcessor(2, 0);
console.log(fruitJuiceII);

function fruitMachine(apples, oranges) {
    const myFruit = `our fruit machine added ${apples} apples and ${oranges}`
    console.log(myFruit)
}
fruitMachine(20, 0)

const diffApple = fruitMachine(20, 0);
console.log(diffApple)
// so the return key word makes it possible for use to reuse the data stored inside the variable outside the function code block 


function calcAge1(birthyear) {  //function declaration
    const myAgeI = 2023 - birthyear
    return myAgeI
}
const ageI = calcAge1(2000);
console.log(ageI)


function calcAge2(birthyear) {
    return 2023 - birthyear
    //we can do this since we are returning a single value instead of storing it inside a variable 
}

const ageII = calcAge2(1995)
console.log(`I am ${ageII} years old :)`)



//function expression 
const ageIII = function (birthyear) { //function expression
    return 2055 - birthyear
}
const ageIV = ageIII(1983);
console.log(ageIV);

//expressions produces values

//the difference between function declaration and expression is that function declaration you can call the function or invoke the function before defining the function...

//Arrow functions 

const calAge3 = birthyear => 2057 - birthyear
const ageV = calAge3(1992)
console.log(ageV)



const yearsUntilRetirement = birthyear => { //arrow function
    const dateOfBirth = 2057 - birthyear;
    const numberOfworkingYears = 10;
    const retirementAge = dateOfBirth - numberOfworkingYears;
    return retirementAge;
}

const retirementAgeInfo = yearsUntilRetirement(1992)
console.log(`Jonas retired at the age of ${retirementAgeInfo} years :)`)

const yearsUntilRetirementII = (birthyear, firstName) => {
    const dateOfBirth = 2057 - birthyear;
    const numberOfworkingYears = 10;
    const retirementAgeII = dateOfBirth - numberOfworkingYears;
    return `${firstName} retired at ${retirementAgeII}`;
}

const retirementAgeInfoII = yearsUntilRetirementII(1993, 'Bob')
console.log(retirementAgeInfoII)

// The 'this' key word can not be used in the arrow function



//Function calling other functions 
//Task: We have a food processor but the fruit processor needs a fruit machine to cut the fruits into smaller pieces 


//frui machine 

function cutFruitPieces(fruit) {
    return fruit * 4
}

function fruitMainProcessor(mangoes, bananas) { //function declaration

    //embedded function
    const cutMangoes = cutFruitPieces(mangoes);
    const cutBananas = cutFruitPieces(bananas);

    const myJuiceMix = `the food processor is going to mix ${cutMangoes} mangoes and ${cutBananas} bananas`
    return myJuiceMix
}
const diffJuiceMix1 = fruitMainProcessor(20, 30)
console.log(diffJuiceMix1)

const diffJuiceMix2 = fruitMainProcessor(2, 9)
console.log(diffJuiceMix2)

//example 2 


const companyAge = function (birthyear) { //function expression
    return 2005 - birthyear
}
const businessAge = function (birthyear, businessName) {

    const myCompanyAge = companyAge(birthyear);

    if (myCompanyAge > 0) {
        return `the company ${businessName}, is ${myCompanyAge} years old`
    } else {
        return -1
    }

}
console.log(businessAge(1992, 'Alvoant'));
//function declaration you can invoke the function before declaring the function
//function expression is stored in a variable 
//arrow function has no this key word   


//coding chanllenge.... 

const calcAverage1 = (Data1, Data2, Data3, Data4, Data5, Data6) => {

    const dolphinsAvg = (Data1 + Data2 + Data3) / 3;
    const koalasAvg = (Data4 + Data5 + Data6) / 3;
    return `the average for the Dolphins is ${dolphinsAvg} and the average for the koalas is ${koalasAvg}`
}

const firstData = calcAverage1(12, 24, 45, 3345, 498, 100)
console.log(firstData)

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`the dolphines wins ${avgDolphins} vs ${avgKoalas}`)
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`the koalas wins ${avgKoalas} vs ${avgDolphins}`)
    } else {
        console.log(`no team wins`)
    }

}
checkWinner(firstData)

//Data Structure --->  ARRAYS this a type of data structure and works like a big container that carries data we can referrence later. 
//there are two popular types of data structures arrays and object

const friends = ['tunde', 'james', 'peter']; //literal syntax
console.log(friends[0]); //arrays are zero based 

//another way of creating an array 

const years = new Array(1991, 1992, 1993, 1994); //using array function and using the 'new' key word 
console.log(years);


//number of elements in the array 
console.log(friends.length);

//last element in the array 
console.log(friends[friends.length - 1]); //friends.length-1 is an expression not a statement

//replace elements in the array 
friends[2] = 'Kev';
console.log(friends);

//holds different values 
const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1981, 'teachers', friends];
console.log(jonas);


//simple excerise 
const newCalcAge = function (birthyear) {
    return 2037 - birthyear;
}

const ages = [1991, 1901, 1984, 2005];

const firstAge = newCalcAge(ages[0]);
const secondAge = newCalcAge(ages[1]);
const thirdAge = newCalcAge(ages[ages.length - 1]);
console.log(firstAge, secondAge, thirdAge);

const newAges = [newCalcAge(ages[0]), newCalcAge(ages[1]), newCalcAge(ages[ages.length - 1])];
console.log(newAges);


//ARRAY METHODS 
const newFriends = ['Emma', 'Dammy', 'JR.Light']

//push method -> we want to push an element to an array
newFriends.push('Jay'); //push function , it returns the lenght of the new array
console.log(newFriends);

//unshift method -> we want to add an element at the beginning of the array 
newFriends.unshift('Grey')
console.log(newFriends);

//pop method -> we want to remove the last element 
newFriends.pop();  // it returns the removed elements 
const popped = newFriends.pop();
console.log(popped);
console.log(newFriends);

//shift method -> we want to remove the first element 
newFriends.shift();
console.log(newFriends);

//we want to know the position of an element 
console.log(newFriends.indexOf('Dammy'));

console.log(newFriends.indexOf('JR.Light')); //if you want to know the position of an element that is not in the array it will give you minus one

//ES06 'includes method' (modern method) 
console.log(newFriends.includes('JR.Light'));
console.log(newFriends.indexOf('Dammy')); //this does not accept coertion ;

if (newFriends.includes('Peter')) {
    console.log`you have a friend named peter`
} else {
    console.log`you do not have a friend named peter`
}


//code chanllege 

const calcTip = function (billValue) {
    if (billValue >= 50 && billValue <= 300) {
        return (billValue * (15 / 100)) + billValue;
    } else {
        return (billValue * (20 / 100)) + billValue;
    }
}
console.log(calcTip(100));

const tips = [calcTip(125) - 125, calcTip(555) - 555, calcTip(44) - 44]
console.log(tips)

const bills = [calcTip(125), calcTip(555), calcTip(44)];
console.log(bills)


//objects 
let birthyear = 1990;
const firstObject = {
    firstName: 'Jonas',
    lastName: 'Kelvin',
    age: 2037 - birthyear,
    job: 'teacher',
    friends: ['peter', 'grey', 'tee']
}

//get a property from an object using the dot notation
console.log(firstObject.friends); //the dot is an operator 
console.log(firstObject['friends']); //the bracket notation....

const nameKey = 'Name';
console.log(firstObject['first' + nameKey]);
console.log(firstObject['last' + nameKey]);

// const intrestedInfo = prompt('what information do you want from jonas, firstName, lastName, age, job, friends');

// if (firstObject[intrestedInfo]) {
//     console.log(firstObject[intrestedInfo])
// } else {
//     console.log('Wrong request :)')
// }
//how to add new properties to an Object using the the dot and bracket notation 
firstObject.location = 'Abuja';
firstObject['twitter'] = '@thebadtechguy';

console.log(firstObject);

const newData = firstObject.friends[0];
const newDatalength = firstObject.friends.length; //this dot notation is also known as "member access" and the bracket notation is also known as "Computed member access". So the "." and this is executed from left to right.

if (newData) {
    console.log(`Jonas has ${newDatalength} friends, and his best friend is ${newData}`)
} else {
    console.log(`this is not Jonas best friend`);
}


//object methods. 

const newPersonInfo = {
    firstName: 'Anthony',
    foodTypes: ['Yam', 'Swallow', 'Fish', 'Beans'],
    age: 23,
    location: 'Abuja',
    birthyear: 45,
    hasLifeInsurrance: false,

    calDOB: function (currentYear) {
        return currentYear - this.age;  //the 'this' key word is substituting from the newPersonInfo so we can do 'this.age' and we can do 'newPersonInfo.age' whichever you use will work perfectly

        //note: Any function that is attached to an object is a method so 'calDOB' is the method is the 'newPersonInfo' object

        console.log(this);
    }, 

    calWorkAge: function (startYear){
        this.startWorkYear = 2023 - startYear;
        return this.startWorkYear;
    },

    //Challenge : Write a method named 'getSummary' returns a string that summarizes the information of the 'newPersonObject' object 

    getSummary: function(){
        return `the newPersonInfo has a firstName ${this.firstName}, the food he enjoys are ${this.foodTypes}. He is ${this.age} years old, leaves in ${this.location} and his  ${this.hasLifeInsurrance ? 'a' : 'no'} life insurrance`
    }

    /* note that this function above is the same thing with this function expression

      calDOB = function(currentYear){ 
        return currentYear -newPersonInfo.age
      }   
    */
};
console.log(newPersonInfo.calDOB(2025)); //dot notation
console.log(newPersonInfo['calDOB'](2035));//bracket notation
//now we want to add a function to an object
console.log(this.foodTypes);// so we can't do this, we can only use the 'this' keyword inside the function or
console.log(newPersonInfo.calWorkAge(1998));
console.log(newPersonInfo.getSummary()); 



const firstPersonObject = {
     fullName: 'Mark Miller', 
     mass: 78, 
     height: 1.69,

     calcBMI: function(){
        const firstBMI = this.mass / (this.height ** 2); 
        return firstBMI; 
     }

}

const secondPersonObject = {
    fullName: 'John Smith', 
    mass: 92, 
    height: 1.69,

    calcBMI: function(){
       const firstBMI = this.mass / (this.height ** 2); 
       return firstBMI; 
    }

}

console.log(firstPersonObject.calcBMI())



//Document Obeject Model Manipulation

//building a project *Guess my number*
 //querySelectors

 console.log(document.querySelector('.start-guessing-header').textContent); //it's a method 
 //so we used the textContent to see the inner element 

 //the keyword 'document' object is the first entry point to the DOM, the DOM is actually a way inwhich our javascript can have access to the HTML on the browser for interactivity

 //DOM --> HTML 
 //now the HTML has two child element  the 'head' tag and 'body' tag

 //As we dive deeper in the DOM tree the we see more elements that children of the the head and body including the texts in the elements or tags 
//Note that the DOM is a pure representation of the HTML so what is is on the dom is exactly on the HTML then Javascripts just manipulates. 

//Note the DOM is not a part of javaScript language 'document.querySelector()' and so on. so how does this work how does the DOM work perfectly with JS and its because the DOM and DOM methods are parts of WEB APIs , so the WEB APIs are libraries the browsers implement and we can access this from our JS code. WEB APIs are libraries writing in JS hidden without us needing to import any file but available for us to use.


// document.querySelector('.start-guessing-header').textContent = 'Too low!';
// document.querySelector('.score-number').textContent = 0;
// document.querySelector('#second-btn').textContent = 15;
// document.querySelector('.input-digit').value = 34;

//Event listener 
const checkBtn = document.querySelector('#third-btn').addEventListener('click', function(){
    const numberValue = Number(document.querySelector('.input-digit').value) //note that the JS engine calls this function 
 
    console.log(typeof numberValue, numberValue )
      
});//addEventListener Method ==> takes in the two parameters the 'type' of event you want to happen and a function which is the event handler, now the event handler tells JS the action you want it to perform 
