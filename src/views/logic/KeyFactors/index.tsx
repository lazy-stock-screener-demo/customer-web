import React, { useContext, MouseEvent } from "react";
import Card, { CardList } from "../../dump/set-up/CardList";
import { FactorModal } from "./modal/FactorModal";
import { Catalog } from "../../../presenters/Catalog/catalogVM";
import { WithCatalogState } from "../../../presenters/Catalog/catalogVM";
import { CenterText } from "../../dump/Text";
import { Button } from "../../dump/Button";

export const KeyFactorList = WithCatalogState({})(() => {
  const { dispatch, trackingFactor } = useContext(Catalog);
  function handleModalOpen(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const commandName = e.currentTarget.value;
    dispatch({
      type: "SWITCHING_MODAL",
      payload: {
        isModalOpen: true,
        typeOfDialogue: commandName,
      },
    });
  }
  return (
    <>
      <FactorModal />
      <Button
        disableFocusRipple
        disableElevation
        type="button"
        variant="contained"
        color="primary"
        value="create"
        onClick={(e) => handleModalOpen(e)}
      >
        Edit Tracking Factor
      </Button>
      <CardList jC={"flex-start"}>
        {Object.keys(trackingFactor).length > 0 ? (
          Object.keys(trackingFactor).map((ele, i, array) => {
            return (
              <Card basis={"40%"}>
                <CenterText>{trackingFactor[ele].name}</CenterText>
                <CenterText>40%</CenterText>
              </Card>
            );
          })
        ) : (
          <CenterText>
            The Added Tracking Factor will be display Here.
          </CenterText>
        )}
      </CardList>
    </>
  );
});
