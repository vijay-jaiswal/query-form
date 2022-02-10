import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);
  console.log("first");

  return [data];
// const getComments = async () => {
//     const res = await fetch(url);
//     const list = await res.json();
//     setData(list);
//   };
//   useEffect(() => {
//     getComments();
//   },[]);
//  return [data]
};

export default useFetch;