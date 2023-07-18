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


function calcAge1(birthyear) {
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
const ageIII = function (birthyear) {
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



const yearsUntilRetirement = birthyear => {
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

const retirementAgeInfoII = yearsUntilRetirementII (1993, 'Bob')
console.log(retirementAgeInfoII)

// The 'this' key word can not be used in the arrow function



//Function calling other functions 
//Task: We have a food processor but the fruit processor needs a fruit machine to cut the fruits into smaller pieces 


//frui machine 

function cutFruitPieces(fruit){
    return fruit * 4
}

 function fruitMainProcessor(mangoes, bananas){
    
    //embedded function
    const cutMangoes = cutFruitPieces(mangoes); 
    const cutBananas = cutFruitPieces(bananas); 
    
    const myJuiceMix = `the food processor is going to mix ${cutMangoes} mangoes and ${cutBananas} bananas`
     
 }
 const diffJuiceMix1 = fruitMainProcessor(20,30)
console.log(diffJuiceMix1)

const diffJuiceMix2 = fruitMainProcessor(2,9)
console.log(diffJuiceMix2)

