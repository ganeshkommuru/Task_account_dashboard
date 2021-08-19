
function myFunction() {
    var x = document.getElementById("h_b_links_id");
    if (x.className === "h_b_links") {
      x.className += " responsive";
    } else {
      x.className = "h_b_links";
    }
  }