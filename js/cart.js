
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
                        <span id="old-price">${oldPrice}.00</span>/<span>&#8369;${item * price}.00</span> <span class="stats">${stats}</span>
                        <div class="cart-button">
                            <span>
                            <i onclick="removeFromCart(${id})" class="fa-regular fa-square-minus"></i>  
                            </span>                     
                                <p id=${id} class="cart-item-price">${item}</p>
                            <span>
                                <i onclick="addToCart(${id})" class="fa-solid fa-square-plus"></i>
                            </span>
                           
                        </div>
                    </div>

                </div>

                <div class="removeItemButton">
                    <i onclick="removeItem(${id})" class="fa-solid fa-circle-xmark"></i>
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
        <p class="display-6"><a href="./index.html">Click here <i class="fa-solid fa-clipboard-list"></i> to order.</a></p>
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

let addMore = () => {
    location.replace("./index.html")
}

let confirmOrder = () => {
    location.replace("./checkout.html")
}

let clearCart = () => {
    cart = [];
    generateCartItems();
    calculation();
    localStorage.setItem('cartData', JSON.stringify(cart));
}

let totalAmount = (x) => {

    if (cart.length !==0) {
        let amount = cart.map((x) => {
            let {item, id} = x;
            let search = shopItemsData.find((y)=> y.id === id) || [];
            return item * search.price;
        }).reduce((x,y)=> x + y, 0); // total amount
        label.innerHTML = `
        <h2 class="darker-text"> Total amount: &#8369;${amount}</h2>
        <button class="btn btn-primary p-3 mx-2" onclick="addMore()">Add more</button>
        <button class="btn btn-warning p-3 mx-2" onclick="confirmOrder()">Done</button>
        <button class="btn btn-danger p-3 mx-2" onclick="clearCart()">Clear</button>
        `;

    } else return;

};

totalAmount();
// NEED TO UPDATE THE CART VALUE UPON CLOSING OR REMOVING AN ITEM