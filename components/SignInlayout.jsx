import NeonBanner from "@components/NeonBanner";
import { signinSchema } from "@validators/signinSchema";
import { useFormik } from "formik";
import { loginUser } from "@auth/auth";
import { Grid, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const SignInlayout = () => {
  const formSubmitted = async (event) => {
    await loginUser(event);
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
          <form onSubmit={formik.handleSubmit}>
          
            <TextField
              fullWidth
              variant="outlined"
              id="mobile"
              name="mobile"
              label="Cell No."
              value={formik.values.mobile}
              onChange={formik.handleChange}
              error={formik.touched.mobile && Boolean(formik.errors.mobile)}
              helperText={formik.touched.mobile && formik.errors.mobile}
            />
            <TextField
              fullWidth
              variant="outlined"
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
};
export default SignInlayout;
