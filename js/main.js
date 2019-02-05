$(document).ready(initialize);

function initialize () {
  $("img").show();
  $(".tabLabel").hide();
  setUpTabs();
  setUpMia();
  setUpMenu();
}

function setUpTabs() {
  $(".tab").hover(function(){tabOpen(this);}, function(){tabClose(this);});
  $(".tab").click(function(){tabSelect(this)});
}

function tabOpen(tab) {
  var arrowSelector = "#" + tab.id + " img";
  $(arrowSelector).hide();
  $('html,body').css("cursor","pointer");
  $(tab).animate(
    {
      width: "60vw"
    }
  );

  var selector = "#" + tab.id + " .tabLabel";
  console.log($(selector));
  $(selector).show();
}

function tabClose(tab) {
  var arrowSelector = "#" + tab.id + " img";
  $(arrowSelector).show();
  $('html,body').css("cursor","default");
  $(tab).animate(
    {
      width: "25vh"
    }
  );

  var selector = "#" + tab.id + " .tabLabel";
  $(selector).hide();
}

function tabSelect(tab) {

  if (tab.id == "tabA") {
    location.assign("projects/jmb/jmb.html");
  } else if (tab.id == "tabB") {
    location.assign("projects/lyrics/lyrics.html");
  } else if (tab.id == "tabC") {
    location.assign("projects/chatbot/chatbot.html");
  } else if (tab.id == "tabD") {
    location.assign("projects/record/record.html");
  }
}

function setUpMia() {
  $(".mia").hover(
    function(){
      changeTextSize(this, "20vw");
      $('html,body').css("cursor","pointer");
    },
    function(){
      changeTextSize(this, "15vw");
      $('html,body').css("cursor","default");
    });
  $(".mia").click(miaSelect);
}

function miaSelect() {
  location.assign("about/about.html");
}

function setUpMenu() {
  $(".menuItem").hover(
    function(){
      changeTextSize(this, "4vw");
      $('html,body').css("cursor","pointer");
    },
    function(){
      changeTextSize(this, "3vw");
      $('html,body').css("cursor","default");
    });
  $(".menuItem").click(function(){menuItemSelect(this.id)});
}

function menuItemSelect(folderName) {
  location.assign(folderName + "/" + folderName + ".html");
}

function changeTextSize(text, newSize) {
  $(text).animate({fontSize: newSize});
}
