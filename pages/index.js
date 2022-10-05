import Head from "next/head";
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import axios from "axios";
import { useState } from "react";


export async function getServerSideProps(ctx) {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const { data } = await axios("http://localhost:3000/api/products");
  return {
    props: {
      product: data,
      admin,
    },
  };
}

const Home = ({ product, admin }) => {
  const [close, setClose] = useState(true);
  return (
    <div className="Home">
       <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <AddButton setClose={setClose} />}
      <ProductList product={product} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
};

export default Home;
