import { checkLoggedIn } from "@auth/auth";
import DietLayout from "@components/Diet";
import { Container } from "@material-ui/core";
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
          {checkLoggedIn() ? <DietLayout /> : <></>}
        </Container>
      </div>
    </>
  );
}
