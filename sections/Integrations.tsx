import Tag from "@/components/Tag";
import { integrations } from "@/constants";
import IntegrationColumn from "@/components/IntegrationColumn";

export default function Integrations() {
  return <section className="py-24 overflow-hidden">
    <div className="mx-10">
      <div className="grid lg:grid-cols-2 items-center lg:gap-16">
        <div>
          <Tag>Integrations</Tag>
          <h2 className="text-6xl font-medium mt-6">Plays well with{" "} <span className="text-lime-400">others</span></h2>
          <p className="text-white/50 mt-4 text-lg">Layers seamlessly connects with your favorite tools, making it easy to plug into any
            your workflow and collaborate across platforms.</p>
        </div>
        <div>
          <div className="h-100 lg:h-200 overflow-hidden grid mt-8 lg:mt-0 md:grid-cols-2 gap-4 mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <IntegrationColumn integrations={integrations} />
            <IntegrationColumn integrations={integrations.slice().reverse()} className="hidden md:flex" />
          </div>
        </div>
      </div>
    </div>
  </section>
}
