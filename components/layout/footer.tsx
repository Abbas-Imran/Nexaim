import Link from "next/link"
import Section from "./section"
import { footer } from "@/constants"
import { Mail, Phone, MapPin } from "lucide-react"
import Button from "../atoms/button";
// import { Separator } from "@/components/ui/separator"

type Props = {
  className?: string
}

const Footer = ({ className }: Props) => {
  const year = new Date().getFullYear()

  return (
    <Section crosses className={cn("!px-0 !py-12", className)}>
      <footer className="bg-neutral-950 text-neutral-200">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <Link
                href="/assets/"
                className={cn(`flex gap-2 items-center text-xl font-bold xl:mr-8 text-[#B500A5]`)}
              >
                <img src={'/marketing-agency-for-startups/waylogo.png'} className="w-[80px] h-[80px]" alt="waylogo" />
                The Nexaim
              </Link>
              <p className="text-sm text-neutral-400">Building experiences that feel fast, modern, and human.</p>
              <ul className="mt-4 flex flex-wrap gap-3">
                {footer.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.title}
                      className="group flex size-10 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900/60 text-neutral-300 transition-all hover:-translate-y-0.5 hover:border-neutral-700 hover:bg-neutral-900 hover:text-emerald-400"
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </Link>
                  )
                })}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-4 text-neutral-500" aria-hidden="true" />
                  <div>
                    <span className="block text-neutral-400">Email</span>
                    <Link
                      href="mailto:info@thenexaim.com"
                      className="font-medium text-neutral-200 underline-offset-4 hover:text-emerald-400 hover:underline"
                    >
                      info@thenexaim.com
                    </Link>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 text-neutral-500" aria-hidden="true" />
                  <div>
                    <span className="block text-neutral-400">Contact no</span>
                    <Link
                      href="tel:+923432469633"
                      className="font-medium text-neutral-200 underline-offset-4 hover:text-emerald-400 hover:underline"
                    >
                      +92 343 2469633
                    </Link>
                    <Link
                      href="tel:+923432469633"
                      className="font-medium text-neutral-200 underline-offset-4 hover:text-emerald-400 hover:underline"
                    >
                      {" "} +92 319 2665683
                    </Link>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 text-neutral-500" aria-hidden="true" />
                  <div>
                    <span className="block text-neutral-400">Address</span>
                    <Link
                      href="https://maps.google.com/?q=Gulshan%20Iqbal,%20Karachi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-neutral-200 underline-offset-4 hover:text-emerald-400 hover:underline"
                    >
                      Gulshan Iqbal, Karachi
                    </Link>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick info / CTA */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">Let&apos;s talk</h3>
              <p className="text-sm text-neutral-400">
                Ready to bring your next idea to life? Reach out and we&apos;ll respond within 1 business day.
              </p>
              <div>
                <a target="_blank" href="mailto:info@thenexaim.com?subject=Project%20inquiry" className="relative hidden lg:inline-flex  items-center justify-center border-[1px] border-[#ce66c5] px-5 py-2 overflow-hidden font-semibold text-white rounded-2xl bg-transparent"
                > Start a conversation</a>


              </div>
            </div>
          </div>

          {/* <Separator className="my-8 bg-neutral-800" /> */}

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="caption text-xs text-neutral-500">&copy; {year} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </Section>
  )
}

export default Footer

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ")
}
