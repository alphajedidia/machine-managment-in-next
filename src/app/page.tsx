import { Hero, Product } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" overflow-hidden">
      <Hero/>
      <Product/>
    </main>
  );
}
