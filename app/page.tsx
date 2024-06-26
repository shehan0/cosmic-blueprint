import Head from "next/head";
import Hero from "./components/Hero";
import AstrologyForm from "./components/AstrologyForm";

export default function Home() {
  return (
    <>
      <Hero />
      <AstrologyForm />
    </>
  );
}
