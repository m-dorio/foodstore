let myFunction = () => {
    // Declare variables
    var input, filter, shop, item, containerx, shopbtn, a, i, labelx, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    shop = document.getElementById("shop-items");
    items = shop.getElementsByClassName('details');
    containerx = shop.getElementsByClassName('xdata');
    labelx = document.getElementById("curr-status");
    shopbtn = document.getElementById("shop-btn");
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < items.length; i++) {
        a = items[i].getElementsByTagName("h4")[0];
        txtValue = a.textContent || a.innerText;
  
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = "block";
            containerx[i].style.display = "block";
            labelx.innerHTML = "";
            shopbtn.style.display = "block";
           
        } else {
            items[i].style.display = "none";
            containerx[i].style.display = "none";
            labelx.innerHTML = "Trying to find a hidden Gem?";
            shopbtn.style.display = "block";
        }
    }
}
myFunction();

