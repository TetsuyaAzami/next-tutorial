import { Inter } from "next/font/google";
import { Footer } from "@/src/components/Footer";
import { Main } from "@/src/components/Main";
import Head from "next/head";
import { Header } from "@/src/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Index</title>
      </Head>
      <Header />
      <Main page="index" />
      <Footer />
    </div>
  );
}
