import HeroBadge from "./HeroBadge"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen px-4 pt-28 sm:pt-32 md:pt-36">
      <div className="mx-auto text-center flex flex-col items-center">
        <HeroBadge />
        {/* <HeroTitle />
        <HeroDescription />
        <HeroActions /> */}
      </div>
    </section>
  )
}

export default HeroSection
