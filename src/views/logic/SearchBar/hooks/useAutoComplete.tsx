import { useMemo, useState, useEffect } from "react";
import { apiCall } from "../../../../models/stock-catalog/use-case/readSearchAutoComplete/readSearchAutoCompleteUseCase";
// import { stockAPI } from "../../../../models/shared/infra/store";

const state = {
  value: "",
  result: [],
};

export const useAutoComplete = () => {
  const [{ value, result }, setSearchBar] = useState(state);
  const handleChange = ({ target: { value } }) => {
    setSearchBar((prevState) => ({
      ...prevState,
      value,
    }));
  };
  const handleBlur = () => {
    setSearchBar((prevState) => ({
      ...prevState,
      value: "",
      result: [],
    }));
  };
  useEffect(() => {
    if (value) {
      // apiCall(stockAPI, { char: value }).then((data) => {
      //   setSearchBar((prevState) => ({
      //     ...prevState,
      //     result: data["result"]["value"]["matchingList"],
      //   }));
      // });
    }
  }, [value]);
  const filterResults = useMemo(() => {
    return result;
  }, [result]);

  return {
    filterResults,
    handleChange,
    handleBlur,
    value,
    result,
  };
};
