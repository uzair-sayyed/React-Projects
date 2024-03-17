import { useState } from "react";
import accordianData from "./AccordianData";
import "./style.css";

export default function Accordian() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleId, setMultipleId] = useState([]);

  //   console.log(enableMultiSelection);
  function handleSingleSelection(getDataId) {
    setSelectedItem(selectedItem === getDataId ? null : getDataId);
    console.log("clicked from single selection");
  }

  function handleMultipleSelection(getDataId) {
    setMultipleId((prevState) => {
      return [...prevState, getDataId];
    });
  }

  return (
    <div className='accordian'>
      <div>
        <div className='wrapper'>
          <button
            onClick={() => setEnableMultiSelection((prevState) => !prevState)}
          >
            Enable Multi-Selection
          </button>
          {accordianData.map((data) => (
            <div
              className='item'
              key={data.id}
              onClick={() =>
                enableMultiSelection
                  ? handleMultipleSelection(data.id)
                  : handleSingleSelection(data.id)
              }
            >
              <div className='question'>
                <h2 className='title'>{data.title}</h2>
                <span>+</span>
              </div>

              {enableMultiSelection ? (
                multipleId.indexOf(data.id) ? (
                  <div className='answer'>{data.answer}</div>
                ) : null
              ) : selectedItem === data.id ? (
                <div className='answer'>{data.answer}</div>
              ) : // <div className='answer'>{data.answer}</div>
              null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// {selectedItem === data.id ? (
//   <div className='answer'>{data.answer}</div>
// ) : // <div className='answer'>{data.answer}</div>
// null}
