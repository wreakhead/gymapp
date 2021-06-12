import NeonBanner from "@components/NeonBanner";
import { useFormik } from "formik";
import { CircularProgress, Grid, TextField, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";
import { useState } from "react";
import CustomizedSnackbars from "./Alert";
import { signupSchema } from "@validators/signupSchema";
import { signUp } from "@auth/auth";

const SignUplayout = () => {
  let router = useRouter();
  let [alertMessage, setAlert] = useState(null);
  let [alertType, alertTypeSet] = useState("error");
  const formSubmitted = async (event) => {
    const value = await signUp(event);
    setAlert(value);
    if (value == "All done") {
      alertTypeSet((prev) => "success");
      router.push("/signin");
    } else alertTypeSet((prev) => "error");
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: (val) => {
      formSubmitted(val);
    },
  });

  return (
    <>
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid
          item
          style={{ display: "flex", justifyContent: "center" }}
          xs={12}
          sm={6}
        >
          <NeonBanner text="SignUp" />
        </Grid>

        <Grid item xs={12} sm={6}>
          <form onSubmit={formik.handleSubmit}>
            <Grid
              container
              direction="column"
              justify="space-around"
              alignItems="center"
              spacing={1}
            >
              <Grid item>
                <TextField
                  variant="filled"
                  fullWidth
                  id="name"
                  name="name"
                  label="Username"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item>
                <TextField
                  variant="filled"
                  fullWidth
                  id="mobile"
                  name="mobile"
                  label="Cell No."
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                  helperText={formik.touched.mobile && formik.errors.mobile}
                />
              </Grid>
              <Grid item>
                <TextField
                  variant="filled"
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid item>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Button
                      color="primary"
                      variant="contained"
                      fullWidth
                      type="submit"
                    >
                      {alertMessage ? (
                        <CircularProgress color="secondary" />
                      ) : (
                        <>Done!</>
                      )}
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      color="primary"
                      variant="contained"
                      fullWidth
                      onClick={() => {
                        router.push("/signin");
                      }}
                    >
                      Sign in
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
      {alertMessage ? (
        <CustomizedSnackbars type={alertType} message={alertMessage} />
      ) : (
        <></>
      )}
    </>
  );
};
export default SignUplayout;
