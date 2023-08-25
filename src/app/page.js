import Image from "next/image";
import Feachers from "@/components/featchers/featchers";

import Hero from "@/components/Hero/Hero";
import Price from "@/components/Price/Price";
import FreeDownload from "@/components/FreeDownload/FreeDownload";

export default function Home() {
  return (
    <>
      <Hero />
      <FreeDownload />
      <Feachers />
      <Price />
    </>
  );
}
