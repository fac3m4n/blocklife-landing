import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>BlockLife</title>
        <meta name="description" content="BlockLife Game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-primary px-6">
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Team />
        <Footer />
      </main>
    </>
  );
}
