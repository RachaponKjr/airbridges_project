import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Button from './ui/button'
import Link from 'next/link'

function Navbar() {
  return (
    <div className="lg:px-32 px-4 py-6 bg-black border-b lg:border-none border-white ">
      <div className="container mx-auto flex justify-between items-center">
        <Image src={'/logo.png'} alt="logo" width={150} height={150} />
        <div className="hidden lg:flex gap-[50px]">
          <ul className="flex text-body items-center gap-12 text-base font-medium">
            <li className="text-white">
              <Link href="/">Home</Link>
            </li>
            <li><Link href="/about">Solutions</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          <Button link="https://cal.com/airbridges" titel="Book a Free Consultation" />
        </div>
        <AlignJustify color="white" size={32} className="block lg:hidden" />
      </div>
    </div>
  )
}

export default Navbar
