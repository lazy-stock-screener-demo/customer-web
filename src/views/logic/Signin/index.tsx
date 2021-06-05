import React, { useEffect, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { useSigninForm } from "./hooks/useSigninForm";
import { FormCon } from "../../dump/Form";
import TextField from "@material-ui/core/TextField";
import { ErrorMessage } from "@hookform/error-message";
import { WithIdentityAPIHandler } from "../../../presenters/Customer/customerVM";
import { makeStyles } from "@material-ui/core/styles";

export const useInputStyles = makeStyles({
  root: {
    color: "#fff",
    border: "1px solid #616161",
    borderRadius: "4px",
    padding: "30px",
    marginBottom: "30px",
  },
  input: {
    borderRadius: "4px",
    fontSize: "1.2rem",
    margin: "5px 0",
    border: "1px solid #3c4146",
    color: "#fff",
  },
  span: {
    backgroundColor: "#fff",
  },
  submit: {
    marginTop: "10px",
    backgroundColor: "#fff",
    borderRadius: "4px",
  },
  select: {
    borderRadius: "4px",
    border: "1px solid #3c4146",
    color: "#fff",
    fontSize: "1.2rem",
  },
});

export const SigninUI = ({ handleSignin }): ReactElement => {
  const {
    handleSubmit,
    onSubmit,
    handleCustomerNameChange,
    handleCustomerPWDChange,
    errors,
  } = useSigninForm({ handleSignin });

  const inputStyle = useInputStyles();
  return (
    <FormCon onSubmit={handleSubmit(onSubmit)} className={inputStyle.root}>
      <TextField
        className={inputStyle.input}
        name="userName"
        label="UserName"
        type="text"
        variant="outlined"
        InputLabelProps={{
          style: { color: "#8e8e8e" },
        }}
        InputProps={{
          style: { color: "#fff" },
        }}
        onChange={handleCustomerNameChange}
      />
      <ErrorMessage
        errors={errors}
        name="userName"
        render={({ message }) => {
          return message ? <p>{message}</p> : <></>;
        }}
      />
      <TextField
        className={inputStyle.input}
        name="userPWD"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        InputLabelProps={{
          style: { color: "#8e8e8e" },
        }}
        InputProps={{
          style: { color: "#fff" },
        }}
        onChange={handleCustomerPWDChange}
      />
      <ErrorMessage
        errors={errors}
        name="userPWD"
        render={({ message }) => {
          return message ? <p>{message}</p> : <></>;
        }}
      />
      <TextField type="submit" value="Sign in" className={inputStyle.submit} />
    </FormCon>
  );
};

export default (props) => WithIdentityAPIHandler(props)(SigninUI)();
