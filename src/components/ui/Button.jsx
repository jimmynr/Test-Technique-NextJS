"use client"

import Link from "next/link"

const Button = ({children, variant="primary", href, openInNewTab=false, fontSize}) => {
    const baseStyles =
        `inline-flex items-center justify-center gap-3 rounded-xl w-full font-extrabold shadow-lg whitespace-nowrap
        px-6 py-[0.65rem] sm:px-8 sm:py-[0.675rem] md:py-[1.125rem] lg:py-[1.25rem]
        ${fontSize}`

    const variants = {
        primary: "bg-gradient-to-r from-[#72DEAE] to-[#2C9E7B] text-[#1C1C1C] transition-transform duration-200 hover:scale-105",
        outline: "border border-[#72DEAE] text-[#72DEAE]"
    }

    const handleClick = (e) => {
        if (href.startsWith("#")) {
            e.preventDefault()
            const target = document.querySelector(href)
            if (target) {
                target.scrollIntoView({ behavior: "smooth" })
            }
        }
    }

  return (
    openInNewTab ? 
    <Link href={href}
        target="_blank"
        className={`${baseStyles} ${variants[variant]}`}
    >
        {children}
    </Link> :
    <Link href={href}
        onClick={handleClick}
        className={`${baseStyles} ${variants[variant]}`}
    >
        {children}
    </Link>
  )
}

export default Button
