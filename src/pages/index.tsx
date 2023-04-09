import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { isLoaded: userLoaded, isSignedIn, user } = useUser();

  if (!userLoaded) return <div />;

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {!isSignedIn && <SignInButton />}
        {isSignedIn && (
          <div className="space-x-3 text-center">
            <SignOutButton />
            <span>{user.fullName}</span>
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
