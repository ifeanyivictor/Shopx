import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Product(props) {
  const { product } = props;
  return (
    <div className="product-card">
      <div className="product-img">
        <Link to={`/product/${product._id}`}>
          <img className="medium" src={product.image} alt={product.name} />
        </Link>
        <div className="seller-name">
        <Link to={`/seller/${product.seller._id}`}>
          {product.seller.seller.name}
        </Link>
        </div>
      </div>
      <div className="product-details">
        <Link to={`/product/${product._id}`}>
          <h3>{product.name}</h3>
        </Link>
        <div className="product-cost">
          <div className="product-price">₦{product.price}</div>
          <Rating
            rating={product.rating}
            numReviews={product.numReviews}
          ></Rating>
        </div>
      </div>
    </div>
  );
}
