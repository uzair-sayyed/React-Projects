import { useEffect, useState } from "react";
import "./scrollIndicator.css";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [scrolledPercentage, setScrolledPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollIndicator(e) {
    const scrollableHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const percentageScrolled = Math.floor(
      (window.scrollY / scrollableHeight) * 100
    );

    setScrolledPercentage(percentageScrolled);
  }

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleScrollIndicator(e));
    return () => {
      window.removeEventListener("scroll", handleScrollIndicator);
    };
  }, []);

  if (error) return <h2>Something went wrong!</h2>;
  if (loading) return <h2>Loading.... Please wait!</h2>;

  return (
    <div className='container'>
      <div className='upper-container'>
        <h1>Scroll Indicator</h1>
        <div className='scroll-indicator-container'>
          <div
            className='scroll-indicator'
            style={{ width: `${scrolledPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className='bottom-data-container'>
        {data && data.length > 0
          ? data.map((product) => <p key={product.id}>{product.title}</p>)
          : null}
      </div>
    </div>
  );
}
