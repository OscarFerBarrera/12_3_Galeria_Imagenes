import React from "react";

const useFetch = (apiUrl) => {

  const [info, setInfo] = React.useState([]);

  const options = {
    headers: {
      'Authorization': "CHhfRWlJA70ctrrr52pEsbMlhAY0A2pXj6P7Xe41fQCnWNBCF03R5c1u"
    }
  };

  // Se ejecuta una vez a la creación del componente
  React.useEffect(() => {

    fetch(apiUrl, options)
      .then(data => data.json())
      .then(dataParsed => setInfo(dataParsed));

  }, [apiUrl]);

  return [info];
}

export default useFetch;
