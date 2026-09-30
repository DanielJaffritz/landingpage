import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import NavBar from "@/sections/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <LogoTicker />
      <Introduction />
      <Features />
    </>
  );
}
