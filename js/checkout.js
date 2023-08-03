
let cart = JSON.parse(localStorage.getItem("cartData")) || [];
let orderNum = JSON.parse(localStorage.getItem("orderData")) || [];
let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");
const ranD = new Date();


let calculation =()=> {
    cartAmount.innerHTML = cart.map((allItems) => allItems.item).reduce( (x , y) => x + y, 0 );

}

calculation();

let generateCartItems = () => {
    if (cart.length !==0){

        return shoppingCart.innerHTML = cart.map((x) => {

            let {id,item} = x;
            let search = shopItemsData.find((y)=> y.id === id) || []
            let {productImg, oldPrice, description, price, newPrice,productName,stats,quantity} = search;
            newPrice = item * price;
            // on sale
            if (price < oldPrice){
             
                stats="On Sale!";
                oldPrice = `&#8369;${oldPrice.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`; price = `&#8369;${price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;}
            // price increase
            else if (price > oldPrice ){
                stats="Price &#8593;";
                oldPrice = `&#8369;${oldPrice.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`; price = `&#8369;${price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;}
            else{
                {
                    oldPrice = "",
                    stats = "",
                    price = `&#8369;${price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
                }
            }

            return `

            <div class="cart-item">
            
                <div class="cart-product-content">   

                    <div class="cart-imgItemContainer"> 
                        <img class="imgItemSmall" src="${productImg}" alt="" />
                        <span id="stats" class="stats-mini twhite">${stats}</span> 
                        <p class="px-2 twhite">${productName} | ${description}</p>
                    </div>
 
                    <div id="price">          
                       <span id="old-price">${oldPrice}</span><span id=${id} class="cart-item-price">(x${item})</span>
                    </div>
                </div>
            </div>
      `              
        }).join('\n');

    }
    else{
        shoppingCart.innerHTML = ``;
        label.innerHTML =`
        <div>
        <p class="display-2 my-5">Cart is currently empty.</p>
        <p class="display-6"><a href="./index.html">Click here <i class="fa-solid fa-house"></i> to order.</a></p>
        </div>
        `;
    }

};

generateCartItems();

let addToCart = (id) => {
let selectedItem = id;
let findProduct = cart.find( (x) => x.id === selectedItem.id);

if (findProduct === undefined) {
    cart.push({
        id: selectedItem.id,
        item: 1,

    });
}

else {
        findProduct.item += 1;
    }

    generateCartItems();
    updateCart(selectedItem.id);
    localStorage.setItem('cartData', JSON.stringify(cart));
    localStorage.setItem('orderData', JSON.stringify(orderNum));

};

let removeFromCart = (id) => {
let selectedItem = id;
let findProduct = cart.find((x) => x.id === selectedItem.id);

if (findProduct === undefined) return;

else if (findProduct.item === 0) return;
else{
    findProduct.item -= 1;

    }

updateCart(selectedItem.id);
cart = cart.filter((x)=>x.item !== 0);
generateCartItems();
localStorage.setItem('cartData', JSON.stringify(cart));
localStorage.setItem('orderData', JSON.stringify(orderNum));
};

let updateCart = (id) => {
let findProduct = cart.find((x)=> x.id === id);
document.getElementById(id).innerHTML = findProduct.item;

calculation();
totalAmount();

};


let removeItem = (id) => {
    let selectedItem = id;
    cart = cart.filter( (x) => x.id !== selectedItem.id);
    generateCartItems();
    totalAmount();
    calculation();
    localStorage.setItem('cartData', JSON.stringify(cart));
    localStorage.setItem('orderData', JSON.stringify(orderNum));

};


let orderCompleted = () => {
    cart = [];
   // generateCartItems();
    //calculation();
    localStorage.setItem('cartData', JSON.stringify(cart));
    localStorage.setItem('orderData', JSON.stringify(orderNum));
    location.replace("./index.html")
}

let totalAmount = (x) => {


    if (cart.length !==0) {
        let amount = cart.map((x) => {
            let {item, id} = x;

            let search = shopItemsData.find((y)=> y.id === id) || [];
            return item * search.price;
        }).reduce((x,y)=> x + y, 0); // total amount
        orderCount = cart.map((allItems) => allItems.item).reduce( (x , y) => x + y, 0 );

        label.innerHTML = `   
       
        <div class="d-flex justify-content-center px-3 align-content-center">
            <div class="text-center">
                <p class="display-5 text-center mt-2">Order Received!</p>
                <p><span class="textuppercase h6 my-5">Order #: ${orderNum}</span></p>
                <p><span class="textuppercase h6">DATE:</span> ${ranD.toDateString()}, ${ranD.toLocaleTimeString()}</p>
                <img class="img-thumbnail" width="300" src="./images/qrcode2.png" alt="" srcset="">
                <p class="py-2">Please scan to pay your order here.</p>
                <h2 class="textuppercase h6 darker-text"> Total of (${orderCount}) Item(s): &#8369;${amount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
            </div> 
        </div>
        
        <div class="text-center">
            <p class="display-2">Thank you!</p>
            <button class="btn btn-warning p-3 mx-2" onclick="orderCompleted()">Order Again</button>
            <p class="c-pointer h4 pt-5"><a onclick="orderCompleted()">Click here to home <i class="fa-solid fa-house"></i></a></p>
        <div>

        
        `;
            //Month Year milSec random getdate
      
    } else return;
    console.log("order number: ", orderNum);
};

totalAmount();
// NEED TO UPDATE THE CART VALUE UPON CLOSING OR REMOVING AN ITEM
