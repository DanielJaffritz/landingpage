import { footerLinks } from "@/constants"
import logoImage from "@/public/logo.svg"
import Image from "next/image"
export default function Footer() {
  return <section className="py-16">
    <div>
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
        <div>
          <Image src={logoImage} alt="Layers Logo" />
        </div>
        <div>
          <nav className="flex gap-6">
            {footerLinks.map((link) => (
              <a href={link.href} key={link.label} className="text-white/50 text-sm">{link.label}</a>
            ))}
          </nav>
        </div>
      </div>
    </div>

  </section>
}
