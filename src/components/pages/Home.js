import Banner from "../header/Banner";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://dummyjson.com/products");
      setData(response.data.products);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  console.log(data);
  //async keyword is used for asynchronous function. and the await keyword is used inside asynchrous function to pause the execution of the function until the promise is resolved or rejected.
  //the try and catch blocks are used for error handling. The idea is to place the code that mightgenerate an error inside the try block,and if an error occurs, it is caught and handle by catch block.
  return (
    <div>
      <Banner />
      <div className="all_products mt-3 mt-md-5 mb-3 mb-lg-5">
        <div className="head">
          <div className="line"></div>
          <h2>Latest Arrivals</h2>
          <div className="line"></div>
        </div>
        {loading ? (
          <loading />
        ) : (
          <div className="row">
            {data &&
              data.slice(0, 8).map((p) => (
                <div className="col-lg-3 col-md-6" key={p.id}>
                  <div className="product_card p-3 m-3">
                    <div className="product_image">
                      <img src={`${p.thumbnail}`} className="w-100" alt="" />
                    </div>
                    <hr />

                    <div className="product_content">
                      <h5 className="title">{p.title}</h5>
                      <div className="category_price">
                        <p className="category">{p.category}</p>
                        <p className="price">${p.price}</p>
                      </div>

                      <div className="buttons">
                        <Link to={`/product-detail/${p.id}`}>
                          <button>View Details</button>
                        </Link>
                        <button>Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}

        <div className="view_button">
          <button>View All</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
