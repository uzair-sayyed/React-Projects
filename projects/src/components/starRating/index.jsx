import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

export default function StarRating({ noOfStars }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
    console.log(getCurrentIndex, "rating");
  }
  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
    console.log(getCurrentIndex, "MouseEnter Hover");
  }
  function handleMouseLeave() {
    setHover(rating);
    console.log(
      rating,
      "back to the selected rating state or initial 0 state until value get selected"
    );
  }

  return (
    <div className='star-rating'>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1; // 0 will we skip n start with 1 always

        return (
          <FaStar
            className={index <= (hover || rating) ? "active" : "inactive"}
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
}
