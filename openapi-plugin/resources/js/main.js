(function () {

  const toggleDropdown = function (event) {
    event.currentTarget.querySelector("div.dropdown-content").classList.toggle("show");
  };

  document.body.querySelector("h1").scrollIntoView({ behavior: "auto", block: "end" });

  const dropdowns = document.body.querySelectorAll("div.dropdown");
  for (var i = 0 ; i < dropdowns.length ; i++) { 
    dropdowns[i].addEventListener("click", toggleDropdown); 
  }

}) ();
