import Head from "next/head";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OfferSection from "./components/OfferSection";
import SeoHead from "./components/SeoHead";

export default function Home() {
  return (
    <>
      <Head>
        <SeoHead />;
      </Head>
      <Header />
      <OfferSection />
      <Footer />
    </>
  );
}
