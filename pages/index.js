import { checkLoggedIn } from "@auth/auth";
import HomeLayout from "@components/HomeLayout";
import { Box, Container } from "@material-ui/core";
import Head from "next/head";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  

  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Container maxWidth="lg">
        <Box component="div" p={1} className="dashLayout">
          {checkLoggedIn() ? <HomeLayout /> : <></>}
        </Box>
      </Container>
    </>
  );
};

export default Home;
