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

const retirementAgeInfoII = yearsUntilRetirementII(1993, 'Bob')
console.log(retirementAgeInfoII)

// The 'this' key word can not be used in the arrow function



//Function calling other functions 
//Task: We have a food processor but the fruit processor needs a fruit machine to cut the fruits into smaller pieces 


//frui machine 

function cutFruitPieces(fruit) {
    return fruit * 4
}

function fruitMainProcessor(mangoes, bananas) {

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


const companyAge = function (birthyear) {
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

    const dolphinsAvg = (Data1 + Data2 + Data3)/ 3;
    const koalasAvg = (Data4 + Data5 + Data6) / 3;
    return `the average for the Dolphins is ${dolphinsAvg} and the average for the koalas is ${koalasAvg}`
 }

const firstData = calcAverage1(12,24,45,3345,498,100)
console.log(firstData)

 function checkWinner (avgDolphins, avgKoalas){
    if(avgDolphins >= avgKoalas*2){
        console.log(`the dolphines wins ${avgDolphins} vs ${avgKoalas}`)
    }else if(avgKoalas >= avgDolphins * 2){
        console.log(`the koalas wins ${avgKoalas} vs ${avgDolphins}`)
    }else{
        console.log(`no team wins`)
    }

 }
checkWinner(firstData)

//Data Structure --->  ARRAYS this a type of data structure and works like a big container that carries data we can referrence later. 
//there are two popular types of data structures arrays and object

const friends = ['tunde', 'james', 'peter']; //literal syntax
console.log(friends[0]); //arrays are zero based 

//another way of creating an array 

const years = new Array(1991,1992,1993,1994); //using array function and using the 'new' key word 
console.log(years);


//number of elements in the array 
console.log(friends.length); 

//last element in the array 
console.log(friends[friends.length -1]); //friends.length-1 is an expression not a statement

//replace elements in the array 
friends[2] = 'Kev'; 
console.log(friends); 

//holds different values 
const firstName = 'Jonas'; 
const jonas = [firstName, 'Schmedtmann', 2037-1981, 'teachers', friends];
console.log(jonas);


//simple excerise 
const newCalcAge = function(birthyear){
    return 2037 - birthyear; 
}

const ages = [1991, 1901, 1984, 2005];

const firstAge = newCalcAge(ages[0]);
const secondAge = newCalcAge(ages[1]);
const thirdAge = newCalcAge(ages[ages.length -1]);
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

if(newFriends.includes('Peter')){
    console.log `you have a friend named peter`
}else{
    console.log `you do not have a friend named peter`
}


//code chanllege 

const calcTip = function(billValue){
    if(billValue >= 50 && billValue <= 300){
          return (billValue * (15/100)) + billValue;
    }else{
        return (billValue * (20/100)) + billValue;
    }
}
console.log(calcTip(100));

const tips = [calcTip(125) - 125, calcTip(555)-555, calcTip(44)-44]
console.log(tips)

const bills = [calcTip(125), calcTip(555), calcTip(44)];
console.log(bills)
