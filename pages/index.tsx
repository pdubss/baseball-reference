import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Greeting from "../components/greeting";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BaseballRef Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav>hello_world</nav>
        <Greeting message={"Welcome back"} name={"Perry"}></Greeting>
      </main>
    </div>
  );
}
