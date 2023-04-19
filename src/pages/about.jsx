import Head from "next/head";
import { Footer } from "@/src/components/Footer";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";
import { useBgLightBlue } from "@/src/hooks/useBgLightBlue";
import { useCounter } from "@/src/hooks/useCounter";
import { useInputArray } from "@/src/hooks/useInputArray";

export default function About() {
  useBgLightBlue();
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();

  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <div class="container">
        <h1>{isShow ? count : null}</h1>
        <button onClick={handleClick}>ボタン</button>
        <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
        <input type="text" onChange={handleChange} />
        <button onClick={handleAdd}>追加</button>
        <ul>
          {array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      <Main page="about" />
      <Footer />
    </div>
  );
}
