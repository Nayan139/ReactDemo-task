import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Formik } from "formik";
import axios from "axios";
import { Header } from "../Header/Header";

const AddUserSchema = Yup.object().shape({
  userName: Yup.string().required("Required"),
  email: Yup.string().email("Please enter valid email").required("Required"),
  password: Yup.string()
    .required("Please Enter Password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});
export const User = () => {
  const [isSucess, setIsSucess] = useState(null);
  const [isResponse, setIsResponse] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setIsSucess(null);
      setIsResponse("");
    }, 2000);
  }, [isSucess]);
  console.log("isResponseeeeeeeeeeeeeeeeeeee", isResponse);
  return (
    <>
      <Header />
      <Container component={"main"}>
        <Typography variant="h5">Add User</Typography>
        <Formik
          initialValues={{ userName: "", email: "", password: "" }}
          validationSchema={AddUserSchema}
          onSubmit={async (values) => {
            try {
              console.log("values", values);
              const response = await axios.post(
                "http://localhost:3030/add/user",
                values
              );
              console.log("response is here", response);
              if (response) {
                setIsSucess(true);
                setIsResponse(response?.data);
              }
            } catch (error) {
              setIsSucess(false);
              setIsResponse(error.response.data);
              console.log("error", error.response.data);
            }
          }}
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Box sx={{ mt: 1 }}>
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="userName"
                      label="User name"
                      name="userName"
                      autoComplete="userName"
                      value={values.userName}
                      onChange={handleChange}
                      autoFocus
                    />
                    <Typography sx={{ color: "red" }}>
                      {errors.userName}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={handleChange}
                      autoFocus
                    />
                    <Typography sx={{ color: "red" }}>
                      {errors.email}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      autoComplete="current-password"
                    />
                    <Typography sx={{ color: "red" }}>
                      {errors.password}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Add user
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </form>
          )}
        </Formik>
        {isResponse ? (
          isResponse?.status === 201 ? (
            <Alert severity="success">{isResponse.message}</Alert>
          ) : (
            <Alert severity="error">{isResponse.error.message}</Alert>
          )
        ) : null}
      </Container>
    </>
  );
};
