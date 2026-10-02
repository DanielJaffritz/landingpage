import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import { features } from "@/constants";
import avatar1 from "@/public/avatar-ashwin-santiago.jpg";
import avatar2 from "@/public/avatar-lula-meyers.jpg";
import avatar3 from "@/public/avatar-florence-shaw.jpg";
import avatar4 from "@/public/avatar-owen-garcia.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";

export default function Features() {
  return <section className="py-24">
    <div className="mx-10 ">
      <div className="flex justify-center">
        <Tag>Features</Tag>
      </div>
      <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">Where power meets <span className="text-lime-400">simplicity</span></h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">

        <FeatureCard
          className="md:col-span-2 lg:col-span-1 group"
          title="Real-time Collaboration"
          description="Work together seamlessly with conflict-free team editing">
          <div className="aspect-video flex items-center justify-center">
            <Avatar className="z-40">
              <Image src={avatar1} alt="Avatar 1" className="rounded-full" />
            </Avatar>
            <Avatar className="-ml-6 border-indigo-500 z-30">
              <Image src={avatar2} alt="Avatar 2" className="rounded-full" />
            </Avatar>
            <Avatar className="-ml-6 border-amber-500 z-20">
              <Image src={avatar3} alt="Avatar 3" className="rounded-full" />
            </Avatar>
            <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
              <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                <Image src={avatar4} alt="Avatar 4" className="opacity-0 group-hover:opacity-100 transition absolute size-full rounded-full" />
                {Array.from({ length: 3 }).map((_, i) => (
                  <span className="size-1.5 rounded-full bg-white inline-flex" key={i}></span>
                ))}
              </div>
            </Avatar>
          </div>
        </FeatureCard>
        <FeatureCard
          className="md:col-span-2 lg:col-span-1 group"
          title="Interactive Prototyping"
          description="Engage your clients with prototypes that react to user actions">
          <div className="aspect-video flex items-center justify-center">
            <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition duration-500 text-center">We have achieved <span className="bg-linear-to-r from-purple-400/80 to-pink-400/80 group-hover:from-purple-400 group-hover:to-pink-400 transition duration-500 bg-clip-text text-transparent">incredible</span> growth this year</p>
          </div>
        </FeatureCard>
        <FeatureCard
          className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:cl-start-auto group"
          title="Keyboard Quick Actions"
          description="Powerful commands to help you create designs more quickly">
          <div className="aspect-video flex items-center justify-center gap-4">
            <Key className="w-28 transition-all duration-500 outline-2 outline-transparent outline-offset-4 group-hover:outline-lime-400 group-hover:translate-y-1">shift</Key>
            <Key className="transition-all duration-500 outline-2 outline-transparent outline-offset-4 group-hover:outline-lime-400 group-hover:translate-y-1 delay-150">alt</Key>
            <Key className="transition-all duration-500 outline-2 outline-transparent outline-offset-4 group-hover:outline-lime-400 group-hover:translate-y-1 delay-300">C</Key>
          </div>
        </FeatureCard>
      </div>
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        {features.map((feature) => (
          <div key={feature} className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group">
            <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">&#10038;</span>
            <span className="font-medium md:text-lg">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
}
