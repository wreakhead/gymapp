import HomeLayout from "@components/HomeLayout";
import { Box } from "@material-ui/core";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Box component="div" p={5}>
        <HomeLayout />
      </Box>
    </>
  );
};

export default Home;
