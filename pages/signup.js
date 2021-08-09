import SignUplayout from "@components/SignUplayout";
import Head from "next/head";
import { Box, Container } from "@material-ui/core";
export default function sigin() {
  return (
    <>
      <Head>
        <title>SignUp</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Container maxWidth="lg">
        <Box p={1}>
          <div className="siguplayout">
            <SignUplayout />
          </div>
        </Box>
      </Container>
    </>
  );
}
