import NeonBanner from "@components/NeonBanner";
import { signinSchema } from "@validators/signinSchema";
import { useFormik } from "formik";
import { loginUser } from "@auth/auth";
import { Grid, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";
import { useState } from "react";
import CustomizedSnackbars from "./Alert";

const SignInlayout = () => {
  let router = useRouter();
  let [alertMessage, setAlert] = useState(null);
  const formSubmitted = async (event) => {
    const value = await loginUser(event);
    setAlert(value);
  };
  const formik = useFormik({
    initialValues: {
      mobile: "",
      password: "",
    },
    validationSchema: signinSchema,
    onSubmit: (val) => {
      formSubmitted(val);
    },
  });

  return (
    <>
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
        spacing={5}
      >
        <Grid item>
          <NeonBanner text="SignIn" />
        </Grid>
        <Grid item>
          {alertMessage ? (
            <CustomizedSnackbars type="error" message={alertMessage} />
          ) : (
            <></>
          )}
        </Grid>

        <Grid item xs={12}>
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
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  Get in!
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
};
export default SignInlayout;
