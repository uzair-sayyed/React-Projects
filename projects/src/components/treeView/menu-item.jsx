import { useState } from "react";
import MenuList from "./menu-list";

export default function MenuItem({ item = {} }) {
  const [name, setName] = useState("uzair");
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggle(getCurrentLabel) {
    console.log(getCurrentLabel);
    setDisplayCurrentChildren((prevState) => {
      return {
        ...displayCurrentChildren,
        [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
      };
    });
  }
  console.log(displayCurrentChildren);

  return (
    <li>
      <div style={{ display: "flex", gap: "20px" }}>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span
            style={{ cursor: "pointer" }}
            onClick={() => handleToggle(item.label)}
          >
            {displayCurrentChildren[item.label] ? "-" : "+"}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
