import { sticky_view, getStars, slider, whatsappChat } from "./utility.js";

// importing data.js file for product data
import { bestsellerList } from "./data.js";

// sticky bellacash and whatapp icon display
let st = document.getElementsByClassName("sticky-view")[0];
st.innerHTML = sticky_view();
whatsappChat();

// displaying slider items
const sdata = JSON.parse(bestsellerList());
slider(sdata,0);



// getting data from local storage to detail view
let brodView = JSON.parse(localStorage.getItem("brod_view"));

let rat = +brodView.Rating;
rat = rat.toFixed(1);

// rating injection
let r = document.getElementById("ratings");
r.innerHTML =
  getStars(brodView.Rating) + rat + " (" + brodView.Review + " reviews)";

let p = document.createElement("div");
p.id = "price_div";
p.innerHTML = `<div class="price-div">
<h4 class="old_price">Rs. 399</h4>
<h4>Rs. ${brodView.Price}</h4>
</div>`;
r.append(p);


//adding name of item
document.getElementsByClassName("prod_name")[0].innerText=brodView.Name;

// product name in navbar
document.getElementsByClassName("productname")[0].innerText= "Home  > "+ brodView.Name


// adding img url to html
let img1 = document.querySelector(".img1>img");
img1.src = brodView.Img_url;
let img2 = document.querySelector("#img2");
img2.src = brodView.Img_url;

// Quantity incrementing and decrementing

document.getElementById("inc1").addEventListener("click", incq);
document.getElementById("dec1").addEventListener("click", decq);

function incq() {
  let qt = document.querySelector("#qt").value;
  document.querySelector("#qt").value = ++qt;;  
}
function decq() {
    let qt = document.querySelector("#qt").value;
    if(qt>=1){
        document.querySelector("#qt").value = --qt;
    }
    
}


// buy now button
document.getElementById("test1").addEventListener("click", goCart);
function goCart() {
  window.location.href = "cart.html";
}
