import { checkLoggedIn } from "@auth/auth";
import HomeLayout from "@components/HomeLayout";
import { Box } from "@material-ui/core";
import Head from "next/head";
import { useRouter } from "next/router";


const dashboard = () => {
  const router = useRouter();
  const pushtoSignin =() =>{
    router.push('/signin')
  }
  
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Box component="div" p={5}>
        {checkLoggedIn()? <HomeLayout /> : pushtoSignin }
        
      </Box>
    </>
  );
};

export default dashboard;
