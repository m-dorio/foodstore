let shop = document.getElementById("shop-items");
let cartAmount = document.getElementById("cartAmount");
let mycart = document.getElementById("cart");

let cart = JSON.parse(localStorage.getItem("cartData")) || [];
    

let generateShop = () => {

    return (shop.innerHTML = shopItemsData
        .map((x) =>{

            let {id, productName, oldPrice, price, stats, quantity, description, productImg} = x;
            let search = cart.find((x)=> x.id === id) || []
            // on sale
            if (price < oldPrice ){
                
                oldPrice = `&#8369;${oldPrice}.00`; price = `&#8369;${price}.00`;}
            // increase
            else if (price > oldPrice ){
                oldPrice = `&#8369;${oldPrice}.00`; price = `&#8369;${price}.00`;}
            else{
                {oldPrice = "", price = `&#8369;${price}.00`, stats="";}
            }

            return `
                    
                    <div id="xdata" class="xdata">
                   
                        <div id="product-id-${id}">
                            
                            <div class="imgItemContainer"> 
                                <img class="imgItem" src="${productImg}" alt="">
                            </div>
                        
                            <div class="price-quantity">
                                <div id="price">
                                   <span id="old-price">${oldPrice}</span> <span>${price}</span>
                                 
                                </div>

                                <div class="cart-button">
                                    <span>
                                        <i onclick="removeFromCart(${id})"class="fa-regular fa-square-minus"></i>                     
                                    </span>
                                        <div id=${id} class="quantity">${search.item === undefined? 0: search.item}</div>
                                    <span>
                                        <i onclick="addToCart(${id})" class="fa-solid fa-square-plus"></i>
                                    </span>
                                </div>
                                
                            </div>
                            <div>       
                                <div class="details">
                                <p><h4>${productName}</h4></p>
                                <span id="stats">${stats}</span> ${description}
                                </div>
                            </div>
                            
                        </div>
                    </div>   
                 `;
            }

    ).join('\n'));

}
        
generateShop();


let checkOut = () => {
    location.replace("./cart.html")
}

let calculation =()=> {
        cartAmount.innerHTML = cart.map((allItems) => allItems.item).reduce( (x , y) => x + y, 0 );
}


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


        updateCart(selectedItem.id);
        localStorage.setItem('cartData', JSON.stringify(cart));

}

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

    localStorage.setItem('cartData', JSON.stringify(cart));
}

let updateCart = (id) => {
    let findProduct = cart.find((x)=> x.id === id);
    document.getElementById(id).innerHTML = findProduct.item;
    calculation();
}

calculation();
