import styles from "@/src/components/Main/Main.module.css";
import { Links } from "@/src/components/Links";
import { HeadLine } from "@/src/components/HeadLine";

export function Main(props) {
  return (
    <main className={styles.main}>
      <HeadLine page={props.page}>
        {<code className={styles.code}>pages/{props.page}.js</code>}
      </HeadLine>
      <Links />
    </main>
  );
}
