function getRandomMember(list) {
  var index = Math.floor(Math.random() * list.length);
  return list[index];
}

function cookingResponse() {

  var responses =
    [
      "I'm not a very good cook",
      "Have you tried making scrambled eggs?",
      "Ok! Just remember to never put metal in the microwave!",
      "clean as you go",
      "mmmm Cheese Borger"
    ];

  printBot(getRandomMember(responses));
}

function loveResponse() {

  var responses =
    [
      "it be like that",
      "You will find love where you least expect it uwu"
    ];

  printBot(getRandomMember(responses));
}

function prank(userInput) {
  var prankFunctions =
    [
      function () {prankAlert(userInput);},
      function() {prankMimic(userInput);},
      function() {prankChatMaintenence();}
    ];

  var func = getRandomMember(prankFunctions);
  func();
}
