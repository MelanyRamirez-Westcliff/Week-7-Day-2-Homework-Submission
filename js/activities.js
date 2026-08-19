// User interaction with activity table
$(document).ready(function() {

    $("tbody td").click(function() {

        var content = $(this).text();

        // Do not select the activity-name column
        if ($(this).index() == 0) {
            return;
        }

        // Do not allow unavailable activities
        if (content != "Not Available") {

            // Find which cliff column was clicked
            var columnIndex = $(this).index();

            // Get the cliff name from the table heading
            var cliffName = $("thead th").eq(columnIndex).text();

            // Select or deselect the cell
            $(this).toggleClass("tdhighlight");

            if ($(this).hasClass("tdhighlight")) {

                // Add selected activity to modal
                $("#result").append(
                    "<p>" + content + " at " + cliffName + "</p>"
                );

            } else {

                // Remove activity from modal
                $("#result p").filter(function() {
                    return $(this).text() == content + " at " + cliffName;
                }).remove();
            }

            // Open modal when at least one activity is selected
            if ($("#result p").length > 0) {
                $("#activityModal").modal("show");
            } else {
                $("#activityModal").modal("hide");
            }
        }
    });

});