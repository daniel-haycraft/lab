// let lovesCode = true

// if (lovesCode === true){
//   console.log('I love to code!')
// } else {
//   console.log("coding has its challenges")
// }
// // 


let amysAge = 29;
let brittanisAge = 35;
let amysBirthYear = 1991;
let brittanisBirthYear = 1986;

////////// PROBLEM 2 //////////
// if (amysAge > brittanisAge){
//   console.log('Amy is older')
// } else if (amysAge < brittanisAge){
//   console.log('Brittanis is older')
// } else {
//   console.log('brittani and amy are the samie')
// }

// if (amysBirthYear > brittanisBirthYear){
//   console.log('Amy and Britt were not born in the same year')
// } else {
//   console.log('Amy and Britt were born in the same year')
// }

////////// PROBLEM 4 //////////

let temp = 70;
let rain = true;
let snow = true



  // Using an if statement and a comparison operator, create code that will log a suggestion on what type of clothes one should wear for the day, based on the above temperature and rain.
  // If it is 80 degrees or above, and raining, one should wear a t-shirt and take an umbrella. If it is between 60 and 80 degrees, and raining, one should wear a rain-jacket. If it is 60 degrees or below, one should wear a jacket and carry an umbrella. Come up with your own clothing suggestions based on those temperature parameters when it is not raining.

if (temp >= 80 && rain === true){
  console.log("you should wear a t-shirt and take an umbrella with you today")
} else if (temp >= 60 && temp <= 80 && rain === true){
  console.log(`where a rain jacket its quite cold outside`)
} else if (temp > 60 && rain === true){
  console.log(`the temp is ${temp} so gear up. you'll need both a jacket and an umbrella`)
} else if (temp > 35 && snow === true){
  console.log('its gonna be a cold day people, the chances for snow is around 100% today! Grab your snow jacket, boots, gloves, and most importantly skis or a snowboard!')
} else {
  console.log('i live in arizona dont take my advice')
}
