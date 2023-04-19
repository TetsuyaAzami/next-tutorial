import styles from "@/src/components/Main/Main.module.css";
import { Links } from "@/src/components/Links";
import { HeadLine } from "@/src/components/HeadLine";
import { useState } from "react";

const ITEMS = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Docs",
    description:
      "Find in-depth information about Next.js features and&nbsp;API.",
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Learn",
    description:
      "Learn about Next.js in an interactive course with&nbsp;quizzes!",
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Templates",
    description:
      "Discover and deploy boilerplate example Next.js&nbsp;projects.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy",
    description:
      "Instantly deploy your Next.js site to a shareable URL with& nbsp; Vercel.",
  },
];

export function Main(props) {
  const [items, setItem] = useState(ITEMS);
  const handleReduce = () => {
    setItem((prevItem) => prevItem.slice(0, prevItem.length - 1));
  };

  return (
    <main className={styles.main}>
      <HeadLine
        page={props.page}
        onClick={() => alert("クリックされました")}
        items={items}
      >
        {<code className={styles.code}>pages/{props.page}.js</code>}
      </HeadLine>
      <Links items={items} handleReduce={handleReduce} />
    </main>
  );
}
