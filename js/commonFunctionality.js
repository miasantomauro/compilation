$(document).ready(setUpBackButton);

function setUpBackButton() {
  $(".back").hover(function() {tabOpen(this);},function() {tabClose(this)});
  $(".back").click(function() {location.assign("../index.html");});
}

function tabOpen(tab) {
  $('html,body').css("cursor","pointer");
  $(tab).animate(
    {
      width: "30vh"
    });
}

function tabClose(tab) {
  $('html,body').css("cursor","default");
  $(tab).animate(
    {
      width: "10vh"
    });
}
