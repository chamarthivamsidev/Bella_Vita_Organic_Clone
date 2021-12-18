

// localStorage.setItem("cart_items", JSON.stringify(prod))

let cartData = JSON.parse(localStorage.getItem("cart_items")) || [];
// console.log(cartData);
showCartItems(cartData);

//For display cart item
function showCartItems(data) {
  let cartItemDiv = document.getElementsByClassName("cart-item")[0];
  cartItemDiv.innerHTML = null;

  data.map(function (item, index) {
    // Create the card, give it its class and innerHTML
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML += `<div class="item-card">
        <img src=${item.Img_url} alt="">
        <div class="item-text">
            <div class="head-item-name">
                <p class="item-name">${item.Name}</p>
            </div>
            <!-- <p class="item-offerId">Offer Identity: K49C32</p> -->
             
            <h4 id="item_price">Rs. ${item.Price}</h4>
            <div class="qty-div">
                <p>Quantity:</p>
                
            </div>
        </div>
    </div>`;

    // Created the button, give its classes and innerHTML
    const ext = document.createElement("div");
    ext.id = "external-part";

    const btn = document.createElement("div");
    btn.className = "ui qty-box";

    //decrementing qty
    let dec = document.createElement("button");
    dec.id = "dec";
    dec.innerText = "-";
    dec.addEventListener("click", () => {
      let currQty = item.Qty;
      currQty--;
      item.Qty = currQty;
      qty.value = currQty;
      window.location.reload();
      localStorage.setItem("cart_items", JSON.stringify(data));
      if (qty.value == 0) {
        // if Item qty is Zero then remove from cart
        removeItem(index);
      }
    });

    //qty input box
    let qty = document.createElement("input");
    qty.type = "number";
    qty.id = "qty";
    qty.value = item.Qty;

    //incrementing qty
    let inc = document.createElement("button");
    inc.id = "inc";
    inc.innerText = "+";
    inc.addEventListener("click", () => {
      let currQty = item.Qty;
      currQty++;
      item.Qty = currQty;
      qty.value = currQty;
      window.location.reload();
      localStorage.setItem("cart_items", JSON.stringify(data));
    });

    //remove from cart
    let remove_div = document.createElement("div");
    remove_div.classList = "remove";
    let remo = document.createElement("button");
    remo.innerHTML = `<button type="button" class="btn-close" disabled aria-label="Close"></button>
    <span>Remove</span>
    `;
    remo.classList = "left";
    //Adding function to remove item when click on remove button
    remo.addEventListener("click", () => {
      removeItem(index);
    });

    remove_div.appendChild(remo);

    btn.append(dec, qty, inc);

    // ext.appendChild(btn, remove_div)
    ext.append(btn, remove_div);
    // Append the button to the created card
    card.appendChild(ext);

    // Add the card to the hard coded html div
    cartItemDiv.append(card);
  });
}

// remove item when click on remove cross button
function removeItem(index) {
  cartData.splice(index, 1);
  localStorage.setItem("cart_items", JSON.stringify(cartData));
  window.location.reload();
  // before aadding updated cart list, remove previous data from html
  cartItemDiv.innerHTML = null;
  showCartItems(cartData);
}

//cart Item Total value:
cart_total_value(cartData);
function cart_total_value(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    let pri = +data[i].Price;
    let q = +data[i].Qty;
    sum += pri * q;
  }
  document.getElementById("cartValue").innerText = "Rs. " + sum;
  localStorage.setItem("bella_cartValue", sum);
}

// checkout button -On click switch to checkout page
function goTocheckoutpage() {
  localStorage.setItem("bella_cart_total", cartValue);
  window.location.href = "checkout.html";
}


// bottom slideshow

import {sticky_view, getStars, slider, whatsappChat} from "./components/utility.js"

// importing data.js file for product data
import {bestsellerList} from "./components/data.js"


// sticky bellacash and whatapp icon display 
let st=document.getElementsByClassName("sticky-view")[0];
st.innerHTML=sticky_view();
whatsappChat();
 

// displaying slider items
const sdata = JSON.parse(bestsellerList());
slider(sdata,0, cartData, cart_total_value, showCartItems); //hare 0 is passing as arguments for class index where i want to inject html


