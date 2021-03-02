import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Header />
      <Home />
      <div className="products w-4/5 mx-auto border ">
        <div className="row flex">
          <Product
            title="Product Number 1"
            price={250}
            rating={3}
            image="https://www.pngkey.com/png/full/307-3071593_accessories-shopping-cart-icon-white.png"
          />
          <Product
            title="Product Number 2"
            price={500}
            rating={4}
            image="https://www.pngkey.com/png/full/307-3071593_accessories-shopping-cart-icon-white.png"
          />
        </div>
        <div className="row flex">
          <Product
            title="Product Number 3"
            price={50}
            rating={1}
            image="https://www.pngkey.com/png/full/307-3071593_accessories-shopping-cart-icon-white.png"
          />
          <Product
            title="Product Number 4"
            price={250}
            rating={5}
            image="https://www.pngkey.com/png/full/307-3071593_accessories-shopping-cart-icon-white.png"
          />
          <Product
            title="Product Number 5"
            price={250}
            rating={3}
            image="https://www.pngkey.com/png/full/307-3071593_accessories-shopping-cart-icon-white.png"
          />
        </div>
        <div className="row flex">
          <Product
            title="Product Number 6"
            price={100}
            rating={3}
            image="https://www.pngkey.com/png/full/307-3071593_accessories-shopping-cart-icon-white.png"
          />
        </div>
      </div>
    </>
  );
}

export default App;
