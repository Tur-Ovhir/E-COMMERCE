import { Navbar } from "@/Components/ navbar";
import { Caraousel } from "@/Components/Carousel";
import { Footer } from "@/Components/footer";
import { Footer2 } from "@/Components/footer2";
import { Header } from "@/Components/header";
import { Navbar2 } from "@/Components/navbar2";
import { Shine } from "@/Components/shine";
import { Carousel } from "@/Components/ui/carousel";
import { Uilchilgee } from "@/Components/uilchilgee";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full  ">
      <Navbar />
      <Navbar2 />
      <Caraousel />
      <Header />
      <Shine />
      <Uilchilgee />
      <Footer />
      <Footer2 />
    </div>
  );
}
