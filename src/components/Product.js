import React from "react";
// ⭐️

function Product({ title, price, rating, image }) {
  return (
    <div className="shadow-md rounded flex flex-1 p-4 px-6 my-1 mx-2 items-center">
      <div>
        <p>{title} </p>
        <p>${price}</p>
        <p>
          {new Array(rating).fill().map((star) => (
            <>⭐️ </>
          ))}
        </p>
        <button className="bg-yellow-400 flex py-1 px-3 mt-2">
          Add to Cart{" "}
          <img
            className="w-6"
            src="https://www.pngkey.com/png/full/307-3071593_accessories-shopping-cart-icon-white.png"
          />
        </button>
      </div>
      <div className="ml-auto">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          className="h-40 mx-auto my-3"
        />
      </div>
    </div>
  );
}

export default Product;
