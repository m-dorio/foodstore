
/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }


/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function (x) {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}

window.addEventListener("scroll", function() {
  let buttonUp = document.getElementById("movingButtonUp");
  let buttonDown = document.getElementById("movingButtonDown");
  
  if (window.pageYOffset > 360) { // Adjust the value (300 in this case) to control when the button appears.
    // buttony.style.display = "block";
    buttonUp.classList.add('d-block');
    buttonUp.classList.remove('d-none');
    buttonDown.classList.add('d-none');
    buttonDown.classList.remove('d-block');
  } 

  else {
    buttonUp.classList.add('d-none');
    buttonUp.classList.remove('d-block');
    buttonDown.classList.add('d-block');
    buttonDown.classList.remove('d-none');
    // buttony.style.display = "none";
  }
});


// $(function lookUp() {
//   let availableTags = [
//   "Ramen",
//   "Pad Thai",
//   "Pho",
//   "Chow Mein",
//   "Jjajangmyeon",
//   "Soba",
//   "Udon",
//   ];
//   $("#searchWord").autocomplete({
//   source: availableTags
//   });
//   });


  // const f = document.getElementById('form');
  // const q = document.getElementById('query');
  // const google = 'https://www.google.com/search?q=site%3A+';
  // const site = 'https://m-dorio.github.io/foodstore/';

  // function submitted(event) {
  //   event.preventDefault();
  //   const url = google + site + '+' + q.value;
  //   const win = window.open(url, '_blank');
  //   win.focus();
  // }

  // f.addEventListener('submit', submitted);
