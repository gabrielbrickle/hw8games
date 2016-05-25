var horseRace = prompt("Welcome to the races! Do you want to RIDE a horse or WATCH the race?").toUpperCase();
switch (horseRace) {
  case "RIDE":
  console.log ("Awesome! Let's go pick a horse to ride");
    var pickHorse = prompt("Do you want a WHITE, BROWN OR BLACK horse?").toUpperCase();
    if (pickHorse === "WHITE"){
      console.log ("Great, you'll be riding Coconut! Good luck!");
      randomHorse();
    } else if ("BROWN") {
      console.log ("Bummer! We don't have any brown horses.");
      randomHorse();
    }
    else if ("BLACK") {
      console.log ("Great, you'll be riding Java! Good luck!");
      randomHorse();
    } else {
      console.log ("Too bad unicorns aren't real!");
      randomHorse();
    }
    break;

  case 'WATCH':
    console.log ("We'll need to buy tickets");
    var getTickets = prompt("Do you want to pay TEN or TWENTY dollars?").toUpperCase();
    var cheap = (getTickets === "TEN");
    var expensive = (getTickets === "TWENTY");
    if (cheap) {
      console.log ("NOSEBLEEDS!");
      var upsell= prompt("Are you sure you don't want better seats? YES OR NO?").toUpperCase();
      if (upsell === "YES" ) {
        console.log ("Cha-Ching! Let's get the twenty dollar tickets!")
      } else  {
        while (upsell === "NO"){// ////WARNING INFINITE LOOP!
        prompt("Oops! We just sold out of those. Twenty dollar tickets it is!")
      }
      }
    }
    if (expensive) {
      console.log ("Good choice!")
    }

    break;
  default:
    console.log ("No fun for you!")
  }

  function randomHorse (anyListOfHorses) {
    var horses = ['Coconut', 'Java', 'Sorry another horse won'];
    anyListOfHorses = anyListOfHorses || horses;
    confirm ("Let's start the race. Click OK to see if you've won. Good luck!")
    var randomNum = Math.random();
    var lengthOfHorsesList = anyListOfHorses.length;
    var lastIndexOfHorsesList = lengthOfHorsesList - 1;
    var guessNumber = Math.floor(randomNum * lengthOfHorsesList);
    var winner = anyListOfHorses[guessNumber];
    console.log(winner)
  }
