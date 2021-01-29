import React, { useState, useEffect, useCallback, useMemo } from "react";
import Child from "./child";

export default function HooksPage() {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber(number + 1);
  };

  useEffect(() => {
    /*
     * Chạy 1 lần duy nhất
     * useEffect nếu như tham số thứ 2 là mảng rỗng thì nó là componentDidMount tương ứng bên class
     */
    console.log("useEffect - componentDidMount");
  }, []);

  useEffect(() => {
    /*
     * Chạy nhiều lần
     * useEffect nếu như tham số thứ 2 là mảng khác rỗng thì nó là componentDidUpdate tương ứng bên class
     */
    console.log("useEffect - componentDidUpdate");
  }, [number]);

  useEffect(() => {
    /**
     * Tương ứng với componentWillUnmount bên class
     */
    let inerval = setInterval(() => {
      console.log("Hello Cybersoft");
    }, 2000);
    return () => {
      console.log("useEffect - componentWillUnmount");
      clearInterval(inerval);
    };
  }, []);

  const showNumnber = () => {
    console.log("showNumnber");
  };

  const showNumberCallback = useCallback(showNumnber, []);

  const numberUp = () => {
    let i = 0;
    while (i < 1000) i++;
    console.log(i);
    return i;
  };

  const numberUpMemo = useMemo(() => numberUp(), []);

  return (
    <div>
      <h3>Number: {number}</h3>
      <button className="btn btn-success" onClick={handleClick}>
        Click
      </button>
      <Child showNumber={showNumberCallback} />
      <h3>NumberUp: {numberUpMemo}</h3>
    </div>
  );
}
