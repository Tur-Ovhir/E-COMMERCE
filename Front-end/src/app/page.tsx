import { Navbar } from "@/Components/ navbar";
import Carousel from "@/Components/Carousel";

import { Footer } from "@/Components/footer";
import { Footer2 } from "@/Components/footer2";
import { Header } from "@/Components/header";
import { Navbar2 } from "@/Components/navbar2";
import { Shine } from "@/Components/shine";
import { Uilchilgee } from "@/Components/uilchilgee";

export default function Home() {
  return (
    <div className="w-full  ">
      <Navbar />
      <Navbar2 />
      <Carousel />
      <Header />
      <Shine />
      <Uilchilgee />
      <Footer />
      <Footer2 />
    </div>
  );
}
