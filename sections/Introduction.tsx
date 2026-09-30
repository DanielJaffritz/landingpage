import Tag from "@/components/Tag";
import { introductionText } from "@/constants";

export default function Introduction() {
  return <section className="py-28 lg:py-40">
    <div className="mx-10">
      <div className="flex justify-center">
        <Tag>Introducing Layers</Tag>
      </div>
      <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
        <span>Your creative process deserves better.</span>{" "}
        <span className="text-white/15">{introductionText}</span>
        <span className="text-lime-400 block">That is why we built Layers.</span>

      </div>
    </div>
  </section>
}
