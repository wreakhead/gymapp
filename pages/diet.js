import DietLayout from "@components/Diet";
import { Box } from "@material-ui/core";
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
        <Box component="div" p={1}>
          <DietLayout />
        </Box>
      </div>
    </>
  );
}
