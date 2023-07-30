
let cart = JSON.parse(localStorage.getItem("cartData")) || [];

let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

let calculation =()=> {
    cartAmount.innerHTML = cart.map((allItems) => allItems.item).reduce( (x , y) => x + y, 0 );
}

calculation();

let generateCartItems = () => {
    if (cart.length !==0){

        return shoppingCart.innerHTML = cart.map((x) => {

            let {id,item} = x;
            let search = shopItemsData.find((y)=> y.id === id) || []
            let {productImg, oldPrice, description, price,productName,stats,quantity} = search;
            return `

            <div class="cart-item">
            
                <div class="cart-product-content">   

                    <div class="cart-imgItemContainer"> 
                        <img class="imgItemSmall" src="${productImg}" alt="" />
                        <p class="px-2">${productName} | ${description}</p>
                    </div>
 
                    <div id="price">          
                        <span id="stats">${stats}</span> <span id="old-price">${oldPrice}</span>/<span>&#8369;${item * price}</span> x<span id=${id} class="cart-item-price">${item}</span>
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

};


let orderCompleted = () => {
    cart = [];
   // generateCartItems();
    //calculation();
    localStorage.setItem('cartData', JSON.stringify(cart));
    location.replace("./index.html")
}

let totalAmount = (x) => {
let raNd = Math.floor((Math.random() * 100) + 1);
const ranD = new Date();

    if (cart.length !==0) {
        let amount = cart.map((x) => {
            let {item, id} = x;
            let search = shopItemsData.find((y)=> y.id === id) || [];
            return item * search.price;
        }).reduce((x,y)=> x + y, 0); // total amount
        label.innerHTML = `   
       
        <div class="d-flex justify-content-center align-content-center">
            <div>
                <p><span class="textuppercase h5 my-5">Order Reference ID:</span> ${ranD.getHours()}${raNd}-${ranD.getFullYear()}-${ranD.getMilliseconds()}-${raNd}-${ranD.getDate()}</p>
                <p><span class="textuppercase h5">Date Ordered:</span> ${ranD.toDateString()}, ${ranD.toLocaleTimeString()}</p>
                <h2 class="textuppercase h5 darker-text py-1"> Total amount: &#8369;${amount}.00</h2>
                
            </div>
        </div>
        
        <div class="text-center">
            <p class="display-2 mt-2">Order Received!</p>
            <button class="btn btn-warning p-3 mx-2" onclick="orderCompleted()">Order Again</button>
            <p class="c-pointer h4 pt-5"><a onclick="orderCompleted()">Click here to home <i class="fa-solid fa-house"></i></a></p>
        <div>

        
        `;
            //Month Year milSec random getdate
    } else return;

};

totalAmount();
// NEED TO UPDATE THE CART VALUE UPON CLOSING OR REMOVING AN ITEM