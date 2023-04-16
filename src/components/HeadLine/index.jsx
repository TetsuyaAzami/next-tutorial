import styles from "@/src/components/HeadLine/HeadLine.module.css";

export function HeadLine(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.page} page</h1>
      <p className={styles.description}>
        Get started by editing {props.children}
      </p>
      <button onClick={props.onClick}>ボタン</button>
    </div>
  );
}
