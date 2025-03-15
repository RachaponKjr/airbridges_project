/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import ContactFooter from './contact-footer'
import Image from 'next/image'

import location from '@/assets/svg/icon/location.svg'
import mail from '@/assets/svg/icon/mail.svg'
import phone from '@/assets/svg/icon/phone.svg'

import facebook from '@/assets/svg/icon/facebook.svg'
import linkIn from '@/assets/svg/icon/in.svg'
import insta from '@/assets/svg/icon/insta.svg'

import Link from 'next/link'

function Footer() {
  return (
    <div className="lg:px-32 bg-[#020816] lg:bg-[radial-gradient(ellipse_600px_180px_at_bottom_center,#003094_0%,#003094_30%,#020816_100%)]">
      {/* contact */}
      <ContactFooter />
      <div className="text-white flex flex-col items-center lg:items-start w-full gap-12 lg:gap-2  h-max px-5 lg:px-0 container mx-auto">
        <Image src={'/logo.png'} alt="Logo" width={200} height={200} />
        <div className="pb-8 space-y-[60px] lg:w-full">
          <div className="flex flex-col md:flex-row gap-7 ">
            <div className=" w-full flex items-center">
              <div className="space-y-3 max-w-[455px] text-white/80">
                <div className="flex gap-2">
                  <Image src={location} alt="location" width={25} height={25} />
                  <span>24 Soi Ram Intra 20, Ram Intra Road, Tha Raeng Subdistrict, Bang Khen District, Bangkok</span>
                </div>
                <div className="flex gap-2">
                  <Image src={mail} alt="location" width={25} height={25} />
                  <span>thanandorn@airbridges.io</span>
                </div>
                <div className="flex gap-2">
                  <Image src={phone} alt="location" width={25} height={25} />
                  <span>+66 864393488</span>
                </div>
              </div>
            </div>
            <div className="w-full hidden lg:flex ">
              <div className="flex flex-col grow gap-6">
                <span className="text-white">Quick Links</span>
                <div className="text-body flex flex-col gap-5">
                  <Link href={'####'}>
                    <span>Home</span>
                  </Link>
                  <Link href={'####'}>
                    <span>Solutions</span>
                  </Link>
                  <Link href={'####'}>
                    <span>Services</span>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col grow gap-6">
                <span className="text-white">Quick Links</span>
                <div className="text-body flex flex-col gap-5">
                  <Link href={'####'}>
                    <span>Home</span>
                  </Link>
                  <Link href={'####'}>
                    <span>Solutions</span>
                  </Link>
                  <Link href={'####'}>
                    <span>Services</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex lg:hidden gap-6 mx-auto">
              <Image src={facebook} alt="" width={25} height={25} />
              <Image src={linkIn} alt="" width={25} height={25} />
              <Image src={insta} alt="" width={25} height={25} />
            </div>
          </div>
        </div>
      </div>
      <div className="text-white text-sm lg:text-xl text-center border-t lg:border-none border-white py-4">
        <span>©2024 AIRBRIDGES COMPANY LIMITED  All rights reserved.</span>
      </div>
    </div>
  )
}

export default Footer
