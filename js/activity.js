$(document).ready(function () {

  // Make activity cells selectable
  $("tbody td").not(":first-child").each(function () {

    if ($(this).text() != "Not Available") {
      $(this).addClass("selectable");
    }

  });

  // Click on an activity cell
  $(".selectable").click(function () {
    $(this).toggleClass("selected");
  });

});