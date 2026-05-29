import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
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
      <nav className="relative z-20 flex justify-between items-center px-10 md:px-20 py-10">

        {/* Logo */}
        <Image
          src="/images/logo.jpg"
          alt="Lamerix Logo"
          width={220}
          height={70}
          priority
          className="object-contain"
        />

        {/* Menu */}
        <div
          className="
            flex
            gap-10
            text-xs
            md:text-sm
            tracking-[4px]
            text-white
          "
        >
          <p className="cursor-pointer hover:text-[#20B2AA] transition-all duration-300">
            ABOUT
          </p>

          <p className="cursor-pointer hover:text-[#20B2AA] transition-all duration-300">
            OUR VISION
          </p>

          <p className="cursor-pointer hover:text-[#20B2AA] transition-all duration-300">
            CONTACT
          </p>
        </div>

      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex items-center h-[75vh] px-10 md:px-24">

        <div className="max-w-[700px]">

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
                text-[80px]
                md:text-[170px]
                font-black
                leading-none
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
          <button
            className="
              mt-12
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
          </button>

        </div>

      </div>

      {/* Left Scroll Indicator */}
      <div
        className="
          absolute
          left-6
          bottom-20
          z-30
          flex
          flex-col
          items-center
        "
      >

        {/* Mouse Icon */}
        <div
          className="
            w-[24px]
            h-[42px]
            border
            rounded-full
            flex
            justify-center
            items-start
            pt-2
          "
          style={{
            borderColor: "#20B2AA",
          }}
        >
          <div
            className="
              w-[4px]
              h-[8px]
              rounded-full
              animate-bounce
            "
            style={{
              background: "#20B2AA",
            }}
          ></div>
        </div>

        {/* Vertical Text */}
        <div
          className="
            mt-3
            text-[9px]
            tracking-[5px]
            writing-mode-vertical
          "
          style={{
            color: "#20B2AA",
          }}
        >
          SCROLL
        </div>

      </div>

      {/* Bottom Features */}
      <div
        className="
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