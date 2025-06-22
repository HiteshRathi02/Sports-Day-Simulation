function OpeningCeremony(callback) {
  console.log("Let the games begin!");

  const scores = {
    red: 0,
    blue: 0,
    green: 0,
    yellow: 0,
  };

  setTimeout(() => {
    console.log("Opening Ceremony complete. Initial scores:", scores);
    callback(scores);
  }, 1000);
}

function Race100M(callback, scores) {
  console.log("Starting the 100M Race...");

  setTimeout(() => {
    const times = {
      red: Math.floor(Math.random() * 6) + 10,
      blue: Math.floor(Math.random() * 6) + 10,
      green: Math.floor(Math.random() * 6) + 10,
      yellow: Math.floor(Math.random() * 6) + 10,
    };

    console.log("Race times:", times);

    const sorted = Object.entries(times).sort((a, b) => a[1] - b[1]);
    const [first, second] = [sorted[0][0], sorted[1][0]];

    scores[first] += 50;
    scores[second] += 25;

    console.log(`${first} gets 50 points`);
    console.log(`${second} gets 25 points`);
    console.log("Updated scores after Race100M:", scores);

    callback(scores);
  }, 3000);
}

function LongJump(callback, scores) {
  console.log("Starting Long Jump...");

  setTimeout(() => {
    const teams = Object.keys(scores);
    const selected = teams[Math.floor(Math.random() * teams.length)];

    scores[selected] += 150;
    console.log(`${selected} team wins the Long Jump and gets 150 points!`);
    console.log("Updated scores after LongJump:", scores);

    callback(scores);
  }, 2000);
}

function HighJump(callback, scores) {
  console.log("Starting High Jump...");

  const userInput = prompt("Which color secured the highest jump? (red, blue, green, yellow)");

  if (userInput && scores.hasOwnProperty(userInput.toLowerCase())) {
    scores[userInput.toLowerCase()] += 100;
    console.log(`${userInput} gets 100 points for High Jump!`);
  } else {
    console.log("Event was cancelled or invalid input.");
  }

  console.log("Updated scores after HighJump:", scores);

  callback(scores);
}

function AwardCeremony(scores) {
  console.log("Award Ceremony Begins!");

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  console.log(`1st Place: ${sorted[0][0]} with ${sorted[0][1]} points`);
  console.log(`2nd Place: ${sorted[1][0]} with ${sorted[1][1]} points`);
  console.log(`3rd Place: ${sorted[2][0]} with ${sorted[2][1]} points`);
}

OpeningCeremony(function (scores) {
  Race100M(function (scores) {
    LongJump(function (scores) {
      HighJump(function (scores) {
        AwardCeremony(scores);
      }, scores);
    }, scores);
  }, scores);
});
