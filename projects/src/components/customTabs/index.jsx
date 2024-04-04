import CustomTabs from "./customtab";

function ShowButton() {
  return <button>Submit</button>;
}

export default function TabsContent() {
  const content = [
    {
      label: "Tab 1",
      content: <div>This is Tab 1 Content</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is Tab 2 Content</div>,
    },
    {
      label: "Tab 3",
      content: <ShowButton />,
    },
  ];

  function handleOnChange(getCurrentIndex) {
    console.log(getCurrentIndex);
  }

  return <CustomTabs tabsContent={content} onChange={handleOnChange} />;
}
