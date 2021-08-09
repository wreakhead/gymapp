import { checkLoggedIn } from "@auth/auth";
import DietLayout from "@components/Diet";
import { Box, Container } from "@material-ui/core";
import Head from "next/head";
export default function diet() {
  return (
    <>
      <div className="">
        <Head>
          <title>Diet</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <Container maxWidth="lg">
          <Box component="div" p={1}>
            {checkLoggedIn() ? <DietLayout /> : <></>}
          </Box>
        </Container>
      </div>
    </>
  );
}
