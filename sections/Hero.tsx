import Button from "@/components/button";
import Pointer from "@/components/pointer";
import designExample1Image from "@/public/design-example-1.png"
import designExample2Image from "@/public/design-example-2.png"
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="mx-10 relative">
        <div className="absolute -left-32 top-16 hidden lg:block">
          <Image src={designExample1Image} alt="Design example 1 image" />
        </div>
        <div className="absolute -right-64 -top-16 hidden lg:block">
          <Image src={designExample2Image} alt="Design example 2 image" />
        </div>
        <div className="absolute left-56 top-96 hidden lg:block">
          <Pointer name="Andrea" />
        </div>
        <div className="absolute right-80 -top-4 hidden lg:block">
          <Pointer name="Bryan" color="red" />
        </div>

        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-linear-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">$7.5M seed round raised</div>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 md:mx-20 lg:mx-100">Impactful design, created effortlessly</h1>
        <p className="text-center txt-xl text-white/50 mt-8 max-w-2xl mx-auto">
          Deisgn tools should not slow you down. Layers combines
          powerful features with an intuitive interface that in
          your creative flow.
        </p>
        <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <input type="email" placeholder="Enter your email" className="bg-transparent px-4 md:flex-1 w-full outline-none" />
          <Button className="whitespace-nowrap" size="sm" variant="primary" type="submit">Sign Up</Button>

        </form>

      </div>
    </section>
  )
}
