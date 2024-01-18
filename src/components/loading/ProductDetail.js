import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [indexValue, setIndexvalue] = useState(0);

  const params = useParams();
  //   console.log(params.id);

  useEffect(() => {
    getSingleProduct();
  }, []);
  const getSingleProduct = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://dummyjson.com/products/${params.id}`
      );
      //   console.log(response.data);
      setProduct(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleIndex = (index) => {
    setIndexvalue(index);
  };
  return (
    <div className="product_details container mt-3 mt-md-5 mb-3 mb-lg-5">
      <div className="head">
        <div className="line"></div>
        <h2>Product Details</h2>
        <div className="line"></div>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="row">
          <div className="col-lg-6">
            <h5>Product Title: {product.title}</h5>
            <p className="price">Price:{product.price}</p>
            <p className="category">Category: {product.category}</p>
            <p className="brand">Brand: {product.brand}</p>
            <p className="available">Available Quantity: {product.stock}</p>
            <h4 className="description">Description:</h4>
            <p>{product.description}</p>
          </div>
          <div className="col-lg-6">
            <img
              src={`${product.images && product.images[indexValue]}`}
              className="w-100 ps-5 pe-5 detail_product_image"
              alt=""
            />
            <div className="images_thumb">
              {product.images &&
                product.images.map((img, index) => (
                  <img
                    src={img}
                    key={index}
                    onClick={() => handleIndex(index)}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
