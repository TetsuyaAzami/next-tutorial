import { Inter } from "next/font/google";
import { Footer } from "@/src/components/Footer";
import { Main } from "@/src/components/Main";
import Head from "next/head";
import { Header } from "@/src/components/Header";
import styles from "@/src/styles/index.module.css";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [count]);

  return (
    <div>
      <Head>
        <title>Index</title>
      </Head>
      <Header />
      <div className={styles.container}>
        {count}
        <button onClick={handleClick}>ボタン</button>
      </div>
      <Main page="index" />
      <Footer />
    </div>
  );
}
