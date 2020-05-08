import { fifaData } from './fifa.js';
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

let filter2014Final = fifaData.filter((matches) => {
    return matches.Year === 2014 && matches.Stage ==="Final"
});
console.log (filter2014Final[0]['Home Team Name']);
console.log (filter2014Final[0]['Away Team Name']);
console.log (filter2014Final[0]['Home Team Goals']);
console.log (filter2014Final[0]['Away Team Goals']);
console.log(filter2014Final[0]['Win conditions']);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(fifaData) {
    return (fifaData).filter((stage => stage.Stage ==="Final"))
};
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    let years = callback(fifaData)
    return (years.map(stage => stage.Year))
}
console.log(getYears(getFinals))

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    let games = callback(fifaData)
    let winners = games.map(game => {
        if (game["Home Team Goals"] > game["Away Team Goals"]){
            return game["Home Team Initials"]
        }else if (game["Home Team Goals"] < game["Away Team Goals"]){
            return game["Away Team Initials"]
        }
    })
    return winners
};

console.log(getWinners(getFinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb1, cb2) {
    let yr = cb1(getFinals)
    let country = cb2(getFinals)
    let newArray = yr.map((e, i) => 'In ' + e +' '+ country[i] +' won the world cup!' );
    console.log(newArray)

    
};

getWinnersByYear(getYears, getWinners);

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
    let count = data.reduce (function(n, val) {
        return n + (val === teamInitials);
    }, 0)
    console.log(count)
};

getCountryWins(getWinners(getFinals), "ITA");

/* Task 8: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let avgHome = data.reduce((n, val) => {
        let sum = n + val["Home Team Goals"];
        return sum; 
    }, 0);
    let avgAway = data.reduce((n, val) => {
        let sum = n + val["Away Team Goals"];
        return sum;
    }, 0);
    console.log(avgHome / data.length);
    console.log(avgAway / data.length);
};

getAverageGoals(fifaData);


/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
