import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <div className="lg:px-32 px-4 py-6 bg-black border-b lg:border-none border-white ">
      <div className="container mx-auto flex justify-between items-center">
        <Image src={'/logo.png'} alt="logo" width={150} height={150} />
        <div className="hidden lg:flex gap-[50px]">
          <ul className="flex text-body items-center gap-12 text-base font-medium">
            <li className="text-white">Home</li>
            <li>Solutions</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
          <button
            className="
          py-4 px-10 cursor-pointer min-w-[300px] rounded-[792.31px] bg-[radial-gradient(58.97%_79.17%_at_27.37%_18.36%,_#1779EA_0%,_#003094_100%)] shadow-[inset_0px_4px_28.5px_rgba(255,255,255,0.4),_-1px_4px_23.8px_-11px_#003094]
          hover:bg-[radial-gradient(58.97%_79.17%_at_27.37%_18.36%,_#c0deff_0%,_#0050f7_100%)] hover:shadow-[-1px_-1px_15.8px_0px_#1779EA]">
            <span className="text-lg text-white">Book a Free Consultation</span>
          </button>
        </div>
        <AlignJustify color="white" size={32} className="block lg:hidden" />
      </div>
    </div>
  )
}

export default Navbar
