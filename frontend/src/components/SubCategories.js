import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listProductCategories } from "../actions/productActions";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";

export default function SubCategories() {
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);

  return (
    <>
      {loadingCategories ? (
        <LoadingBox></LoadingBox>
      ) : errorCategories ? (
        <MessageBox variant="danger">{errorCategories}</MessageBox>
      ) : (
        <div className="categories-bx">
          {categories.map((search, index) => (
            <div key={index} className="categories-bx">
              <Link to={`/search/category/${search}`}>
                <div className="categories-l">{search}</div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
