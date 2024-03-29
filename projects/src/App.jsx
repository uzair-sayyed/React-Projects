import "./App.css";
import Accordian from "./components/accordian/Accordian";
import ImageSlider from "./components/imageSlider";
import LoadMoreData from "./components/loadMoreData";
import QrCode from "./components/qrCode";
import RandomColorGenerator from "./components/randomColorGenerator";
import StarRating from "./components/starRating";
import TreeView from "./components/treeView";
import menus from "./components/treeView/data";

function App() {
  return (
    <div className='app'>
      {/* <Accordian /> */}
      {/* <RandomColorGenerator /> */}
      {/* <StarRating noOfStars={5} /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"5"}
        page={"1"}
      /> */}
      {/* <LoadMoreData /> */}
      {/* <TreeView menus={menus} /> */}
      <QrCode />
    </div>
  );
}

export default App;
