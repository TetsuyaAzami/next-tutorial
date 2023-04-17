import { Inter } from "next/font/google";
import { Footer } from "@/src/components/Footer";
import { Main } from "@/src/components/Main";
import Head from "next/head";
import { Header } from "@/src/components/Header";
import styles from "@/src/styles/index.module.css";
import { useCallback } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const foo = 1;
  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Index</title>
      </Head>
      <Header />
      {/* <button onClick={() => alert("ボタンが押されました")}>ボタン</button> */}
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>
      <Main page="index" />
      <Footer />
    </div>
  );
}
