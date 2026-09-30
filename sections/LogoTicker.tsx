import { logos } from "@/constants";
import Image from "next/image";

export default function LogoTicker() {
  return <section className="py-24 overflow-x-clip">
    <div>
      <h3 className="text-center text-white/50 text-xl">Already chosen by these market leaders</h3>
      <div className="overflow-hidden mt-12 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-24 pr-24">
          {logos.map((logo) => (
            <Image src={logo.image} key={logo.name} alt={logo.name} />
          ))}
        </div>
      </div>
    </div>
  </section>
}
