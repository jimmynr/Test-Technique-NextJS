import HeroBadge from "./HeroBadge"
import HeroTitle from "./HeroTitle"
import HeroDescription from "./HeroDescription"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen text-white px-4 pt-28 sm:pt-32 md:pt-36">
      <div className="mx-auto text-center flex flex-col items-center space-y-6">
        <HeroBadge />
        <HeroTitle />
        <HeroDescription />
        {/* <HeroActions /> */}
      </div>
    </section>
  )
}

export default HeroSection
