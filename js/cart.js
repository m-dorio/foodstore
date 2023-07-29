
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
            
                <div class="product-content">       
                    <div class="details">
                        <p><h4>${productName}</h4></p>
                    </div>   
                    
                    <div class="imgItemContainer"> 
                    <img class="imgItemSmall" src="${productImg}" alt="" />
                    </div>
                
                    <div>
                        <p>${description}</p>
                    </div>  
                    
                </div>

                <div class="small-price-quantity">
                    <div id="price">
                        <span id="stats">${stats}</span>
                        <span id="old-price">${oldPrice}</span>/<span>&#8369;${item * price}</span>
                    </div>

                    <div class="cart-button">
                        <span>
                        <i onclick="removeFromCart(${id})" class="bi bi-dash-square"></i>   
                        </span>                     
                            <p id=${id} class="cart-item-price">${item}</p>
                        <span>
                            <i onclick="addToCart(${id})" class="bi bi-plus-square"></i>
                        </span>
                    </div>

                                
                </div>

                <div class="removeItemButton">
                    <i onclick="removeItem(${id})" class="bi bi-x-circle"></i>
                </div>

            </div>
      `              
            
            // <div class="cart-card">

            //     <div class="cart-item">

            //         <h5 class="title-price">
            //             <p>${productName}</p>
            //             <p>${stats}</p>
            //         </h5>
            //         <img class="imgItemSmall" src="${productImg}" alt="" />

            //         <div class="mini-price-x">
            //             <div class="cart-button">
            //                 <span>
            //                     <i onclick="removeFromCart(${id})" class="bi bi-dash-square"></i>   
            //                 </span>                     
            //                     <p id=${id} class="cart-item-price">${item}</p>
            //                 <span>
            //                     <i onclick="addToCart(${id})" class="bi bi-plus-square"></i>
            //                 </span>
            //             </div>
            //                 <h3>$${item * price}</h3>
            //         </div>


            //         <div class="details-mini">
            //             <div class="title-price-x">
            //                 <p class="cart-item-price">$${price} per item</p>
            //             </div>
            //         </div>

            //     </div>

            //     <div class="removeItemButton">
            //         <i onclick="removeItem(${id})" class="bi bi-x-circle"></i>
            //      </div>
            //  </div>
            
        }).join('\n');

    }
    else{
        shoppingCart.innerHTML = ``;
        label.innerHTML =`
        <div>
        <p class="display-2 my-5">Cart is currently empty.</p>
        <p class="display-6"><a href="./index.html">Click here <i class="bi bi-house-fill"></i> to order.</a></p>
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
        <button class="checkout">Checkout</button>
        <button onclick="clearCart()" class="removeAll">Clear All</button>
        `;

    } else return;

};

totalAmount();
// NEED TO UPDATE THE CART VALUE UPON CLOSING OR REMOVING AN ITEM