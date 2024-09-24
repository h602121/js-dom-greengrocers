const state = {
  items: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35,
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.35,
    },
    {
      id: "003-apple",
      name: "apple",
      price: 0.35,
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 0.35,
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: 0.35,
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.35,
    },
    {
      id: "007-bell-pepper",
      name: "bell pepper",
      price: 0.35,
    },
    {
      id: "008-berry",
      name: "berry",
      price: 0.35,
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.35,
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.35,
    },
  ],
  cart: [],
};

function showList(list) {
  const storeList = document.getElementById("storeItems");
  storeList.innerHTML = "";

  list.forEach(function (item) {
    const listItem = `
      <li>
        <div class="store--item-icon">
          <img src="assets/icons/${item.id}.svg" alt="${item.name}" />
        </div>
        <button onclick=addToCart("${item.id}")>Add to cart</button>
      </li>`;

    storeList.innerHTML += listItem;
  });
}
showList(state.items);

function addToCart(itemId) {
  var cartItem = state.cart.find((x) => x.id === itemId);
  if (cartItem !== undefined) {
    state.cart.forEach(function (item) {
      if (item.id === itemId) {
        item.amount += 1;
      }
    });
  } else {
    var newItem = state.items.find((x) => x.id === itemId);
    newItem.amount = 1;
    state.cart.push(newItem);
  }
  renderCart();
}
function incrementAmount() {
  item.amount += 1;
}

function renderCart() {
  const cartList = document.getElementById("cartItems");
  cartList.innerHTML = "";
  state.cart.forEach(function (item) {
    cartList.innerHTML += `<li>
    <img
      class="cart--item-icon"
      src="assets/icons/${item.id}.svg"
      alt="${item.name}"
    />
    <p> ${item.name}</p>
    <button onClick=removeFromCart("${item.id}") class="quantity-btn remove-btn center">-</button>
    <span class="quantity-text center">${item.amount}</span>
    <button onClick=addToCart("${item.id}") class="quantity-btn add-btn center">+</button>
  </li>
  `;
  });
  getTotalCost();
}
renderCart();

function removeFromCart(itemId) {
  var cartItem = state.cart.find((x) => x.id === itemId);
  cartItem.amount -= 1;

  if (cartItem.amount === 0) {
    state.cart.splice(state.cart.indexOf(cartItem), 1);
  }
  renderCart();
}

function getTotalCost() {
  const sum = document.getElementById("cost");
  sum.innerHTML = "";
  let total = 0;

  state.cart.forEach(function (item) {
    total += item.price * item.amount;
  });
  sum.innerHTML += `<span id="cost" class="total-number">${total.toFixed(
    2
  )}£</span>`;
}
getTotalCost();
