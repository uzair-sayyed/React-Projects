import { useEffect, useState } from "react";
import {
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
  BsCircleFill,
} from "react-icons/bs";
import "./imageSlider.css";

export default function ImageSlider({ url, limit, page }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      setImages(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    if (url) fetchImages(url);
  }, [url]);

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  if (loading) return <h1 style={{ marginTop: "300px" }}>Loading...</h1>;
  if (error) return <h1 style={{ marginTop: "300px" }}>{error}</h1>;

  return (
    <div className='container'>
      <BsArrowLeftCircleFill
        className='arrow arrow-left'
        onClick={handlePrevious}
      />
      {images && images.length > 0
        ? images.map((image, index) => (
            <img
              className={currentSlide === index ? "image" : "image hide-image"}
              key={image.id}
              src={image.download_url}
              alt={image.download_url}
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className='arrow arrow-right'
        onClick={handleNext}
      />
      {!loading && (
        <div className='circle-indicators'>
          {!loading && images && images.length > 0
            ? images.map((image, index) => (
                <span key={index} onClick={() => setCurrentSlide(index)}>
                  <BsCircleFill
                    className={
                      currentSlide === index
                        ? "circle-indicator active-circle-indicator"
                        : "circle-indicator"
                    }
                  />
                </span>
              ))
            : null}
        </div>
      )}
    </div>
  );
}
