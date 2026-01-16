

const HeroTitle = () => {
  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight max-w-3xl">
      Votre{" "}
      <span className="text-[#71DDAE]">site{" "}</span> 
      doit{" "}
      <span className="text-[#71DDAE]">donner envie{" "}</span> 
      de{" "}
      <span className="text-[#71DDAE]">rester</span>,{" "}
      pas de{" "}
      <span className="text-[#71DDAE] line-through decoration-[#1C1C1C]/70">revenir{" "}</span> 
      <span className="line-through decoration-[#1C1C1C]/70">en{" "}</span> 
      <span className="text-[#71DDAE] line-through decoration-[#1C1C1C]/70">arrière</span>.
    </h1>
  )
}

export default HeroTitle
