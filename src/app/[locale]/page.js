import Layout from "@/components/layout/Layout";
import HomePage from "@/components/pages/Home";
export default function Home({ params }) {
  const locale = params.locale
  return (
    <Layout >
      <HomePage locale={locale} />
    </Layout>
  );
}
