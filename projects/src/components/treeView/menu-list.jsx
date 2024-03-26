import MenuItem from "./menu-item";

export default function MenuList({ list = [] }) {
  return (
    <ul style={{ marginLeft: "30px", listStyleType: "none" }}>
      {list && list.length
        ? list.map((item) => {
            return <MenuItem item={item} key={item.label} />;
          })
        : null}
    </ul>
  );
}
