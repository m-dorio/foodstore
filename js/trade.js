document.getElementById('footer').innerHTML = (unescape('%3C%66%6F%6F%74%65%72%20%69%64%3D%22%66%6F%6F%74%65%72%22%20%63%6C%61%73%73%3D%22%64%2D%66%6C%65%78%20%61%6C%69%67%6E%2D%69%74%65%6D%73%2D%63%65%6E%74%65%72%20%6A%75%73%74%69%66%79%2D%63%6F%6E%74%65%6E%74%2D%63%65%6E%74%65%72%20%62%67%2D%64%61%72%6B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%6D%78%2D%32%20%70%2D%33%20%74%65%78%74%2D%77%68%69%74%65%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%43%6F%70%79%72%69%67%68%74%20%26%63%6F%70%79%3B%20%32%30%32%33%20%62%79%20%6D%64%6F%72%69%6F%2E%20%7C%20%41%6C%6C%20%72%69%67%68%74%73%20%52%65%73%65%72%76%65%64%2E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2F%64%69%76%3E%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%64%69%76%20%69%64%3D%22%6D%6F%76%69%6E%67%42%75%74%74%6F%6E%22%20%63%6C%61%73%73%3D%22%6D%78%2D%32%20%61%6C%69%67%6E%2D%73%65%6C%66%2D%63%65%6E%74%65%72%20%64%2D%6E%6F%6E%65%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%61%20%68%72%65%66%3D%22%23%6C%61%6E%64%69%6E%67%22%3E%3C%70%20%63%6C%61%73%73%3D%22%63%2D%64%62%6C%75%65%20%78%6C%66%6F%6E%74%2D%73%6D%69%64%20%74%65%78%74%2D%75%70%70%65%72%63%61%73%65%20%74%65%78%74%2D%63%65%6E%74%65%72%22%3E%26%23%38%35%39%33%3B%3C%2F%70%3E%3C%2F%61%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2F%64%69%76%3E%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%3C%2F%66%6F%6F%74%65%72%3E'));
let myFunction = () => {
    // Declare variables
    var input, filter, shop, item, containerx, shopbtn, a, i, labelx, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    shop = document.getElementById("shop-items");
    item = shop.getElementsByClassName('details');
    containerx = shop.getElementsByClassName('xdata');
    labelx = document.getElementById("curr-status");
    shopbtn = document.getElementById("shop-btn");
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < item.length; i++) {
        a = item[i].getElementsByTagName("h4")[0];
        txtValue = a.textContent || a.innerText;
  
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display = "block";
            containerx[i].style.display = "block";
            labelx.innerHTML = "";
            shopbtn.style.display = "block";
           
        } else {
            item[i].style.display = "none";
            containerx[i].style.display = "none";
            labelx.innerHTML = "Trying to find a hidden Gem?";
            shopbtn.style.display = "block";
        }
    }
}
myFunction();
