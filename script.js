
function myFunction() {
  let x = document.getElementById("h_b_links_id");
  if (x.className === "h_b_links") {
    x.className = "responsive";
  } else {
    x.className = "h_b_links";
  }
  let y = document.getElementById('toggle_icon');
  y.classList.toggle('fa-bars');
  y.classList.toggle('fa-times');
}

function openForm() {
  document.getElementById("form_popup").style.display = "block";
}
  
function closeForm() {
  document.getElementById("form_popup").style.display = "none";
}