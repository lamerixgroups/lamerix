"use client";

import Image from "next/image";

export default function BrandSection() {
  return (
    <section className="relative bg-black text-white overflow-hidden">

      {/* MAIN SECTION */}
      <div className="relative min-h-[82vh] border-t border-white/10 overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/images/brand-building.png"
            alt="Brand Building"
            fill
            priority
            className="object-cover object-center opacity-90"
          />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* CONTENT */}
        <div className="relative z-10 flex">

          {/* LEFT SCROLL */}
          <div className="hidden md:flex flex-col items-center w-[90px] pt-20 sticky top-0 h-screen">

            <div className="text-white text-3xl font-light">
              03
            </div>

            <div className="w-[1px] h-[140px] bg-white/20 relative mt-5">
              <div
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  top-[45%]
                  w-[10px]
                  h-[10px]
                  rounded-full
                "
                style={{
                  background: "#20B2AA",
                  boxShadow: "0 0 15px #20B2AA",
                }}
              ></div>
            </div>

            <div
              className="
                mt-8
                tracking-[8px]
                text-[12px]
                rotate-180
              "
              style={{
                writingMode: "vertical-rl",
                color: "#20B2AA",
              }}
            >
              SCROLL
            </div>

            <div className="w-[1px] h-[140px] bg-white/20 mt-8"></div>

            <div
              className="mt-6 text-3xl font-light"
              style={{
                color: "#20B2AA",
              }}
            >
              04
            </div>

          </div>

          {/* CONTENT AREA */}
          <div className="flex-1 px-6 md:px-14 lg:px-20 py-20">

            {/* TOP CONTENT */}
            <div className="max-w-[620px]">

              <p
                className="tracking-[6px] text-sm"
                style={{
                  color: "#20B2AA",
                }}
              >
                ABOUT OUR BRAND
              </p>

              <div
                className="w-[60px] h-[2px] mt-4 mb-8"
                style={{
                  background: "#20B2AA",
                }}
              ></div>

              <h2 className="text-[34px] md:text-[58px] leading-tight font-light">
                MORE THAN BUSINESSES.
                <br />
                A UNIFIED{" "}
                <span style={{ color: "#20B2AA" }}>
                  PURPOSE.
                </span>
              </h2>

              <p className="mt-8 text-gray-400 text-lg leading-9 max-w-[620px]">
                LAMERIX is a multi-domain brand built on creativity,
                quality and responsibility. Three industries. One vision
                to make a better impact through innovation and trust.
              </p>

            </div>

            {/* FEATURES */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16 max-w-[900px]">

              {/* ITEM */}
              <div>
                <div
                  className="text-5xl mb-5"
                  style={{
                    color: "#20B2AA",
                  }}
                >
                  ◈
                </div>

                <h3 className="tracking-[2px] text-xl">
                  DIVERSIFIED
                </h3>

                <p className="text-gray-400 mt-4 leading-8">
                  Three strong domains working in synergy.
                </p>
              </div>

              {/* ITEM */}
              <div>
                <div
                  className="text-5xl mb-5"
                  style={{
                    color: "#20B2AA",
                  }}
                >
                  ◎
                </div>

                <h3 className="tracking-[2px] text-xl">
                  EXPERIENCED
                </h3>

                <p className="text-gray-400 mt-4 leading-8">
                  Years of expertise delivering real world solutions.
                </p>
              </div>

              {/* ITEM */}
              <div>
                <div
                  className="text-5xl mb-5"
                  style={{
                    color: "#ff8a3d",
                  }}
                >
                  ⚡
                </div>

                <h3 className="tracking-[2px] text-xl">
                  INNOVATIVE
                </h3>

                <p className="text-gray-400 mt-4 leading-8">
                  Constantly evolving to create future ready solutions.
                </p>
              </div>

              {/* ITEM */}
              <div>
                <div
                  className="text-5xl mb-5"
                  style={{
                    color: "#20B2AA",
                  }}
                >
                  ⬡
                </div>

                <h3 className="tracking-[2px] text-xl">
                  RESPONSIBLE
                </h3>

                <p className="text-gray-400 mt-4 leading-8">
                  Committed to safety, quality and positive impact.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* CTA SECTION */}
      <div className="relative border-y border-white/10 py-20 overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/images/wave-bg.png"
            alt="Wave Background"
            fill
            className="object-cover object-center opacity-70"
          />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6">

          <p
            className="tracking-[6px] text-sm mb-5"
            style={{
              color: "#20B2AA",
            }}
          >
            LET'S BUILD THE FUTURE TOGETHER
          </p>

          <h2 className="text-[34px] md:text-[64px] font-light leading-tight">
            READY TO CREATE IMPACT?
          </h2>

          <p className="text-gray-400 text-lg mt-6">
            Explore our domains or get in touch with us.
          </p>

          <button
            className="
              mt-10
              border
              px-10
              py-4
              tracking-[4px]
              text-sm
              transition-all
              duration-500
              hover:bg-[#20B2AA]/10
              hover:shadow-[0_0_30px_rgba(32,178,170,0.25)]
            "
            style={{
              borderColor: "#20B2AA",
              color: "#20B2AA",
            }}
          >
            GET IN TOUCH →
          </button>

        </div>

      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 px-6 md:px-20 bg-black">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* LOGO */}
          <div>
            <h2
              className="text-4xl font-bold"
              style={{
                color: "#20B2AA",
              }}
            >
              LAMERIX
            </h2>

            <p className="text-gray-400 mt-5 leading-8">
              Three Domains. One Vision.
              <br />
              Built on Passion. Driven by Purpose.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-xl mb-5">
              QUICK LINKS
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>About</p>
              <p>Our Vision</p>
              <p>Contact</p>
            </div>
          </div>

          {/* DOMAINS */}
          <div>
            <h3 className="text-xl mb-5">
              OUR DOMAINS
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>Studio</p>
              <p>Wear</p>
              <p>Fire & Safety</p>
            </div>
          </div>

          {/* CONNECT */}
          <div>
            <h3 className="text-xl mb-5">
              CONNECT
            </h3>

            <div className="flex gap-5 text-3xl text-gray-400">
              <span>◎</span>
              <span>◉</span>
              <span>✉</span>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-gray-500 text-sm text-center">
          © 2024 LAMERIX. All rights reserved.
        </div>

      </footer>

    </section>
  );
}