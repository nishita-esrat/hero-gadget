
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

export {addToCart}