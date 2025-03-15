'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

interface ButtonProps {
    link?: string | undefined
    titel: string
}
function Button({ link, titel }: ButtonProps) {
    const router = useRouter()

    return (
        <button
            onClick={() => link && router.push(link)}
            className="
            z-40
  py-4 px-10 cursor-pointer min-w-[200px] lg:min-w-[300px] rounded-[792.31px] bg-[radial-gradient(58.97%_79.17%_at_27.37%_18.36%,_#1779EA_0%,_#003094_100%)] shadow-[inset_0px_4px_28.5px_rgba(255,255,255,0.4),_-1px_4px_23.8px_-11px_#003094]
  hover:bg-[radial-gradient(58.97%_79.17%_at_27.37%_18.36%,_#c0deff_0%,_#0050f7_100%)] hover:shadow-[-1px_-1px_15.8px_0px_#1779EA] transition-all duration-300 ease-in-out">
            <span className="text-sm lg:text-lg text-white">{titel}</span>
        </button>
    )
}

export default Button