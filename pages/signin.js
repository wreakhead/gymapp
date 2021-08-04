import SignInlayout from "@components/SignInlayout";
import Head from "next/head";
export default function sigin() {
  return (
    <>
      <div className="">
        <Head>
          <title>SignIn</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <div className="siginlayout">
          <SignInlayout />
        </div>
      </div>
    </>
  );
}
