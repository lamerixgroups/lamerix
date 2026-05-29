"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="
        relative
        bg-black
        text-white
        min-h-screen
        overflow-hidden
        py-10
      "
    >

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            top-[20%]
            left-[35%]
            w-[700px]
            h-[700px]
            rounded-full
            blur-3xl
            opacity-[0.05]
          "
          style={{
            background:
              "radial-gradient(circle, rgba(32,178,170,0.5) 0%, rgba(32,178,170,0) 70%)",
          }}
        ></div>
      </div>

      {/* Main Wrapper */}
      <div className="relative z-10 flex">

        {/* LEFT SCROLL INDICATOR */}
        <div
          className="
            hidden
            md:flex
            flex-col
            items-center
            w-[90px]
            sticky
            top-0
            h-screen
            pt-20
          "
        >

          <div className="w-[1px] h-[70px] bg-white/20"></div>

          <div className="mt-5 text-white text-3xl font-light">
            01
          </div>

          <div className="w-[1px] h-[180px] bg-white/20 relative mt-5">

            <div
              className="
                absolute
                left-1/2
                -translate-x-1/2
                top-0
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

          <div className="w-[1px] h-[180px] bg-white/20 mt-8"></div>

          <div
            className="mt-6 text-3xl font-light"
            style={{
              color: "#20B2AA",
            }}
          >
            02
          </div>

        </div>

        {/* CONTENT */}
        <div className="flex-1 px-6 md:px-14 lg:px-20 py-12">

          {/* Heading */}
          <div className="max-w-[900px] mt-4">

            <p
              className="
                text-sm
                tracking-[7px]
                mb-5
              "
              style={{
                color: "#20B2AA",
              }}
            >
              EXPLORE OUR DOMAINS
            </p>

            <h2
              className="
                text-[42px]
                md:text-[70px]
                leading-tight
                font-light
              "
            >
              Three Divisions. One Vision.
            </h2>

            <p
              className="
                mt-6
                text-gray-400
                leading-9
                max-w-[760px]
                text-lg
              "
            >
              LAMERIX operates across three powerful domains,
              delivering excellence, innovation and trust in every solution.
            </p>

          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14">

            {/* CARD 1 */}
            <div
              className="
                relative
                group
                overflow-hidden
                rounded-[20px]
                border
                border-white/10
                hover:border-[#20B2AA]/60
                hover:shadow-[0_0_35px_rgba(32,178,170,0.18)]
                min-h-[620px]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:rotate-[0.5deg]
              "
            >

              {/* Hover Glow */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(32,178,170,0.10) 0%, transparent 70%)",
                }}
              ></div>

              <Image
                src="/images/studio.png"
                alt="Studio"
                fill
                className="
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-[1.05]
                "
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="relative z-10 p-8 flex flex-col h-full">

                <div
                  className="text-sm tracking-[6px]"
                  style={{
                    color: "#20B2AA",
                  }}
                >
                  DIVISION 01
                </div>

                <h3 className="text-5xl font-light mt-7">
                  STUDIO
                </h3>

                <div
                  className="w-[120px] h-[1px] mt-7"
                  style={{
                    background: "#20B2AA",
                  }}
                ></div>

                <div className="mt-8 space-y-4 text-2xl font-light">
                  <p>ANIMATION</p>
                  <p>GAMES</p>
                  <p>VISUALIZATION</p>
                </div>

                <button
                  className="
                    mt-auto
                    border
                    px-7
                    py-4
                    tracking-[4px]
                    text-sm
                    w-fit
                    transition-all
                    duration-500
                    hover:bg-[#20B2AA]/10
                    hover:shadow-[0_0_20px_rgba(32,178,170,0.4)]
                  "
                  style={{
                    borderColor: "#20B2AA",
                    color: "#20B2AA",
                  }}
                >
                  ENTER STUDIO →
                </button>

              </div>

            </div>

            {/* CARD 2 */}
            <div
              className="
                relative
                group
                overflow-hidden
                rounded-[20px]
                border
                border-white/10
                hover:border-[#20B2AA]/60
                hover:shadow-[0_0_35px_rgba(32,178,170,0.18)]
                min-h-[620px]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:rotate-[-0.5deg]
              "
            >

              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(32,178,170,0.10) 0%, transparent 70%)",
                }}
              ></div>

              <Image
                src="/images/wear.png"
                alt="Wear"
                fill
                className="
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-[1.05]
                "
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="relative z-10 p-8 flex flex-col h-full">

                <div
                  className="text-sm tracking-[6px]"
                  style={{
                    color: "#20B2AA",
                  }}
                >
                  DIVISION 02
                </div>

                <h3 className="text-5xl font-light mt-7">
                  WEAR
                </h3>

                <div
                  className="w-[120px] h-[1px] mt-7"
                  style={{
                    background: "#20B2AA",
                  }}
                ></div>

                <div className="mt-8 space-y-4 text-2xl font-light">
                  <p>APPAREL</p>
                  <p>STREETWEAR</p>
                  <p>IDENTITY</p>
                </div>

                <button
                  className="
                    mt-auto
                    border
                    px-7
                    py-4
                    tracking-[4px]
                    text-sm
                    w-fit
                    transition-all
                    duration-500
                    hover:bg-[#20B2AA]/10
                    hover:shadow-[0_0_20px_rgba(32,178,170,0.4)]
                  "
                  style={{
                    borderColor: "#20B2AA",
                    color: "#20B2AA",
                  }}
                >
                  ENTER WEAR →
                </button>

              </div>

            </div>

            {/* CARD 3 */}
            <div
              className="
                relative
                group
                overflow-hidden
                rounded-[20px]
                border
                border-white/10
                hover:border-[#ff5a1f]/60
                hover:shadow-[0_0_35px_rgba(255,90,31,0.18)]
                min-h-[620px]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:rotate-[0.5deg]
              "
            >

              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(255,90,31,0.10) 0%, transparent 70%)",
                }}
              ></div>

              <Image
                src="/images/safety.png"
                alt="Safety"
                fill
                className="
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-[1.05]
                "
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="relative z-10 p-8 flex flex-col h-full">

                <div
                  className="text-sm tracking-[6px]"
                  style={{
                    color: "#20B2AA",
                  }}
                >
                  DIVISION 03
                </div>

                <h3 className="text-4xl font-light mt-7">
                  FIRE & SAFETY
                </h3>

                <div
                  className="w-[120px] h-[1px] mt-7"
                  style={{
                    background: "#ff5a1f",
                  }}
                ></div>

                <div className="mt-8 space-y-4 text-2xl font-light">
                  <p>PROTECTION</p>
                  <p>INDUSTRIAL</p>
                  <p>SAFETY</p>
                </div>

                <button
                  className="
                    mt-auto
                    border
                    px-7
                    py-4
                    tracking-[4px]
                    text-sm
                    w-fit
                    transition-all
                    duration-500
                    hover:bg-[#ff5a1f]/10
                    hover:shadow-[0_0_20px_rgba(255,90,31,0.4)]
                  "
                  style={{
                    borderColor: "#ff5a1f",
                    color: "#ff5a1f",
                  }}
                >
                  ENTER DIVISION →
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}