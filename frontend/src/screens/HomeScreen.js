import React, { useEffect } from "react";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { listTopSellers } from "../actions/userActions";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sliderjs from "../components/Sliderjs";
import { Link } from "react-router-dom";
import SubCategories from "../components/SubCategories";


export default function HomeScreen() {

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const userTopSellersList = useSelector((state) => state.userTopSellersList);
  const {
    loading: loadingSellers,
    error: errorSellers,
    users: sellers,
  } = userTopSellersList;

  useEffect(() => {
    dispatch(listProducts({}));
    dispatch(listTopSellers());
  }, [dispatch]);

  return (
    <>
      <Header />

      <div className="slider-max">
        <Sliderjs />
      </div>

      <div className="box-spacing max-width main-body ">
        {loadingSellers ? (
          <LoadingBox></LoadingBox>
        ) : errorSellers ? (
          <MessageBox variant="danger">{errorSellers}</MessageBox>
        ) : (
          <>
            {sellers.length === 0 && <MessageBox>No Seller Found</MessageBox>}
            <>
              <div className="title">Top Seller</div>
              <div className="top-seller-contain">
                  {sellers.map((seller) => (
                    <div key={seller.id} className="top-seller-image">
                      <Link to={`/seller/${seller._id}`}>
                        <img
                          src={seller.seller.logo}
                          alt={seller.seller.name}
                        />
                      </Link>
                    </div>
                  ))}
              </div>
            </>
          </>
        )}

        <div className="box-spacing">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {products.length === 0 && (
                <MessageBox>No Product Found</MessageBox>
              )}
              <div className="title">Featured Products</div>
              <div className="box-spacing h-product">
                {products.map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))}
              </div>
            </>
          )}

          <div className="sub-cat">
            <SubCategories />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
