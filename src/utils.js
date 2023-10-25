// add to cart item
const addToCart = (id) => {
  let shoppingCart = {};
  let isStorage = localStorage.getItem("shoppingCart");
  if (isStorage) {
    shoppingCart = JSON.parse(isStorage);
  }
  let quantity = shoppingCart[id];
  if (quantity) {
    shoppingCart[id] = quantity + 1;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
};

// remove item
const removeItem = async (id) => {
  let res = await fetch("products.json");
  let products = await res.json();
  let shoppingCart = {};
  let isStorage = localStorage.getItem("shoppingCart");
  if (isStorage) {
    shoppingCart = JSON.parse(isStorage);
  }
  delete shoppingCart[id];
  let cartItems = [];
  for (const id in shoppingCart) {
    let findCart = products.find((item) => item.id === id);
    findCart.quantity = shoppingCart[id]
    cartItems.push(findCart)
  }
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  return cartItems
};
export { addToCart, removeItem };
