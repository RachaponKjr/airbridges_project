'use client';
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Button from './ui/button'
import { useScroll } from '@/contexts/ScrollContext'

function Navbar() {
  const { scrollToSection } = useScroll()
  return (
    <div className="lg:px-32 px-4 py-6 bg-black border-b lg:border-none border-white ">
      <div className="container mx-auto flex justify-between items-center">
        <Image src={'/logo.png'} alt="logo" width={150} height={150} />
        <div className="hidden lg:flex gap-[50px]">
          <ul className="flex text-body items-center gap-12 text-base font-medium">
            <li className="hover:text-white cursor-pointer">
              Home
            </li>
            <li onClick={() => scrollToSection('solutions')} className='hover:text-white cursor-pointer'>Solutions</li>
            <li onClick={() => scrollToSection('services')} className='hover:text-white cursor-pointer'>Services</li>
            <li onClick={() => scrollToSection('contact')} className='hover:text-white cursor-pointer'>Contact</li>
          </ul>
          <Button link="https://cal.com/airbridges" titel="Book a Free Consultation" />
        </div>
        <AlignJustify color="white" size={32} className="block lg:hidden" />
      </div>
    </div>
  )
}

export default Navbar
