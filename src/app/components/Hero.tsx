import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        hero-section
        relative
        h-screen
        overflow-hidden
        text-white
        bg-cover
        bg-center
      "
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
      }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between gap-4 px-5 py-7 sm:px-8 md:px-20 md:py-10">

        {/* Logo */}
        <Link href="/" aria-label="LAMERIX home" className="shrink-0">
          <Image
            src="/images/logo.jpg"
            alt="Lamerix Logo"
            width={220}
            height={70}
            priority
            className="w-[165px] object-contain sm:w-[190px] md:w-[220px]"
            style={{ height: "auto" }}
          />
        </Link>

        {/* Menu */}
        <div
          className="
            flex
            gap-2
            text-[7px]
            tracking-[2px]
            sm:gap-5
            sm:text-[10px]
            md:gap-10
            md:text-sm
            md:tracking-[4px]
            text-white
          "
        >
          <Link href="#about" className="cursor-pointer hover:text-[#20B2AA] transition-all duration-300">
            ABOUT
          </Link>

          <Link href="#about" className="cursor-pointer hover:text-[#20B2AA] transition-all duration-300">
            OUR VISION
          </Link>

          <Link href="/contact" className="cursor-pointer hover:text-[#20B2AA] transition-all duration-300">
            CONTACT
          </Link>
        </div>

      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex h-[75vh] items-center px-5 sm:px-8 md:px-24">

        <div className="hero-copy max-w-[700px] md:-translate-y-16">

          {/* Small Text */}
          <p
            className="
              text-sm
              tracking-[8px]
              mb-6
            "
            style={{
              color: "#20B2AA",
            }}
          >
            WELCOME TO
          </p>

          {/* Big Title */}
          <div className="flex items-start">

            <h1
              className="
                text-[clamp(3.25rem,16.5vw,10.625rem)]
                lg:text-[clamp(3.25rem,12vw,10.625rem)]
                font-black
                leading-none
                tracking-[clamp(4px,1.5vw,12px)]
                whitespace-nowrap
              "
              style={{
                color: "#20B2AA",
                textShadow: "0 0 20px rgba(32,178,170,0.18)",
              }}
            >
              LAMERIX
            </h1>

            <span
              className="
                ml-2
                mt-3
                md:mt-5
                text-[14px]
                md:text-[20px]
                font-semibold
              "
              style={{
                color: "#20B2AA",
              }}
            >
              ™
            </span>

          </div>

          {/* Tagline */}
          <p
            className="
              mt-10
              text-lg
              md:text-2xl
              tracking-[5px]
              text-white
            "
          >
            BUILT ON PASSION. DRIVEN BY PURPOSE.
          </p>

          {/* Description */}
          <p
            className="
              mt-8
              text-gray-300
              leading-9
              max-w-[600px]
            "
          >
            LAMERIX is a multi-domain brand delivering
            world-class solutions across Animation &
            Game Studio, Premium Clothing, and Fire & Safety.
          </p>

          {/* Button */}
          <Link
            href="#about"
            className="
              mt-10
              inline-flex
              items-center
              justify-center
              border
              px-10
              py-4
              tracking-[4px]
              text-sm
              transition-all
              duration-500
              hover:bg-[#20B2AA]/10
              hover:text-[#20B2AA]
              hover:shadow-[0_0_18px_rgba(32,178,170,0.45)]
            "
            style={{
              borderColor: "#20B2AA",
              color: "#20B2AA",
            }}
          >
            EXPLORE OUR WORLD
          </Link>

        </div>

      </div>

      {/* Bottom Features */}
      <div
        className="
          hero-features
          absolute
          bottom-10
          left-20
          right-20
          z-20
          hidden
          md:flex
          justify-start
          gap-24
        "
      >

        {/* Feature 1 */}
        <div>
          <div
            className="text-3xl mb-4"
            style={{ color: "#20B2AA" }}
          >
            ◇
          </div>

          <h3 className="tracking-[4px] text-sm font-semibold">
            3D VISUALIZATION
          </h3>

          <p className="text-gray-400 mt-2 text-sm">
            Bringing Ideas to Life
          </p>
        </div>

        {/* Feature 2 */}
        <div>
          <div
            className="text-3xl mb-4"
            style={{ color: "#20B2AA" }}
          >
            ⬡
          </div>

          <h3 className="tracking-[4px] text-sm font-semibold">
            IMMERSIVE EXPERIENCES
          </h3>

          <p className="text-gray-400 mt-2 text-sm">
            Engaging the Future
          </p>
        </div>

        {/* Feature 3 */}
        <div>
          <div
            className="text-3xl mb-4"
            style={{ color: "#20B2AA" }}
          >
            ⌘
          </div>

          <h3 className="tracking-[4px] text-sm font-semibold">
            SAFETY SOLUTIONS
          </h3>

          <p className="text-gray-400 mt-2 text-sm">
            Protecting What Matters
          </p>
        </div>

      </div>

    </section>
  );
}