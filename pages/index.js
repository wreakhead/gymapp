import { checkLoggedIn } from "@auth/auth";
import HomeLayout from "@components/HomeLayout";
import { Box } from "@material-ui/core";
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
      <Box component="div" p={1}>
        {checkLoggedIn()?<HomeLayout />:<></>}
      </Box>
    </>
  );
};

export default Home;
