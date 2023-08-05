
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
xslider = document.getElementById("slide-panel");
   
    xslider.innerHTML = `
<ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
    <li class="nav-item py-2">
        <a id="about-this" class="nav-link active" aria-current="page" href="#">
        <p>
        I'm Michael Angelo Dorio, and welcome to my "Hot Strings!" !</p>
        <p>My very first ramen experience was an unforgettable journey in Japan (Tokyo-Shinjuku).</p>
        <p>
        As I entered the quaint little ramen shop, the aroma of simmering broth and freshly cooked noodles, enticing my taste buds.
        The ambiance was cozy and traditional, with wooden furnishings and a lively chatter of ocals exchanging stories over their steaming bowls of ramen. 
        </p>

        <p class"text-center"> ~Also visited Shibuya on the following day.
        <img class="img-thumbnail w-100 p-1" src="./images/jpn.jpg" alt="" srcset=""></p>
       
        </a>
    </li>
    <li class="nav-item"><a class="nav-link" href="#">Connect with me:</a></li>
    <div>
        <p class="text-sm-center text-md-center text-center">
        <a class="icon-glow btn" target="_blank" href="https://www.facebook.com/muteninjaturtle"><i class="display-3 fab fa-facebook fa-lg"></i></a>
        <a class="icon-glow btn" target="_blank" href="https://gitlab.com/michaelangelodorio"><i class="display-3 fab fa-beat-fade fa-gitlab fa-lg"></i></a>
        <a class="icon-glow btn" target="_blank" href="https://github.com/m-dorio/"><i class="display-3 fa-brands fa-github fa-bounce fa-lg"></i></a>
        <a class="icon-glow btn" target="_blank" href="https://www.linkedin.com/in/michael-angelo-dorio-17510182/"><i class="display-3 fa-brands fa-linkedin-in fa-lg"></i></a> 
        </p>     
    </div> 

    <li class="nav-item">
        <p class="text-center">
        <img class="img-thumbnail w-100" src="./images/qrcode2.png" alt="" srcset="">
        </p> 
    </li>

    <li class="nav-item dropdown">
        
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">My Projects</a>
        
        <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="https://m-dorio.github.io/portfolio_01/" target="_blank" rel="noopener noreferrer">Portfolio #1</a></li>
            <li><a class="dropdown-item" href="https://m-dorio.github.io/pubrepo/" target="_blank" rel="noopener noreferrer">Portfolio #2</a></li>
            <li><a class="dropdown-item" href="https://m-dorio.github.io/bootstrap-mdorio/" target="_blank" rel="noopener noreferrer">Portfolio #3 - Bootcamp activity</a></li>
            <li><a class="dropdown-item" href="https://m-dorio.github.io/dreamshop/" target="_blank" rel="noopener noreferrer">Shopping store - "dreamshop"</a> </li>
            <li><a class="dropdown-item" href="https://m-dorio.github.io/pillowshop/" target="_blank" rel="noopener noreferrer">Revised Shopping store - "pillowshop"</a></li>
            <li><a class="dropdown-item" href="https://m-dorio.github.io/webportfolio/" target="_blank" rel="noopener noreferrer">A Bootcamp capstone</a></li>
            <li><a class="dropdown-item" href="https://m-dorio.github.io/nyorasfarm/" target="_blank" rel="noopener noreferrer">Nyora's Farm</a></li>
            <li><a class="dropdown-item" href="https://m-dorio.github.io/figma-output/" target="_blank" rel="noopener noreferrer">Designed in Figma - activity</a></li>
            <li>
            <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="https://m-dorio.github.io/webportfolio/">Portfolio</a></li>
        </ul>
    </li>
</ul>
    `;

