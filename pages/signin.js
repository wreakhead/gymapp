import SignInlayout from "@components/SignInlayout";
import Head from "next/head";
export default function sigin() {
  return (
    <>
      <Head>
        <title>SignIn</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <SignInlayout />
    </>
  );
}