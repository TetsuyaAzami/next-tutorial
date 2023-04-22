import styles from "@/src/components/Links/Links.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const Links = (props) => {
  return (
    <div className={styles.grid}>
      <button onClick={props.handleReduce}>減らす</button>
      {props.items.map((item) => {
        return (
          <a
            key={item.href}
            href={item.href}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={[inter.className, styles.title]}>
              {item.title} <span>-&gt;</span>
            </h2>
            <p className={[inter.className, styles.description]}>
              {item.description}
            </p>
          </a>
        );
      })}
    </div>
  );
};
