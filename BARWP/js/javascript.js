var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}

$(document).ready(function() {
    $(".accordion").click(function() {
      console.log("clicked: %o", this);
    });
  });