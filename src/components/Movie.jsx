import React, { useEffect, useState } from "react";
import { GetData } from "../Services/GetData";
import Card from "./Card";

const Movie = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const res = await GetData();
      console.log(res);
      setData(res.data.Search);
    } catch (error) {
      console.log(error.message);
    }
  };
  if (!data) return <div className="">Loading...</div>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10">
      {data.map((currEle) => (
        <Card currEle={currEle} key={currEle.imdbID} />
      ))}
    </div>
  );
};

export default Movie;
