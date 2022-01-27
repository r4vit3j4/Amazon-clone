import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png"
        />
      </Head>
      {/* Header */}
      <Header />
      {/* Main */}
      <main className="max-w-screen-xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* Product Feed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://jsonkeeper.com/b/TE2Q").then((res) =>
    res.json()
  );
  return { props: { products } };
}

// https://fakestoreapi.com/products
// https://jsonkeeper.com/b/TE2Q
