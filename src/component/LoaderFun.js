


const LoaderFunction = async () => {
  let res = await fetch("products.json");
  let products = await res.json();
  let shoppingCart = {};
  let isStorage = localStorage.getItem("shoppingCart");
  if (isStorage) {
    shoppingCart = JSON.parse(isStorage);
  }
  let cartItem = [];
  for (const id in shoppingCart) {
    let singleCart = products.find((item) => item.id == id);
    singleCart.quantity = shoppingCart[id];
    cartItem.push(singleCart);
  }
  return {cartItem , products}
};

export default LoaderFunction;
