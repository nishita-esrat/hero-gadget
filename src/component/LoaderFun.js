


const LoaderFunction = async () => {
  let res = await fetch("products.json");
  let products = await res.json();
  let shoppingCart = {};
  let isStorage = localStorage.getItem("shoppingCart");
  if (isStorage) {
    shoppingCart = JSON.parse(isStorage);
  }
  let cartItems = [];
  for (const id in shoppingCart) {
    let singleCart = products.find((item) => item.id == id);
    singleCart.quantity = shoppingCart[id];
    cartItems.push(singleCart);
  }
  return {cartItems , products}
};

export default LoaderFunction;
