import Header from "./component/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./component/Footer";
import { createContext, useState } from "react";

export const ProductsContext = createContext();
export const CartListContext = createContext();
function App() {
  const { cartItems, products } = useLoaderData();
  const [cartItem, setCartItem] = useState(cartItems);
  return (
    <ProductsContext.Provider value={products}>
      <CartListContext.Provider value={[cartItem, setCartItem]}>
        <Header />
        <div className="min-h-[calc(100vh-100px)]">
          <Outlet />
        </div>
        <Footer />
      </CartListContext.Provider>
    </ProductsContext.Provider>
  );
}

export default App;
