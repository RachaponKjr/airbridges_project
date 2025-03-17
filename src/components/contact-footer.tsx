'use client';
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Input from './ui/input'
import { useScroll } from '@/contexts/ScrollContext'

function ContactFooter() {
  const { sectionRefs } = useScroll()
  return (
    <div ref={sectionRefs.contact} className="py-12 flex flex-col px-5 lg:px-0 lg:flex-row gap-11 lg:gap-24 container mx-auto">
      <div className="text-white w-full lg:max-w-[600px] space-y-3 text-center lg:text-start">
        <h4 className="text-2xl lg:text-[56px] font-bold leading-none">Let’s connect constellations</h4>
        <p className="text-white/80 text-sm lg:text-2xl font-normal">
          If you haven't seen exactly what you want or there is something we haven't covered - don't hesitate to get in
          touch with us. We're here to answer any questions you may have about our Consultancy services.
        </p>
      </div>
      <form className="rounded-lg space-y-4 w-full">
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="Last Name" name="lastName" />
          <Input placeholder="First Name" name="firstName" />
        </div>
        <Input placeholder="Email" name="email" type="email" />
        <Input placeholder="Phone Number" name="phone" type="tel" />
        <textarea
          className="bg-white/5 text-white p-2 rounded-md border border-white/20 focus:outline-none w-full h-[190px]"
          placeholder="Message"
        />
        <button className="p-2 lg:p-5 w-full rounded-[10px] bg-box-gradient">
          <span className="text-lg lg:text-4xl font-normal text-white">Submit</span>
        </button>
      </form>
    </div>
  )
}

export default ContactFooter
