import NeonBanner from "@components/NeonBanner";
import { signinSchema } from "@validators/signinSchema";
import { useFormik } from "formik";
import { loginUser } from "@auth/auth";
import { Box, Grid, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";
import { useState } from "react";
import CustomizedSnackbars from "./Alert";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import DialpadIcon from "@material-ui/icons/Dialpad";

const SignInlayout = () => {
  const router = useRouter();
  const [alertMessage, setAlert] = useState(null);
  const [showPassword, setshowPassword] = useState(false);
  const [alertType, alertTypeSet] = useState("error");
  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const formSubmitted = async (event) => {
    const value = await loginUser(event);

    setAlert(value);
    if (value == "welcome!") {
      alertTypeSet((prev) => "success");
      router.push("/");
    } else alertTypeSet((prev) => "error");
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
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid
          item
          style={{ display: "flex", justifyContent: "center" }}
          xs={12}
          sm={6}
        >
          <NeonBanner text="SignIn" />
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
                  id="mobile"
                  name="mobile"
                  label="Cell No."
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                  helperText={formik.touched.mobile && formik.errors.mobile}
                  InputProps={{
                    endAdornment: (
                      <div>
                        <DialpadIcon />
                      </div>
                    ),
                  }}
                />
              </Grid>
              <Grid item>
                <Grid item>
                  <TextField
                    variant="filled"
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      ),
                    }}
                  />
                </Grid>
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
                      Get in!
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      color="primary"
                      variant="contained"
                      fullWidth
                      onClick={() => {
                        router.push("/signup");
                      }}
                    >
                      Sign Up
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
export default SignInlayout;
