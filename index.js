// console.log('born a winner');

const freind1 = 'mwenda';
const freind2 = 'tokiti';
const freind3 = 'milan'; // this can be so tedioud since we have to write many variables 

// instaed we can use arrays(data structure);

const friends = [
    'mwenda',
    'tokiti',
    'milan'
]
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends.length);//gives us the number of elements in array.
console.log(friends[friends.length-1]); //gives us the last element in an array

const years1 = new Array(2000,1989,2034,2055);//literal syntax for arrays.
console.log(years1);

friends[2] = 'koome';
console.log(friends);
const firstName = 'benson'
const mwenda = [firstName,'nkunda', 2022 -1992,friends,]//what we have entered in the square brackets is an expression and not a statement.
console.log(mwenda);//we have also inluded another array (friends) inside our array mwenda.we have also inluded a variable firstName

//exercise

// const calcAge = function(birthYeah){
//     return 2037 - birthYeah;
// }
// const years = [1991,1980,1987,1920];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);
// const age4 = calcAge(years[3]);
// console.log(age1,age2,age3,age4);

//its good since we starsted iwth an array we finish with an array

// const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[2]),calcAge(years[3]),calcAge(years[years.length-1])];
// console.log(ages);

const calcAge = function(birthYeah){
    return 2037 - birthYeah;
}
const years = [1991,1980,1987,1920];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
console.log(age1,age2,age3,age4);

const ages = [age1,age2,age3,age4,];