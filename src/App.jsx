import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-100px)]">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default App;
