import Image from "next/image";
import logo from "@/public/logo.svg"
import Button from "@/components/button";
import { navbarLinks } from "@/constants";

export default function NavBar() {
  return <section className="py-4 lg:py-8">
    <div className="mx-10 lg:mx-40">
      <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4 md:pr-2 items-center w-full ">
        <div>
          <Image src={logo} alt="logo" className="h-9 md:h-auto w-auto" />
        </div>
        <div className="hidden lg:flex justify-center items-center">
          <nav className="flex  gap-6 font-medium ">
            {navbarLinks.map((link) => (
              <a href={link.href} key={link.label}>{link.label}</a>
            ))}
          </nav>
        </div>
        <div className="flex justify-end gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu md:hidden"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          <Button variant="secondary" className="hidden md:inline-flex items-center">Sign In</Button>
          <Button variant="primary" className="hidden md:inline-flex items-center">Log In</Button>
        </div>
      </div>
    </div>
  </section>
} 
