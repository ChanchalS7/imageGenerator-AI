import "./App.css";
import { useState } from "react";
import fetchImageData from "./fetchImageData";
function App() {
  const [searchItems, setSearchItems] = useState('')
  const [loading, setLoading] = useState(true)
  const [imagesArr, setImagesArr] = useState([])
  const [isLoadingVisible, setisLoadingVisible] = useState(false)
  const handleInput = async () => {
    setisLoadingVisible(true)
    setLoading(true)
    console.log("Getting Data and making request:", searchItems)
    const arr = await fetchImageData(searchItems);
    setLoading(false)
    setisLoadingVisible(false)
    console.log("Arr:", arr);
    setImagesArr(arr)
  }
  const styleObject = { display: isLoadingVisible === true ? "block" : "none" }

  return (
    <>

      <div className="container">
        <h1>Image Generator</h1>
        <div className="input_wrapper">
          <input
            value={searchItems}
            onChange={(e) => setSearchItems(e.target.value)}
            type="text"
            id="text-input" />
          <button
            onClick={handleInput}
            id="generate-button">Generate</button>
        </div>
        <div className="image-grid">
          <div className="placeholder">
            {loading == true ? <div style={styleObject}>...loading</div> : <img src={imagesArr[0].url}></img>}
          </div>
          <div className="placeholder">
            {loading == true ? <div style={styleObject}>...loading</div> : <img src={imagesArr[1].url}></img>}
          </div>
          <div className="placeholder">
            {loading == true ? <div style={styleObject}>...loading</div> : <img src={imagesArr[2].url}></img>}
          </div>
          <div className="placeholder">
            {loading == true ? <div style={styleObject}>...loading</div> : <img src={imagesArr[3].url}></img>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
