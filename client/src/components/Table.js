import React, { useEffect, useRef, useState } from "react";
import TableRow from "./TableRow";
import api from "../api";

function Table() {
  const [data, setData] = useState();
  const [count, setCount] = useState(0);
  const someRef = useRef(0);
  const MINUTE_MS = 60000;

  const tick = () => {
  const newCount = count < 60? count+1 : 0;
    setCount((prevState) => (prevState < 60 ? prevState + 1 : 0));
  };

  function mockAPI() {
    return new Promise((resolve, request) => {
      someRef.current = someRef.current + 1;
      setTimeout(
        () => resolve("New Data From API Call" + someRef.current),
        MINUTE_MS
      );
    });
  }

  async function getCryptos() {
    return await api.getCryptoCurrencies().then((data) => {
      return data.data.data;
    }).catch(err => {
       return console.log(err);
    });
  }
  

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);
    return () => clearInterval(timer);
  });

  useEffect(() => {
    if (count === 0) {
      mockAPI();
      getCryptos().then((cryptosData) => setData(cryptosData));
    }
  }, [count]);


  return (
    <div className="m-2 py-8 text-lg text-gray-600">
      <div className="flex mx-auto items-center justify-between pb-5">
        <h2 className="text-md mx-auto font-bold m-4">#</h2>
        <h2 className="text-md mx-auto font-bold m-4">Name</h2>
        <h2 className="text-md mx-auto font-bold m-4">Last</h2>
        <h2 className="text-md mx-auto font-bold m-4">Buy/Sell Price</h2>
        <h2 className="text-md mx-auto font-bold m-4">Volume</h2>
        <h2 className="text-md mx-auto font-bold m-4">Base_Unit</h2>
      </div>
      {data?.map((set,i) => {
        return (
          <TableRow
          key={set.name}
            id={i+1}
            name={set.name}
            last={set.last}
            buy={set.buy}
            sell={set.sell}
            volume={set.volume}
            base_unit={set.base_unit}
          />
        );
      })}
    </div>
  );
}

export default Table;
