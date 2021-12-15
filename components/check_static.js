function price_desc() {
  return `<div id="advert">
          <h2>Checkout Offer - 50% Additional<br />Discount</h2>
          <p class="blink_me">Last Few Hours Left!</p>
          <div id="slider">
            <div class="child">
              <img src="./checkout/check_1_1.jpg" alt="" />
            </div>
            <div class="child">
              <img src="./checkout/check_1_2.jpg" alt="" />
            </div>
          </div>
        </div>
        <div id="coupon_div">
          <div id="tag">
            <i class="bi bi-tag"></i>
          </div>
          <input type="text" />
          <button>APPLY</button>
        </div>
        <div id="total_div">
          <div id="total_div_top">
            <div id="sub_total_div">
              <p>Subtotal</p>
              <p id="sub_total">1218.00</p>
            </div>
            <div id="shipping_div">
              <p>Shipping</p>
              <p id="sub_total">Calculated at next step</p>
            </div>
          </div>
          <div id="line"></div>
          <div id="total_div_bottom">
            <div id="tdb">
              <p>Total</p>
              <p id="span">Including ₹ 185.80 in taxes</p>
            </div>
            <div id="tdb_amount"></div>
          </div>
        </div>`;
}

function check_content() {
  return `<div id="top">
          <div id="status">
            <div class="status_title">
              <div id="circle"><p style="margin: 0; margin-top: 4px">></p></div>
            </div>
            <div class="filled"></div>
            <div class="status_title">
              <div id="circle"><p style="margin: 0; margin-top: 4px">></p></div>
            </div>
            <div class="dotted"></div>
            <div class="status_title">
              <div id="circle"><p style="margin: 0; margin-top: 4px">></p></div>
            </div>
            <div class="dotted"></div>
            <div class="status_title">
              <div id="circle"><p style="margin: 0; margin-top: 4px">></p></div>
            </div>
          </div>
          <div id="top_titles">
            <p>CART</p>
            <p>DELIVERY ADDRESS</p>
            <p>PREPAID/COD</p>
            <p>PAYMENT</p>
          </div>
        </div>

        <section id="contact_info">
          <div id="contact_info_top">
            <h2 class="title">CONTACT INFORMATION</h2>
            <div id="login_details">
              <div id="admin">
                <img src="./checkout/admin.png" alt="" />
              </div>
              <div id="details">
                <p>vamsi chamarthi(vamsi1147@gmail.com)</p>
                <a href="#cart">Logout</a>
              </div>
            </div>
            <div id="check">
              <input type="checkbox" class="checkbox_size" />
              <label id="check_label">Email/SMS me with news and offers</label>
            </div>
            <div id="dotted_div"></div>
          </div>
          <div id="contact_info_bottom">
            <h2 class="title">SHIPPING ADDRESS</h2>
            <div id="fl">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control bw"
                  id="floatingInput1"
                  placeholder="Password"
                />
                <label for="floatingInput">First Name</label>
              </div>
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control bw"
                  id="floatingInput2"
                  placeholder="Password"
                />
                <label for="floatingPassword">Last Name</label>
              </div>
            </div>
            <div class="form-floating">
              <input
                type="text"
                class="form-control bw"
                id="floatingInput3"
                placeholder="Password"
              />
              <label for="floatingPassword"
                >Flat, House No, Building, Company, Apartment</label
              >
            </div>
            <div class="form-floating">
              <input
                type="text"
                class="form-control bw"
                id="floatingInput4"
                placeholder="Password"
              />
              <label for="floatingPassword"
                >Area, Colony, Street, Sector, Village</label
              >
            </div>
            <div id="f2">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control bw"
                  id="floatingInput5"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">City</label>
              </div>
              <div class="form-floating">
                <select
                  class="form-select"
                  id="floatingInput6"
                  aria-label="Floating label select example"
                >
                  <option>State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Tamilnadu">Tamilnadu</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Delhi">Delhi</option>
                </select>
                <label for="floatingSelectGrid">State</label>
              </div>
              <div class="form-floating">
                <input
                  type="number"
                  class="form-control bw"
                  id="floatingInput7"
                />
                <label for="floatingPassword">PIN code</label>
              </div>
            </div>
            <div class="form-floating">
              <input
                type="number"
                class="form-control bw"
                id="floatingInput8"
                placeholder="Password"
              />
              <label for="floatingPassword">Phone</label>
            </div>
            <button id="btn">CONTINUE TO SHIPPING & PAYMENT</button>
            <div id="payment_methods">
              <img
                src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/payments-stripe-sub-footer_2.svg?v=1616140901"
                alt="payment_methods"
                id="pm"
              />
            </div>
          </div>
          <footer>
            <span>Refund policy</span>
            <span>Privacy policy</span>
          </footer>
        </section>`;
}

function header() {
  return ` <div id="logo_box">
        <a href="#home">
          <img
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Bellavita_new_age_ayurveda_final_logo.png?41107"
            alt="logo"
            id="logo"
          />
        </a>
      </div>`;
}

export { price_desc, check_content, header };
