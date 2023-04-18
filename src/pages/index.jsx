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
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 3) {
      alert("3文字以上は入力できません。");
      return;
    }
    setText(e.target.value.trim());
  });

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

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
        {isShow ? <h1>{count}</h1> : null}
        <button onClick={handleClick}>ボタン</button>
        <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
        <input type="text" value={text} onChange={handleChange} />
      </div>
      <Main page="index" />
      <Footer />
    </div>
  );
}
