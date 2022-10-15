import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import nextPackage from "package.json";

export default function Home({}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>PAYE Calculator</title>
        <meta name="description" content="Sri Lanka Tax Calculator" />
        <meta name="keywords" content="PAYE, Sri Lanka, Taxes, Taxation, Sri, Lanka, Tax, Sri Lankan Tax, Sri Lankan Taxes" />
        <meta name="author" content="Muiz Uvais" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a> v
          {nextPackage.version}
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>
      </main>
    </div>
  );
}
