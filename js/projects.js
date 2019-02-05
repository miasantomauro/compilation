$(document).ready(setUp);

function setUp() {
  $(".back").hover(function() {tabOpen(this);},function() {tabClose(this)});
  $(".back").click(function() {location.assign("../../index.html");});
  setUpProjectLinks();
}

function tabOpen(tab) {
  $('html,body').css("cursor","pointer");
  $(tab).animate(
    {
      width: "30vh"
    }
  );
}

function tabClose(tab) {
  $('html,body').css("cursor","default");
  $(tab).animate(
    {
      width: "10vh"
    }
  );

}

function setUpProjectLinks() {
  $(".projectLink").click(function() {projectLinkSelect(this.id);});
}

function projectLinkSelect(id) {

  // window.open("", "_bl")



  console.log("got here");
  if (id == "jmb") {
    window.open("html/index.html", "_bl");
  } else if (id == "lyrics") {
    window.open("html/index.html", "_bl");
  } else if (id == "chatbot") {
    window.open("html/index.html", "_bl");
  } else if (id == "record") {
    window.open("index.html", "_bl");
  }
}
