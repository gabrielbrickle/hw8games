
var horseRace = prompt("Welcome to the races! Do you want to RIDE a horse or WATCH the race?").toUpperCase();
switch (horseRace) {
  case "RIDE":
  console.log ("Awesome! Let's go pick a horse to ride");
    var pickHorse = prompt("Do you want a WHITE, BROWN OR BLACK horse?").toUpperCase();
    if (pickHorse === "WHITE"){
      console.log ("Great, you'll be riding Coconut! Good luck!");
      randomHorse();
    } else if (pickHorse === "BROWN") {
      console.log ("Bummer! We don't have any brown horses.");
      randomHorse();
    } else if (pickHorse === "BLACK") {
      console.log ("Great, you'll be riding Java! Good luck!");
      randomHorse();
    } else {
      console.log ("Too bad unicorns aren't real!");
      randomHorse();
    }
    break;

  case 'WATCH':
    console.log ("You've reached your seats!");
    var makeBet = prompt("Do you want to place a bet? YES or NO?").toUpperCase();
    if (makeBet === "NO") {
      console.log ("Guess you're not a risk taker.")
    }
    if (makeBet === "YES") {
      console.log ("Awesome!");
      var betAmount= prompt("How much do you want to bet? 100 or 1000?")
      if (betAmount === '100' ) {
        randomWinner();
      } else {
        randomWinner();
      }
      }
    break;
  default:
    console.log ("No fun for you!")
  }

  function randomHorse (anyListOfHorses) {
    var horses = ['Coconut', 'Java', 'Another horse won'];
    anyListOfHorses = anyListOfHorses || horses;
    confirm ("Let's start the race. Click OK to see if you've won. Good luck!")
    var randomNum = Math.random();
    var lengthOfHorsesList = anyListOfHorses.length;
    var lastIndexOfHorsesList = lengthOfHorsesList - 1;
    var guessNumber = Math.floor(randomNum * lengthOfHorsesList);
    var winner = anyListOfHorses[guessNumber];
    console.log(winner + " won!!")
  }

  function randomWinner () {
    confirm ("Let's see how much you've won. Good luck!")
    var randomNum = Math.random();
    var winningNumber = Math.ceil(randomNum * 1000);
    console.log("You just won " + winningNumber + " dollars! Cha-Ching!")
    return winningNumber;
  }
