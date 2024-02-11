import "./CustomForm.css"
import React from "react";

const CustomForm = ({updateFindText}) => {

  const findTextRef = React.useRef();


  const doFindText = (event) => {

    const text = findTextRef.current.value;
    
    event.preventDefault();
    event.stopPropagation();

    updateFindText(text);

  }

  return (
    <div className="content__finder">

      <form id="form" onSubmit={doFindText}>
        <input
          type="text"
          name="textSearch"
          ref={findTextRef}
          className="inputText"
          placeholder="Introduce un texto de búsqueda"></input>
      </form>

      <button className="change_them">Cambiar Tema</button>

    </div>
  )
}


export default CustomForm;