$("document").ready(initialize);

function initialize() {
  setUpStats();
}

function setUpStats() {
  // hides the labels for each stat button
  $(".statLabel").hide();
  // sets up the hover handlers
  $(".statButton").hover(
    function(){statEnter(this);},
    function(){statLeave(this);}
  );
  // sets up the click handler for the stat buttons
  $(".statButton").click(function(){statSelect(this);});
  $(".statDisplay .hideButton").click(hideStatDisplay);

}

function statEnter(statButton) {

  var selectorString = "#" + statButton.id + " .statLabel";
  $(selectorString).show();

  $(statButton).animate(
    {
      bottom: 0,
      backgroundColor: "#FFF5BA"
    }
  )
}

function statLeave(statButton) {

  var selectorString = "#" + statButton.id + " .statLabel";
  $(selectorString).hide();

  $(statButton).animate(
    {
      bottom: "-5vw",
      backgroundColor: "#FE5F55"
    }
  )
}

function statSelect(statButton) {
  // remove all the stuff from the stat display
  $(".statDisplay .statDisplayLabel").remove();

  var scrollTop = document.documentElement.scrollTop;
  var docHeight = $(document).height();
  var sectionHeight = docHeight/14;
  var section = Math.floor(scrollTop / sectionHeight);
  var index = ID2INDEX(statButton.id);
  console.log(section + " " + index);
  var stat = dataArray[section][index];

  console.log(stat);

  // fill in the data on the stat display
  $(".statDisplay").append("<div class=\"statDisplayLabel\">"+ statButton.id +"</div>");
  $(".statDisplay").append("<div class=\"statDisplayLabel\">"+ stat +"</div>");

  $(".statDisplay").animate(
    {
      left: "0"
    }
  )
}

function hideStatDisplay() {
  $(".statDisplay").animate(
    {
      left: "-25vw"
    }
  )

  // remove all the stuff from the stat display
  $(".statDisplay .statDisplayLabel").remove();
}
