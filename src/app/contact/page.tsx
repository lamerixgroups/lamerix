"use client";

import Link from "next/link";
import Image from "next/image";
import { FormEvent, useState } from "react";

const details = [
  { icon: "✉", label: "EMAIL", value: "info@lamerix.com", href: "mailto:info@lamerix.com" },
  { icon: "⌕", label: "PHONE", value: "+91 94475 51889", href: "tel:+919447551889" },
  { icon: "⌖", label: "LOCATION", value: "India, Kerala Province, India" },
];

const promises = [
  { icon: "ϟ", title: "Within 24 Hours", copy: "We value your time and our quick response." },
  { icon: "◎", title: "Remote Worldwide", copy: "We work with clients across the globe." },
  { icon: "♡", title: "Confidentiality First", copy: "Your ideas are safe with us and handled confidentially." },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-black px-5 py-8 text-white sm:px-8 lg:px-10">
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 border-b border-white/10 pb-6 sm:pb-8">
        <Link href="/" aria-label="LAMERIX home">
          <Image
            src="/images/logo.jpg"
            alt="Lamerix Logo"
            width={220}
            height={70}
            priority
            className="w-[145px] object-contain sm:w-[180px] md:w-[220px]"
            style={{ height: "auto" }}
          />
        </Link>
        <div className="flex items-center gap-3 text-[8px] tracking-[2px] text-white sm:gap-6 sm:text-[10px] md:gap-10 md:text-sm md:tracking-[4px]">
          <Link href="/#about" className="transition-colors hover:text-[#20B2AA]">ABOUT</Link>
          <Link href="/#about" className="transition-colors hover:text-[#20B2AA]">OUR VISION</Link>
          <Link href="/contact" className="text-[#20B2AA] transition-colors hover:text-white">CONTACT</Link>
        </div>
      </nav>

      <div className="mx-auto max-w-[1180px]">
        <header className="text-center">
          <Link href="/" className="text-[9px] font-semibold tracking-[6px] text-[#00d9e8] transition-opacity hover:opacity-70">
            GET IN TOUCH
          </Link>
          <h1 className="mt-3 text-[46px] font-black leading-[0.9] tracking-[2px] text-white [text-shadow:0_0_16px_rgba(255,255,255,0.7)] sm:text-[68px] lg:text-[86px]">
            CONTACT
          </h1>
          <p className="mt-4 text-base text-white sm:text-lg">Have a project in mind?</p>
          <p className="mx-auto mt-3 max-w-[420px] text-[10px] leading-5 text-[#8fabad]">
            Let&apos;s discuss how LAMERIX can help bring your ideas to life through design,
            technology and creativity.
          </p>
        </header>

        <div className="mt-8 grid gap-9 md:grid-cols-[140px_1fr] lg:mt-10 lg:grid-cols-[140px_1fr] lg:gap-9">
          <aside className="border border-[#12393e] bg-[#010506] p-3 sm:p-4">
            <h2 className="border-b border-[#15383d] pb-3 text-base font-normal tracking-wide sm:text-lg">GET IN TOUCH</h2>
            <div className="space-y-4 pt-4">
              {details.map((detail) => (
                <div key={detail.label} className="border-b border-[#10292d] pb-3 last:border-0">
                  <div className="flex items-center gap-2 text-[#00d9e8]">
                    <span className="grid h-4 w-4 place-items-center border border-[#00a8b7] text-[10px]">{detail.icon}</span>
                    <span className="text-[6px] font-bold tracking-[2px]">{detail.label}</span>
                  </div>
                  {detail.href ? (
                    <a href={detail.href} className="mt-2 block break-words text-[7px] text-[#d3dddd] hover:text-[#00d9e8]">{detail.value}</a>
                  ) : (
                    <p className="mt-2 text-[7px] leading-3 text-[#d3dddd]">{detail.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-1 border-t border-[#15383d] pt-4">
              <p className="text-[6px] font-bold tracking-[2px] text-[#00d9e8]">FOLLOW US</p>
              <div className="mt-3 space-y-2">
                {["LinkedIn", "Instagram", "Behance", "YouTube"].map((network) => (
                  <a key={network} href="#" className="flex items-center justify-between border border-[#18393d] px-2 py-1.5 text-[7px] text-[#d3dddd] hover:border-[#00d9e8] hover:text-[#00d9e8]">
                    <span><span className="mr-2 text-[#00d9e8]">◈</span>{network}</span>
                    <span className="text-[#00d9e8]">→</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <section className="relative border border-[#12393e] bg-[#010506] p-5 sm:p-8 lg:p-9">
            <div className="absolute left-[-19px] top-1/2 hidden h-2 w-2 -translate-y-1/2 rounded-full bg-[#00d9e8] shadow-[0_0_15px_#00d9e8] lg:block" />
            <div className="absolute left-[-18px] top-0 hidden h-full w-px bg-[#07545d] lg:block" />
            <h2 className="border-l-2 border-[#00d9e8] pl-4 text-lg font-normal tracking-wide sm:text-xl">SEND US A MESSAGE</h2>
            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <input required name="name" placeholder="Full Name" className="contact-input" />
                <input required type="email" name="email" placeholder="Email Address" className="contact-input" />
              </div>
              <input name="company" placeholder="Company Name (Optional)" className="contact-input w-full" />
              <select required name="projectType" defaultValue="" className="contact-input w-full appearance-none">
                <option value="" disabled>Select Project Type</option>
                <option>Brand Strategy</option>
                <option>Design &amp; Development</option>
                <option>Digital Experience</option>
                <option>Other</option>
              </select>
              <textarea required name="message" placeholder="Tell us about your project..." className="contact-input min-h-28 w-full resize-y" />
              <button type="submit" className="w-full border border-[#00d9e8] py-2.5 text-[8px] font-bold tracking-[3px] text-[#00d9e8] transition-colors hover:bg-[#00d9e8]/10">
                {submitted ? "MESSAGE READY TO SEND ✓" : "SEND MESSAGE →"}
              </button>
              {submitted && <p className="text-center text-[9px] text-[#8fabad]">Thanks. We&apos;ll be in touch shortly.</p>}
            </form>
          </section>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:mt-12">
          {promises.map((promise) => (
            <article key={promise.title} className="border border-[#12393e] bg-[#010506] px-4 py-4 text-center sm:flex sm:items-start sm:gap-4 sm:text-left">
              <span className="mx-auto grid h-7 w-7 shrink-0 place-items-center border border-[#006f79] text-sm text-[#00d9e8] shadow-[0_0_12px_rgba(0,217,232,0.15)] sm:mx-0">{promise.icon}</span>
              <div className="mt-3 sm:mt-0">
                <p className="text-[7px] font-bold tracking-[2px] text-[#00d9e8]">LAMERIX PROMISE</p>
                <h3 className="mt-1 text-sm font-semibold">{promise.title}</h3>
                <p className="mt-1 text-[8px] leading-4 text-[#8fabad]">{promise.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <footer aria-label="Site footer" className="mx-auto mt-16 max-w-[1180px] border-t border-white/10 pt-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-3xl font-bold text-[#20B2AA]">LAMERIX</Link>
            <p className="mt-4 text-sm leading-7 text-gray-400">
              Three Domains. One Vision.<br />
              Built on Passion. Driven by Purpose.
            </p>
          </div>
          <div>
            <h2 className="text-sm tracking-[2px]">QUICK LINKS</h2>
            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <Link href="/#about" className="block hover:text-[#20B2AA]">About</Link>
              <Link href="/#about" className="block hover:text-[#20B2AA]">Our Vision</Link>
              <Link href="/contact" className="block hover:text-[#20B2AA]">Contact</Link>
            </div>
          </div>
          <div>
            <h2 className="text-sm tracking-[2px]">OUR DOMAINS</h2>
            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <a href="https://studio.lamerix.com" target="_blank" rel="noopener noreferrer" className="block hover:text-[#20B2AA]">Studio</a>
              <a href="https://wear.lamerix.com" target="_blank" rel="noopener noreferrer" className="block hover:text-[#20B2AA]">Wear</a>
              <span className="block">Fire &amp; Safety</span>
            </div>
          </div>
          <div>
            <h2 className="text-sm tracking-[2px]">CONNECT</h2>
            <div className="mt-4 flex gap-5 text-2xl text-gray-400">
              <a href="#" aria-label="LinkedIn" className="hover:text-[#20B2AA]">◎</a>
              <a href="#" aria-label="Instagram" className="hover:text-[#20B2AA]">◉</a>
              <a href="mailto:info@lamerix.com" aria-label="Email" className="hover:text-[#20B2AA]">✉</a>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-5 text-center text-xs text-gray-500">© 2024 LAMERIX. All rights reserved.</p>
      </footer>
    </main>
  );
}