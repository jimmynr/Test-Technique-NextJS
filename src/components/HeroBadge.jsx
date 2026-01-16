import loupe from "../../public/images/loupe-webdifference.png"
import Image from "next/image"

const HeroBadge = () => {
  return (
    <div className="mb-8 flex items-center sm:justify-center gap-3 rounded-full bg-white shadow-lg shadow-emerald-500/20
    px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 w-full sm:w-auto">
      <Image
        src={loupe}
        alt="Logo"
        className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
      />

      <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold -text-[#1C1C1C]">
        CRÉER UN SITE WEB <span className="sm:underline sm:decoration-3 sm:underline-offset-4 sm:decoration-[#1C1C1C]">VRAIMENT</span> UNIQUE
      </p>
    </div>
  )
}

export default HeroBadge
