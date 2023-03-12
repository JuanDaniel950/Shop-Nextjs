import React, { useContext } from "react";
import iconAddToCart from "@icons/bt_add_to_cart.svg";
import "./../styles/ProductItem.scss";
import type { Product } from "../utils/type";
import AppContext from "../context/AppContext";

const ProductItem = (product: Product) => {
  const { addToCart } = useContext<any>(AppContext);
  const handleClick = (productSelected: Product) => {
    console.log(productSelected);
    addToCart(productSelected);
  };
  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>{product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={iconAddToCart} alt="Icon add to cart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
