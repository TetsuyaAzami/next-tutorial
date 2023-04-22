import Head from "next/head";
import { Footer } from "@/src/components/Footer";
import { Main } from "@/src/components/Main";
import { Header } from "@/src/components/Header";
import { useBgColor } from "@/src/hooks/useBgLightBlue";
import { useCounter } from "@/src/hooks/useCounter";
import { useInputArray } from "@/src/hooks/useInputArray";

const About = (props) => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <div class="container">
        {props.isShow ? <h2>{props.doubleCount}</h2> : null}
        <button onClick={props.handleClick}>ボタン</button>
        <button onClick={props.handleDisplay}>
          {props.isShow ? "非表示" : "表示"}
        </button>
        <input type="text" onChange={props.handleChange} />
        <button onClick={props.handleAdd}>追加</button>
        <ul>
          {props.array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      <Main page="about" />
      <Footer />
    </div>
  );
};

export default About;
