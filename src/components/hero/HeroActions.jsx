import Button from "../ui/Button"
import { FaCalendarAlt, FaArrowDown  } from "react-icons/fa"
import Image from "next/image"
import ptitclick from "../../../public/images/ptit-click.png"

const HeroActions = () => {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row mt-8">
      <div className="relative w-full">
        <Button 
          href="https://calendly.com/webdifference/nouvelle-reunion?hide_gdpr_banner=1&background_color=282828&text_color=ffffff&primary_color=71ddae&month=2026-01"
          openInNewTab={true}
          fontSize="text-lg sm:text-xl md:text-2xl"
        >
          <FaCalendarAlt />
          Prendre RDV
        </Button>

        <div className="absolute hidden sm:block -left-12 -mt-4">
          <Image
            src={ptitclick}
            alt="Un p'tit click ?"
            width={90}
          />
        </div>
      </div>

      <Button 
        href="#projects"
        variant="outline"
        fontSize="text-md sm:text-lg"
      >
        Découvrir nos projets
        <FaArrowDown className="h-5 w-5" />
      </Button>
    </div>
  )
}

export default HeroActions
