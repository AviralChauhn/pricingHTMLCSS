document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("switch");
  var basiccontent = document.getElementById("basicPricing");
  var professionalcontent = document.getElementById("professionalPricing");
  var mastercontent = document.getElementById("masterPricing");
  toggleButton.addEventListener("change", function () {
    if (toggleButton.checked) {
      basiccontent.innerHTML = "&dollar;19.99";
    } else {
      basiccontent.innerHTML = "&dollar;199.99";
    }
  });
  toggleButton.addEventListener("change", function () {
    if (toggleButton.checked) {
      professionalcontent.innerHTML = "&dollar;24.99";
    } else {
      professionalcontent.innerHTML = "&dollar;249.99";
    }
  });
  toggleButton.addEventListener("change", function () {
    if (toggleButton.checked) {
      mastercontent.innerHTML = "&dollar;39.99";
    } else {
      mastercontent.innerHTML = "&dollar;399.99";
    }
  });
});
