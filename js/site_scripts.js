/* ------ PARTNERS ------ */

// Create partners array
var partners = [
  ["partner-bustour.png", "Partner Bus Tours"],
  ["partner-cabinrental.png", "Partner Cabin Rental"],
  ["partner-campingadv.png", "Partner Camping Adventure"],
  ["partner-collegetours.png", "Partner College Tours"],
  ["partner-rentalbike.png", "Partner Bike Rentals"],
  ["partner-tourgroup.png", "Partner Tour Group"]
];

// Create empty variable
var partnerList = "";

// Create partner list
for (var i = 0; i < partners.length; i++) {

  partnerList +=
    '<li class="partner col-12 col-sm-6 col-md-4 col-lg-2">' +
      '<img src="../images/partners/' +
      partners[i][0] +
      '" alt="' +
      partners[i][1] +
      '">' +
    '</li>';
}

// Display partners
document.getElementById("partners").innerHTML = partnerList;