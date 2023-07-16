import { select } from "./select.js";
import { selectInner } from "./selectInner.js";

$(document).ready(function () {
  let phoneCodes = {};
  $.getJSON("./phone_codes.json", function (data) {
    phoneCodes = data.phoneCodes;
    selectInner(phoneCodes);
    select(phoneCodes);
  }).fail(function (error) {
    console.log("Error loading JSON:", error);
  });
});
