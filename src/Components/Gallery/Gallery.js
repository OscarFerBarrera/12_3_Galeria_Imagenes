// import useFetch from "../../Hooks/useFetch";
import { Suspense } from "react";
import { fetchData } from "./fetchData";
import "./Gallery.css";

const apiData = fetchData("https://api.pexels.com/v1/search?query=España");


const Gallery = ({ findText }) => {

  // const API_URL = `https://api.pexels.com/v1/search?query=${findText}`;
 
  const data = apiData.read();
  // const [info] = useFetch(API_URL);
  // console.log(props.findText)
  return (
    <div>
      <p>llamada Api</p>
      {/* {console.log(info.status === 400)}
      {info?.photos.map((item) => console.log(item))} */}
      <Suspense fallback={<div>Cargando...</div>}>
        {/* {data?.photos.map((item) => console.log(item.src.original))} */}
        {data?.photos.map((item) => <img key={item.id} src={item.src.original}></img>
        )} 
      </Suspense>
    </div>
  )
}

export default Gallery;