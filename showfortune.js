const fortune = document.getElementById("fortune");
const getbutton = document.getElementById("fortune-button");

getbutton.addEventListener("click", () => {
  fortune.innerHTML = "You’re going to have a wonderful day!";
});

let responses = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];
let loading = [
  "Consulting the spirits...",
  "Gazing into the depths of the future...",
  "BRB, jumping into my time machine...",
  "I see... I see...",
];
const shuffle = document.getElementById("shuffle");
const shuffle2 = document.getElementById("shuffle2");
const shufflebutton = document.getElementById("shuffle-button");

function shuffle_fortune(arr1) {
  let currentIndex = arr1.length;
  let temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = responses[currentIndex];
    responses[currentIndex] = responses[randomIndex];
    responses[randomIndex] = temporaryValue;
  }
  return responses;
}
function shuffle_loading(arr1) {
  let currentIndex = arr1.length;
  let temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = loading[currentIndex];
    loading[currentIndex] = loading[randomIndex];
    loading[randomIndex] = temporaryValue;
  }
  return responses;
}
shuffle.innerHTML = "Original: " + responses; //list out all item in array
shuffle_fortune(responses);
shuffle2.innerHTML = "After shuffle: " + responses[0]; //only 1 item appear

shufflebutton.addEventListener("click", () => {
  shuffle_loading(loading);
  shuffle2.innerHTML = "Loading: " + loading[0];

  setTimeout(() => {
    shuffle_fortune(responses);
    shuffle2.innerHTML = "After shuffle: " + responses[0];
  }, 3000);
});
