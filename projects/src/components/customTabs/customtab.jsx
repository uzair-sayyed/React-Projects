import { useState } from "react";
import "./customTabs.css";

export default function CustomTabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className='container'>
      <div className='heading'>
        {tabsContent &&
          tabsContent.map((tabItem, index) => (
            <div
              className={`${
                currentTabIndex === index ? "active" : "inactive"
              } label`}
              onClick={() => handleClick(index)}
            >
              <span>{tabItem.label}</span>
            </div>
          ))}
      </div>

      <div className='content' style={{ color: "red" }}>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
