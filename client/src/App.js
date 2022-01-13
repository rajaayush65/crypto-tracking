import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import api from "./api";

function App() {
  const [count, setCount] = useState(0);
  const someRef = useRef(0);
  const MINUTE_MS = 70000;

  const tick = () => {
    setCount((prevState) => (prevState < 70 ? prevState + 1 : 0));
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

  async function updateCryptos() {
    return await api.putLatestCryptoCurrencies().then((data) => {
      console.log(data.data.success);
    });
  }

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);
    return () => clearInterval(timer);
  });

  useEffect(() => {
    if (count === 0) {
      mockAPI();
      updateCryptos();
    }
  }, [count]);

  return (
    <div className="h-full bg-gray-900">
      <Header />
      <Table />
    </div>
  );
}

export default App;
