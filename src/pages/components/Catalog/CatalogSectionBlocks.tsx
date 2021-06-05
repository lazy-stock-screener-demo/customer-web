import React, { memo } from "react";
import { Panel, RowGroup } from "../../../views/dump/Panel";
import Card, { CardList } from "../../../views/dump/set-up/CardList";
import {
  Section,
  SectionHeader,
  SectionBody,
} from "../../../views/dump/StockSection";
import { KeyFactorList } from "../../../views/logic/KeyFactors";
import {
  NetIncomeGraph,
  OperatingCashFlowGraph,
} from "../../../views/logic/ProfitDiagram/ProfitDiagrams";
import { ScoreRadarDiagram } from "../../../views/logic/ScoreRadarDiagram/KeyFactorDiagram";
import { CompanyInfoList } from "../../../views/logic/CompanyInfo/CompanyInfoList";

export const InfoSecion = memo(() => {
  console.log("Render InfoSecion");
  return (
    <Section>
      <SectionHeader>InfoSection</SectionHeader>
      <SectionBody>
        <Panel jC={"center"} marginBottom={"0rem"} direction={"column"}>
          <CompanyInfoList />
        </Panel>
      </SectionBody>
    </Section>
  );
});

export const RadarChartSection = memo(() => {
  console.log("Render RadarChartSection");
  return (
    <Section>
      <SectionHeader>RadarChartSection</SectionHeader>
      <SectionBody>
        <Panel jC={"center"} marginBottom={"0rem"} direction={"row"}>
          <ScoreRadarDiagram />
        </Panel>
      </SectionBody>
    </Section>
  );
});

export const KeyFactorSection = memo(() => {
  return (
    <Section>
      <SectionHeader>KeyFactorSection</SectionHeader>
      <SectionBody>
        <Panel jC={"center"} marginBottom={"0rem"} direction={"column"}>
          <KeyFactorList />
        </Panel>
      </SectionBody>
    </Section>
  );
});

export const ReportSection = memo(({ children }) => {
  return (
    <Section>
      <SectionHeader>Report Section</SectionHeader>
      <SectionBody>
        <Panel jC={"center"} marginBottom={"0rem"} direction={"column"}>
          <>{children}</>
        </Panel>
      </SectionBody>
    </Section>
  );
});

export const ProfitTabSection = memo(() => {
  return (
    <RowGroup jC={"center"} marginBottom={"0rem"}>
      <CardList>
        <Card>
          <NetIncomeGraph />
        </Card>
        <Card>
          <OperatingCashFlowGraph />
        </Card>
      </CardList>
    </RowGroup>
  );
});
