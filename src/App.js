import React from "react";
import CustomForm from "./Components/CustomForm/CustomForm";
import Gallery from "./Components/Gallery/Gallery";


// const API_URL = "https://api.pexels.com/v1/search?query=car";



function App() {

  // const data = apiData.read();
  const [findText, setFindText] = React.useState("")

  const updateFindText = (text) => {
    setFindText(text);
    console.log(text)
  }

  return (
    <div>
      <CustomForm updateFindText={updateFindText}></CustomForm>
      <Gallery findText={findText} ></Gallery>

    </div>
  );
}

export default App;