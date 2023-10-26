import Header from "./component/Header";
import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import Footer from "./component/Footer";
import { createContext, useState } from "react";
import MyModal from "./component/Modal";
import Loader from "./component/Loader";

export const ProductsContext = createContext();
export const CartListContext = createContext();
function App() {
  let [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation()
  let cartAlert = sessionStorage.getItem("alert");
  const { cartItems, products } = useLoaderData();
  if (cartItems.length > 0 && cartAlert !== "true") {
    sessionStorage.setItem("alert", true);
    console.log(isOpen);
    setIsOpen('true');
    console.log(isOpen);
  }
  const [cartItem, setCartItem] = useState(cartItems);
  return (
    <ProductsContext.Provider value={products}>
      <CartListContext.Provider value={[cartItem, setCartItem]}>
        <Header />
        <div className="min-h-[calc(100vh-100px)]">
          {navigation.state === "loading" ? <Loader/>: <Outlet/>}
        </div>
        <Footer />
        <MyModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </CartListContext.Provider>
    </ProductsContext.Provider>
  );
}

export default App;
