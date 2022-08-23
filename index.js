// // let lovesCode = true

// // if (lovesCode === true){
// //   console.log('I love to code!')
// // } else {
// //   console.log("coding has its challenges")
// // }
// // // 


// let amysAge = 29;
// let brittanisAge = 35;
// let amysBirthYear = 1991;
// let brittanisBirthYear = 1986;

// ////////// PROBLEM 2 //////////
// // if (amysAge > brittanisAge){
// //   console.log('Amy is older')
// // } else if (amysAge < brittanisAge){
// //   console.log('Brittanis is older')
// // } else {
// //   console.log('brittani and amy are the samie')
// // }

// // if (amysBirthYear > brittanisBirthYear){
// //   console.log('Amy and Britt were not born in the same year')
// // } else {
// //   console.log('Amy and Britt were born in the same year')
// // }

// ////////// PROBLEM 4 //////////

// let temp = 70;
// let rain = true;
// let snow = true



//   // Using an if statement and a comparison operator, create code that will log a suggestion on what type of clothes one should wear for the day, based on the above temperature and rain.
//   // If it is 80 degrees or above, and raining, one should wear a t-shirt and take an umbrella. If it is between 60 and 80 degrees, and raining, one should wear a rain-jacket. If it is 60 degrees or below, one should wear a jacket and carry an umbrella. Come up with your own clothing suggestions based on those temperature parameters when it is not raining.

// if (temp >= 80 && rain === true){
//   console.log("you should wear a t-shirt and take an umbrella with you today")
// } else if (temp >= 60 && temp <= 80 && rain === true){
//   console.log(`where a rain jacket its quite cold outside`)
// } else if (temp > 60 && rain === true){
//   console.log(`the temp is ${temp} so gear up. you'll need both a jacket and an umbrella`)
// } else if (temp > 35 && snow === true){
//   console.log('its gonna be a cold day people, the chances for snow is around 100% today! Grab your snow jacket, boots, gloves, and most importantly skis or a snowboard!')
// } else {
//   console.log('i live in arizona dont take my advice')
// }



// for (let i = 0; i < 10 && i < 10; i++) {
//   console.log("hello there") 
// }

// Create a for-loop that runs 10 times, logging the numbers 1 through 10. Ex, on the first iteration it would log 1, on the second iteration it would log 2.

// for (let i = 0; i <= 10; i++) {
//   console.log(i)
// }

// for (let i = 10; i >= 0; i--) {
//   console.log(i)
// }

// let score = 0;
// let passingScore = 7;


// //   Create a while-loop that logs "Your score is not high enough" while the score variable above is below passingScore. In each iteration of the loop, increase the score by one. If your code is successful, you will see your logged statement 7 times.
// while (score < passingScore){
//   console.log("Your score is not high enough")
//   score += 1
//  } console.log('your score is high enough, pass through')

////////// INTERMEDIATE PROBLEMS //////////

////////// PROBLEM 9 //////////

//   Create a variable called 'changeMyMind' and set it equal to true. 
//   Check to see if changeMyMind is set to true or false, if it is true, change the status to false, if it is false, change the status to true.

let changeMyMind = true

if (changeMyMind === true){
 changeMyMind = false
console.log(changeMyMind)
} else if (changeMyMind === false){
  changeMyMind = true
  console.log(changeMyMind)
} 
  

//CODE HERE

////////// PROBLEM 10 //////////
// Using the "not" operator (!), change the current value of changeMyMind to true (it should currently be set to false due to the if-else statement in Problem 9). After you change the value of changeMyMind, console.log it's new value (it should now read true).

//CODE HERE

if (changeMyMind != true){
  changeMyMind = true
  console.log(changeMyMind)
}
  
////////// ADVANCED PROBLEMS //////////

////////// PROBLEM 11 //////////

let z = 5;
// Create a while loop that continues to run while z is greater than 0. Within the while loop, log a countdown from the value of z to 1. Once you have logged the countdown, make sure you decrement z by 1. If your code is running properly, you should see: 5,4,3,2,1,4,3,2,1,3,2,1,2,1,1.

//CODE HERE
