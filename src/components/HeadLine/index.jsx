import styles from "@/src/components/HeadLine/HeadLine.module.css";

export const HeadLine = ({ page, onClick, children, items }) => {
  return (
    <div>
      <h1 className={styles.title}>{page} page</h1>
      <p className={styles.description}>
        Get started by editing {children}
        itemの数は{items.length}こです。
      </p>
      <button onClick={onClick}>ボタン</button>
    </div>
  );
};
