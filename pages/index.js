import Head from "next/head";
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div className="Home">
      <Head>
        <title>Food Ordering App</title>
        <meta name="description" content="Quality over quantity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <ProductList />
    </div>
  );
}
