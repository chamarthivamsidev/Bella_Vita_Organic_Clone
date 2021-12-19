export function sticky_view() {
  return `<div class="bella-cash fixed">
    <img src="https://cdn.sweettooth.io/v1/images/launcher_icons/crown.svg?color=%23000000" alt="Bella Cash"
        srcset="" />
    <h6>Bella Cash</h6>
</div>
<div class="whatapp-icon fixed">
    <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/t/259/assets/whatsapp.svg?v=10753259276865380946"
        alt="" /> 
</div>
<div class="chat-popup" id="myForm">
  <form action="/action_page.php" class="form-container">
    <h3>Bella Vita Organic</h3>

    <label for="msg"><b>Please drop Your Message</b></label>
    <textarea placeholder="Type message.." name="msg" required></textarea>

    <button type="submit" class="btn">Send</button>
    <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
  </form>
</div>`;
}

// ratting script
export function getStars(rating) {
  // Round to nearest half
  rating = Math.round(rating * 2) / 2;
  let output = [];

  // Append all the filled whole stars
  for (var i = rating; i >= 1; i--)
    output.push(
      '<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;'
    );

  // If there is a half a star, append it
  if (i == 0.5)
    output.push(
      '<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;'
    );

  // Fill the empty stars
  for (let i = 5 - rating; i >= 1; i--)
    output.push(
      '<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;'
    );

  return output.join("");
}

export function whatsappChat() {
  // whatsapp chat
  let chat = document.getElementsByClassName("whatapp-icon")[0];
  chat.addEventListener("click", openForm);

  let cancel = document.getElementsByClassName("cancel")[0];
  cancel.addEventListener("click", closeForm);

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
}

// slider function
// sData: product array List of products
// i : index of class container(like getElementsByClassName("container")[0], hare i=0)
// cartData : receving cartitem list
// cart_total_value : its function to update cart total price
// showCartItems : its function call to, updating cart items display wall

export function slider(sdata, i, cartData, cart_total_value, showCartItems) {
  let slide_div = document.getElementsByClassName("item-slider-div")[i];
  slide_div.innerHTML = null;

  sdata.forEach((item, index) => {
    let card = document.createElement("div");
    card.classList = "slider-card anim";

    let i_div = document.createElement("div");
    i_div.addEventListener("mouseenter", function () {
      document.getElementsByClassName("buy-now-tag")[index].style.display =
        "block";
    });

    i_div.addEventListener("mouseleave", function () {
      document.getElementsByClassName("buy-now-tag")[index].style.display =
        "none";
    });

    let img = document.createElement("img");
    img.src = item.Img_url;
    i_div.appendChild(img);

    img.addEventListener("mouseenter", function () {
      document.getElementsByClassName("buy-now-tag")[index].style.display =
        "block";
    });

    // onmouseout effect
    img.addEventListener("click", function () {
      localStorage.setItem("brod_view", JSON.stringify(item));
      window.location.href = "./prodView.html";
    });

    let buy_now = document.createElement("div");
    buy_now.classList = "buy-now-tag";
    buy_now.innerHTML = `<div id="buy"><p>BUY NOW</p></div>
      <div id="quick"><p>QUICK VIEW</p></div>`;

    buy_now.addEventListener("mouseover", function () {
      let ef = document.getElementsByClassName("buy-now-tag")[index];
      ef.style.display = "block";

      // //   // onclick adding item to cart
      ef.addEventListener("click", () => {
        cartData.unshift(item);
        console.log(cartData);
        cart_total_value(cartData);
        showCartItems(cartData);
        localStorage.setItem("cart_items", JSON.stringify(cartData));
      });
    });

    let name = document.createElement("p");
    name.innerHTML = item.Name;
    name.classList = "slide-card-name";

    let rating_span = document.createElement("span");
    rating_span.id = "stars";
    rating_span.innerHTML =
      getStars(item.Rating) + `<span>${item.Review} review</span>`;

    let price_div = document.createElement("div");
    price_div.className = "price-div";

    let old_price = document.createElement("h4");
    old_price.classList = "old_price";
    let old = 93;
    old += Number(item.Price);
    old_price.innerText = "Rs. " + old;

    let price = document.createElement("h4");
    price.innerText = "Rs." + item.Price;

    price_div.append(old_price, price);

    // rating_div.append(rating);
    card.append(i_div, buy_now, name, rating_span, price_div);
    slide_div.append(card);
  });

  // slider control functions
  let l_btn = document.getElementsByClassName("l_btn")[i];
  l_btn.addEventListener("click", function () {
    leftbtn(sdata);
  });

  let r_btn = document.getElementsByClassName("r_btn")[i];
  r_btn.addEventListener("click", function () {
    rightbtn(sdata);
  });

  // slider control buttons(left and right)

  // automatic sliding by interval of 3 seconds
  // setInterval(function () {
  //   leftbtn(sdata);
  // }, 5000);

  // left button
  function leftbtn(list) {
    let temp = list.shift();
    list.push(temp);
    slider(list, i);
  }

  // right button
  function rightbtn(list) {
    let temp = list.shift();
    list.push(temp);
    slider(list, i);
  }
}
