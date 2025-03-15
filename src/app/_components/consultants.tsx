'use client'
import Image from 'next/image'
import React from 'react'

import accredited from '@/assets/svg/icon/accredited.svg'
import flexible from '@/assets/svg/icon/flexible.svg'
import dedicated from '@/assets/svg/icon/dedicated.svg'
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './choose-cloud'

function Consultants() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full h-max px-4 pt-16 lg:py-32 lg:px-32 flex flex-col gap-10 lg:gap-24">
      <motion.div
        variants={fadeInUp}
        className="max-w-[1024px] mx-auto text-center text-white space-y-4">
        <h2 className="text-2xl lg:text-6xl font-bold">Our Consultants Are</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
        <div className="flex flex-col items-center gap-8 lg:gap-16">
          <div className="min-w-[160px] lg:min-w-[230px] aspect-square rounded-full grid place-content-center border border-white/80 bg-box-gradient shadow-[0px_0px_44.492px_0px_#3F3DB0]">
            <Image src={accredited} alt={'accredited'} className="w-[70px] lg:w-[100px] aspect-square" />
          </div>
          <motion.div variants={fadeInUp} className="text-center text-white space-y-4">
            <h5 className="text-2xl lg:text-4xl font-bold">Accredited</h5>
            <p className="text-base lg:text-xl">
              AC hires the best talent and has an enablement-focused culture. As a result our consultants have
              certifications in the industry-leading Cloud platforms
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col items-center gap-8 lg:gap-16">
          <div className="min-w-[160px] lg:min-w-[230px] aspect-square rounded-full grid place-content-center border border-white/80 bg-box-gradient shadow-[0px_0px_44.492px_0px_#3F3DB0]">
            <Image src={flexible} alt={'flexible'} className="w-[70px] lg:w-[100px] aspect-square" />
          </div>
          <motion.div variants={fadeInUp} className="text-center text-white space-y-4">
            <h5 className="text-2xl lg:text-4xl font-bold">Flexible</h5>
            <p className="text-base lg:text-xl">
              Our consultants are able to adapt to how you operate and work seamlessly with your existing teams
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col items-center gap-8 lg:gap-16">
          <div className="min-w-[160px] lg:min-w-[230px] aspect-square rounded-full grid place-content-center border border-white/80 bg-box-gradient shadow-[0px_0px_44.492px_0px_#3F3DB0]">
            <Image src={dedicated} alt={'dedicated'} className="w-[70px] lg:w-[100px] aspect-square" />
          </div>
          <motion.div variants={fadeInUp} className="text-center text-white space-y-4">
            <h5 className="text-2xl lg:text-4xl font-bold">Dedicated</h5>
            <p className="text-base lg:text-xl">
              Our consultants are passionate about the work they do and are devoted to delivering the best solution to
              meet your requirements
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Consultants
