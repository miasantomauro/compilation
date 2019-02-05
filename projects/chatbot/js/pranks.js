function isVowelSound(letter) {
  var list = ["a", "e", "h", "i", "l", "m", "n", "o", "r", "s", "x"];
  return list.includes(letter);
}

function prankAlert(userInput) {

  console.log("prank alert function temporarily disabled bc of how annoying it is");

  /*
  for (var i = 0; i < userInput.length; i++) {
    if (userInput[i] == " ") {
      alert("gimme a space");
    } else if (isVowelSound(userInput[i])) {
      alert("gimme an " + userInput[i]);
    } else {
      alert("gimme a " + userInput[i]);
    }
  }
  */
}

function prankMimic(userInput) {
  printBot(userInput);
}

function prankColorSwitch(botMessage) {
  //TBD
  printBot(botMessage);
}

function prankChatMaintenence() {

  printBot("Oh shoot! It looks like we're having some trouble with the chat");

  var botMessages = document.getElementsByClassName("botMessage");

  var latestMessage = botMessages[botMessages.length - 1];
  latestMessage.style.transform = "rotate(180deg)";

  console.log(latestMessage);

  // get last userMessage child of messageWindow and mess w CSS

  //printBot("Can you try to send another message?");

  // get last userMessage child of messageWindow and mess w CSS

  //printBot("That's not supposed to happen :-0");

  // get last userMessage child of messageWindow and fix w CSS

  //printBot("Ok I think I fixed it. Try again??");

  //printBot("There we go!");

}
