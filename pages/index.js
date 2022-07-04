import Layout from "../components/Layout";
import ProductsList from "../components/ProductsList";

export default function Home() {
  return (
    <Layout>
      <main>
        <ProductsList />
      </main>
    </Layout>
  );
}
