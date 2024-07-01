/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let alert = document.querySelector(".validate");
  alert.style.display = "none";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function(form) {
    form.addEventListener(
      "submit",
      function(event) {
        let alert = document.querySelector(".validate");
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          alert.style.display = "block";
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
};
