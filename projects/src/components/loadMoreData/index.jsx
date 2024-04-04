import { useEffect, useState } from "react";
import "./loadMoreData.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [disabled, setDisabled] = useState(false);

  async function fetchProductsData() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`,
        {
          method: "GET",
        }
      );
      const productsData = await response.json();
      setLoading(false);
      setProducts((prevProducts) => {
        return [...prevProducts, ...productsData.products];
      });
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductsData();
  }, [count]);

  console.log(products);
  if (loading)
    return (
      <h1 style={{ marginTop: "300px", textAlign: "center" }}>Loading...</h1>
    );
  return (
    <div className='container'>
      <div className='products'>
        {!loading && products && products.length
          ? products.map((product, index) => {
              return (
                <div className='product' key={index}>
                  <img src={product.thumbnail} alt={product.title} />
                  <h3>{product.title}</h3>
                </div>
              );
            })
          : null}
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => setCount(count + 1)}
          disabled={count === 4 ? true : false}
        >
          Load more
        </button>

        {count === 4 && (
          <div style={{ textAlign: "center" }}>
            <h3>{count === 4 ? "You have reached till 100 products" : null}</h3>
          </div>
        )}
      </div>
    </div>
  );
}
