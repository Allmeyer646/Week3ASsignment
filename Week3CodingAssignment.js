//1.
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
//console.log(ages);

//a)
console.log((ages[ages.length-1]) - ages[0]);

//b)
ages.push(76);
//console.log(ages);
console.log((ages[ages.length-1]) - ages[0]);

//c)
var sumOfYears = 0;
var numberOfAges = ages.length;
for (i = 0; i < numberOfAges; i++) {
    sumOfYears += ages[i];
}
/* console.log(sumOfYears);
console.log(numberOfAges);
console.log(ages); */
console.log('The average age is '+ sumOfYears/numberOfAges);
//==================================================================================================

//2.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//console.log(names);
//a)
let totalLetters = 0;
let namesLength = names.map(function(name) {
    return name.length;
});
for(i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
//console.log(totalLetters);
//console.log(names.length);
console.log('The average number of letters per name is '+ (totalLetters/names.length));

//b)
allNames = '';
for( i = 0; i < names.length; i++) {
    allNames += names[i] +' ';
}
console.log(allNames);
//==================================================================================================
 
//3.
console.log(names[names.length -1]);
//==================================================================================================

//4.
console.log(names[0]);
//==================================================================================================

//5.
let nameLengths = [];
for( i = 0; i < names.length; i++) {
    nameLengths += names[i].length;
}
console.log(nameLengths);
//==================================================================================================

//6.
let sumOfNameLengths = 0
for( i = 0; i < nameLengths.length; i++) {
    sumOfNameLengths = sumOfNameLengths + names[i].length;
}
console.log(sumOfNameLengths);
//==================================================================================================

//7.
function repeatName(word, n) {
     let thisWord = '';
     for(let i = 0; i < n; i++) {
         thisWord += word; 
     }
     return thisWord;
 }
console.log(repeatName('Drew', 6));
//==================================================================================================

//8.
function giveFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(giveFullName('Drew', 'Allmeyer'));
//==================================================================================================

//9.
var numberOfAges = ages.length;
function isGreaterThan100() {
    for (i = 0; i < numberOfAges; i++) {
        sumOfYears += ages[i];
        return sumOfYears > 100;
    }
}
console.log(isGreaterThan100());
//==================================================================================================

//10.
function averageOfAges() {
    for (i = 0; i < numberOfAges; i++) {
        sumOfYears += ages[i];
        //let value = sumOfYears/numberOfAges;  
        //console.log(value);
        // the same math from 1c above, when wrapped in this function, is returning a different value than the original operation  O_o  inputs are the same.   306/9=34
        return sumOfYears/numberOfAges;
    }
}
console.log(averageOfAges());
//==================================================================================================

//11.
let array1 = [27, 16, 42, 35, 2];
let array2 = [17, 84, 5, 9, 28, 46, 32, 27, 16, 39, 37, 30, 18, 15, 8];
let avarray1 = (array1.reduce(function(accumulator, currentValue) {
    return (accumulator + currentValue);
})/array1.length);
//console.log(avarray1);
let avarray2 = (array2.reduce(function(accumulator, currentValue) {
    return (accumulator + currentValue);
})/array2.length);
//console.log(avarray2);
function isTrueIfGreater(average1, average2) {
    return average1 > average2
}
console.log(isTrueIfGreater(avarray1, avarray2));
//==================================================================================================

//12.
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside == true && moneyInPocket > 10.50) {
        return true;
    }
}
if (willBuyDrink(true, 7.99)) {
    console.log('I will buy a drink.');
} else (console.log('I will not buy a drink today.'));
//==================================================================================================

//13.
// I have a garden bed and want to calculate how many bags of dirt i should buy to fill it.
// the function will calculate the volume and then determine the number of bags required.  
// measures are in feet

function needBagsOfDirt(gardenLength, gardenWidth, bagOfDirt) {
    let gardenVolume = gardenLength * gardenWidth
    return gardenVolume/bagOfDirt
}
console.log('You need ' + needBagsOfDirt(8, 4, 1.25) + ' bags of topsoil');
//==================================================================================================