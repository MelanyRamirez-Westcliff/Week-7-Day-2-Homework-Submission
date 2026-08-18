$(document).ready(function () {

  // Store selected activities
  var selectedActivities = [];

  // Cliff names from table headings
  var cliffNames = [
    "West Cliff",
    "North Cliff",
    "East Cliff",
    "South Cliff"
  ];


  // Make available activities selectable
  $("tbody td").not(":first-child").each(function () {

    if ($(this).text().trim() != "Not Available") {

      $(this).addClass("selectable");

    }

  });


  // Click an activity
  $(".selectable").click(function () {

    var activityName = $(this).text().trim();

    // Get column number
    var columnIndex = $(this).index();

    // Get cliff name
    var cliffName = cliffNames[columnIndex - 1];

    // Combine activity and cliff
    var activityInfo =
      activityName + " at " + cliffName;


    // Check if activity is already selected
    var activityPosition =
      selectedActivities.indexOf(activityInfo);


    if (activityPosition == -1) {

      // Add activity
      selectedActivities.push(activityInfo);

      // Highlight selected cell
      $(this).addClass("selected");

    } else {

      // Remove activity
      selectedActivities.splice(activityPosition, 1);

      // Remove highlight
      $(this).removeClass("selected");

    }


    // Clear old modal content
    $("#selectedActivities").empty();


    // Display selected activities
    if (selectedActivities.length > 0) {

      for (var i = 0; i < selectedActivities.length; i++) {

        $("#selectedActivities").append(
          "<p>" + selectedActivities[i] + "</p>"
        );

      }

    }


    // Open Bootstrap modal
    $("#activityModal").modal("show");

  });

});