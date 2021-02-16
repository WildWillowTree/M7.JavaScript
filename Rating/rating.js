let body = document.getElementById("wrapper");
let rateForm = document.getElementById("rating");

body.addEventListener("click", function(){
    rateForm.reset();}, false);
    rateForm.addEventListener("click", function (ev) {ev.stopPropagation();}, false);
