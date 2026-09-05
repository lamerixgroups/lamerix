export default function Loader() {
  return (
    <section className="relative h-screen overflow-hidden bg-black text-white flex items-center justify-center">

      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-[700px] h-[700px] rounded-full blur-3xl opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle, rgba(32,178,170,0.7) 0%, rgba(32,178,170,0) 70%)",
          }}
        ></div>
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 40%, rgba(0,0,0,0.92) 100%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] px-6 text-center sm:px-8">

        {/* Title */}
        <h1
          className="text-[clamp(3.5rem,15vw,11.875rem)] font-black leading-none tracking-[clamp(4px,1.2vw,12px)] whitespace-nowrap"
          style={{
            color: "#20B2AA",
            textShadow: "0 0 20px rgba(32,178,170,0.12)",
          }}
        >
          LAMERIX
        </h1>

        {/* Tagline */}
        <p
          className="mt-8 whitespace-nowrap text-[clamp(7px,1.5vw,18px)] tracking-[clamp(1px,0.35vw,5px)] text-gray-300"
        >
          BRINGING IDEAS TO LIFE • CRAFTING EXPERIENCES • BUILDING IMPACT
        </p>

        {/* Loading */}
        <div className="mt-24 flex flex-col items-center">

          <p
            className="mb-6 tracking-[10px] text-sm animate-pulse"
            style={{ color: "#20B2AA" }}
          >
            LOADING
          </p>

          {/* Loading Bar */}
          <div className="relative w-[280px] md:w-[520px] h-[2px] bg-[#2a2a2a] overflow-hidden">

            {/* Animated Line */}
            <div
              className="absolute top-0 left-0 h-full animate-loading"
              style={{
                background: "#20B2AA",
                boxShadow: "0 0 14px #20B2AA",
              }}
            ></div>

            {/* Glow Dot */}
            <div
              className="absolute top-1/2 animate-dot"
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "999px",
                background: "#20B2AA",
                transform: "translate(-50%, -50%)",
                boxShadow: `
                  0 0 10px #20B2AA,
                  0 0 20px #20B2AA,
                  0 0 35px #20B2AA
                `,
              }}
            ></div>

          </div>

        </div>

      </div>

    </section>
  );
}