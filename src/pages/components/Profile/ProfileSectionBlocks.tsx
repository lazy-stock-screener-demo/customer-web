import React from "react";
import {
  FormSectionHeaderText,
  FormSectionDesc,
  FormSectionHeader,
  FormSectionBody,
  FormSection,
  FormSectionFieldCon,
} from "../../../views/dump/FormSection";
import { Panel } from "../../../views/dump/Panel";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { TimeZoneSelect } from "../../../views/logic/UserProfile/TimeZome";
import { useInputStyles } from "../../../views/logic/Signin";

export const MainSettingSection = () => {
  const inputStyle = useInputStyles();
  return (
    <FormSection direction={"row"} aL={"flex-start"}>
      <FormSectionHeader>
        <FormSectionHeaderText>Main settings</FormSectionHeaderText>
        <FormSectionDesc>
          This information will appear on your profile
        </FormSectionDesc>
      </FormSectionHeader>
      <FormSectionBody>
        <FormSectionFieldCon>
          <TextField
            className={inputStyle.input}
            size="small"
            label="Full name"
            type="text"
            autoComplete="current-password"
            variant="outlined"
            InputLabelProps={{
              style: { color: "#8e8e8e" },
            }}
            InputProps={{
              style: { color: "#fff" },
            }}
          />
          <FormSectionDesc>
            Enter your name, so people you know can recognize you
          </FormSectionDesc>
        </FormSectionFieldCon>
        <FormSectionFieldCon>
          <TextField
            className={inputStyle.input}
            size="small"
            label="Email"
            type="text"
            autoComplete="current-password"
            variant="outlined"
            InputLabelProps={{
              style: { color: "#8e8e8e" },
            }}
            InputProps={{
              style: { color: "#fff" },
            }}
          />
          <FormSectionDesc>This is your email</FormSectionDesc>
        </FormSectionFieldCon>
        <FormSectionFieldCon>
          <TextField
            className={inputStyle.input}
            size="small"
            disabled
            label="License"
            type="text"
            autoComplete="current-password"
            variant="outlined"
            InputLabelProps={{
              style: { color: "#8e8e8e" },
            }}
            InputProps={{
              style: { color: "#fff" },
            }}
          />
          <FormSectionDesc>
            The license level will determine what information you can reach.
          </FormSectionDesc>
        </FormSectionFieldCon>
      </FormSectionBody>
    </FormSection>
  );
};

export const TimeSettingSection = () => {
  const inputStyle = useInputStyles();
  return (
    <FormSection direction={"row"} aL={"flex-start"}>
      <FormSectionHeader>
        <FormSectionHeaderText>Time settings</FormSectionHeaderText>
        <FormSectionDesc>
          You can set your current timezone here
        </FormSectionDesc>
      </FormSectionHeader>
      <FormSectionBody>
        <FormSectionFieldCon>
          <TimeZoneSelect />
        </FormSectionFieldCon>
      </FormSectionBody>
    </FormSection>
  );
};
