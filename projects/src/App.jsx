// import "./App.css";
import Accordian from "./components/accordian/Accordian";
import AutoSearchComplete from "./components/autoSearchComplete/AutoSearchComplete";
import ControlModal from "./components/customModalPopup";
import TabsContent from "./components/customTabs";
import GithubProfileFinder from "./components/githubProfileFinder/githubProfileFinder.";
import GithubFinder from "./components/githubProfileFinder/githubProfileFinder.";
import ImageSlider from "./components/imageSlider";
import LightDarkMode from "./components/lightDarkMode";
import LoadMoreData from "./components/loadMoreData";
import QrCode from "./components/qrCode";
import RandomColorGenerator from "./components/randomColorGenerator";
import ScrollIndicator from "./components/scrollIndicator";
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
      {/* <QrCode /> */}
      {/* <LightDarkMode /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <TabsContent /> */}
      {/* <ControlModal /> */}
      {/* <GithubProfileFinder /> */}
      <AutoSearchComplete />
    </div>
  );
}

export default App;
