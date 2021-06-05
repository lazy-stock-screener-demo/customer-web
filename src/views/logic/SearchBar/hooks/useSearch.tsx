import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const currentStockState = {
  url: "",
  ticker: "",
};

export const useSearch = ({ location }) => {
  const [{ url, ticker }, setURL] = useState(currentStockState);
  const history = useHistory();
  const urlParams = new URLSearchParams(location.search);

  const handdleFetchStock = (e) => {
    const value = e["target"]["value"];
    let pathNameArr = location.pathname.split("/");
    pathNameArr.pop();
    setURL((prevState) => ({
      ...prevState,
      url: `${pathNameArr.join("/")}/${value}?${urlParams}`,
      ticker: value,
    }));
  };
  useEffect(() => {
    if (url) {
      history.replace(`${url}`);
    }
  }, [url]);
  return {
    handdleFetchStock,
    url,
    ticker,
  };
};
