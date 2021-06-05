import { useContext, FormEvent, useEffect, useState } from "react";
import { Catalog } from "../../../../presenters/Catalog/catalogVM";

const state = {
  name: "",
  active: false,
};

export const useFactors = () => {
  const { dispatch } = useContext(Catalog);
  const [selectState, setSelect] = useState(state);

  function handleFactorClick(e: FormEvent<HTMLInputElement>) {
    e.preventDefault();
    setSelect((state) => {
      return {
        ...state,
        name: e.currentTarget.value,
        active: true,
      };
    });
  }
  useEffect(() => {
    dispatch({
      type: "EDIT_TRACKING_FACTOR",
      payload: {
        net_income: selectState,
      },
    });
  }, [selectState]);
  return {
    handleFactorClick,
  };
};
