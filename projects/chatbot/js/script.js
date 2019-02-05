// time in milliseconds it takes bot to respond
// idea: instead of a constant, could use a function that generates a random time
var BOT_DELAY = 1000;

var RESPONSES =
  ["new phone who dis",
  "k",
  "Sorry that last message wasn't for you!!"];

var KEYWORDS =
  [
    ["cook", "cooking", "bake", "baking"],
    ["relationship", "relationships", "love", "boyfriend", "girlfriend", "spouse", "partner", "husband", "wife"],
    ["funny", "comedy", "joke"]
  ];

var FUNCTIONS =
  [
    function(userInput) { cookingResponse();},
    function(userInput) { loveResponse();},
    function(userInput) { prank(userInput);}
  ];


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

/*
 * This is executed when the window loads
 */
window.onload = function() {
  printBot("Hello! What can I help you with?");
}

/*
 * a FUNCTION that prints the USER'S message to the message window
 */
function printUser(userInput) {
  printMessage(userInput, "userMessage");
}

/*
 * a FUNCTION that prints the BOT'S message to the message window (with a delay)
 */
function printBot(message) {
  sleep(1000);
  printMessage(message, "botMessage");
  //window.setTimeout(printMessage, BOT_DELAY, message, "botMessage");
}

/*
 * a FUNCTION that prints any message (User or Bot) to the message window
 */
function printMessage(message, className) {
  // finds the message window element
  var messageWindow = document.getElementsByClassName("messageWindow")[0];
  // creates the new message elt
  var newMessage = document.createElement("div");
  // gives it a class of userMessage
  newMessage.classList.add(className);
  // creates the new span
  var newText = document.createElement("span");
  // puts the user input in the span
  newText.innerHTML = message;
  // puts the new text in the new message
  newMessage.appendChild(newText);
  // puts the new message in the chat window
  messageWindow.appendChild(newMessage);

}

/*
 * a FUNCTION that splits the users input into word tokens,
 * then determines where to send the input so the bot can respond
 */
function parseInput(userInput) {

  var words = userInput.split(" ");

  for (var i = 0; i < words.length; i++) {
    for (var j = 0; j < KEYWORDS.length; j++) {
      if (KEYWORDS[j].includes(words[i])) {
        var func = FUNCTIONS[j];
        func(userInput);
      }
    }
  }

  // TO DO: use the parsed input to determine which prank/repsonse should happen
}

/*
 * a FUNCTION called when the user enters their input
 */
function inputHandler() {

  // gets the user input element
  var userInputElt = document.getElementById("userInput");
  // gets the actual text the user put it
  var userInput = userInputElt.value;

  // the following steps should be taken only if the user actually
  // inputted something
  if (userInput != "") {
    // prints the input in a new message in the chat window
    printUser(userInput);
    //clears the text so the user can enter something else in
    userInputElt.value = "";
    // sends the input out to the parser
    parseInput(userInput);
  }

}
