
function getSuspender(promise) {
  let status = "pending";
  let response;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );
  
  const read= () => {
    switch(status){
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default:
        return response;

    }
  }

  return {read};
}

export function fetchData(url) {

  const options = {
    headers: {
      'Authorization': "CHhfRWlJA70ctrrr52pEsbMlhAY0A2pXj6P7Xe41fQCnWNBCF03R5c1u"
    }
  };

  const promise = fetch(url, options)
    .then((response) => response.json())
    .then((data) => data)

  return getSuspender(promise);
}