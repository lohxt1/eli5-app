import { NextPage } from "next";
import Head from "next/head";
import SentenceInput from "@/containers/sentenceInput";
import SentenceOutput from "@/containers/sentenceOutput";
import LeftBlock from "@/components/layout/leftBlock";
import Main from "@/components/layout/main";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sentences</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        {/* <LeftBlock> */}
        <SentenceInput />
        <SentenceOutput />
        {/* </LeftBlock> */}
      </Main>
    </>
  );
};

export default Home;
