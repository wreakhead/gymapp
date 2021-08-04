import SignUplayout from "@components/SignUplayout";
import Head from "next/head";
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
      <div className="siguplayout">
        <SignUplayout />
      </div>
    </>
  );
}
