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
                
                oldPrice = `&#8369;${oldPrice}`; price = `&#8369;${price}`;}
            // increase
            else if (price > oldPrice ){
                oldPrice = `&#8369;${oldPrice}`; price = `&#8369;${price}`;}
            else{
                {oldPrice = "", price = `&#8369;${price}`, stats="";}
            }

            return `
                    <div id="product-id-${id}" class="item">
                            <div class="imgItemContainer"> 
                                <img class="imgItem" src="${productImg}" alt="">
                            </div>
                           
                            <div class="price-quantity">
                                <div id="price">
                                    <span id="old-price">${oldPrice}</span> <span>${price}</span> <span id="stats">${stats}</span>
                                </div>

                                <div class="cart-button">
                                    <span>
                                        <i onclick="removeFromCart(${id})" class="bi bi-dash-square"></i>                        
                                    </span>
                                        <div id=${id} class="quantity">${search.item === undefined? 0: search.item}</div>
                                    <span>
                                        <i onclick="addToCart(${id})" class="bi bi-plus-square"></i>
                                    </span>
                                </div>
                            </div>

                            <div class="product-content">       
                                <div class="details">
                                    <p><h4>${productName}</h4></p>
                                    <p>${description}</p>
                                </div>
                            </div>                      
                    </div>`;
            }

    ).join('\n'));

}
        
generateShop();


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
