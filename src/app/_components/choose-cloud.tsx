'use client'
import Image from 'next/image'
import React from 'react'

import reduce from '@/assets/svg/icon/reduce.svg'
import powerful from '@/assets/svg/icon/powerful.svg'
import speed from '@/assets/svg/icon/speed.svg'
import security from '@/assets/svg/icon/security.svg'

import boxBg from '@/assets/images/box-bg.png'

import global1 from '@/assets/images/global1.png'
import global2 from '@/assets/images/global2.png'
import global3 from '@/assets/images/global3.png'

import { motion } from 'framer-motion'

export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

function ChooseCloud() {
  return (
    <section className="bg-bg h-max px-4 lg:py-32 lg:p-32 flex flex-col justify-start items-center relative">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-6 flex flex-col items-center py-14 container mx-auto">
        <motion.div
          variants={fadeInUp}
          className="border border-white/10 rounded-full px-8 py-2 shadow-[var(--box-shadow-chip)] bg-[linear-gradient(93deg,rgba(255,255,255,0.2),rgba(255,255,255,0.0))]">
          <span className="text-white text-sm lg:text-2xl">Why Choose Cloud?</span>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="text-center space-y-2 lg:space-y-6">
          <h3 className="text-white text-2xl lg:text-5xl">Your Ultimate Cloud Solution</h3>
          <span className="text-body text-base lg:text-xl">Discover the benefits cloud has to offer.</span>
        </motion.div>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full h-max flex flex-col md:flex-row gap-8 md:gap-11 container mx-auto">
        <div className="w-full flex flex-col gap-8 md:gap-11  h-max">
          <motion.div variants={fadeInUp} className="p-[57px] bg-box-gradient space-y-6 rounded-3xl">
            <Image src={reduce} alt="reduce" width={58} height={58} />
            <div className="text-white space-y-4">
              <h5 className="text-2xl lg:text-3xl">Reduce Costs</h5>
              <p className="text-base lg:text-lg">
                Cloud migration cuts hardware, maintenance, and installation costs, while robust disaster recovery
                minimizes disruptions. Atlassian Cloud enhances security with features like SAML SSO, SCIM, and advanced
                authentication, simplifying organizational protection.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="w-full relative overflow-hidden aspect-[12/16] z-10 p-[57px] space-y-6  rounded-3xl border border-white/20 bg-[radial-gradient(48.77%_44.41%_at_51.18%_-3.02%,_#071738_0%,_#020816_100%)]">
            <Image src={speed} alt="speed" width={58} height={58} className="z-30" />
            <div className="text-white space-y-4 !z-[100] relative">
              <h5 className="text-2xl lg:text-3xl !z-50">Speed to market</h5>
              <p className="text-base lg:text-lg text-body !z-50">
                Cloud agility: automatic upgrades, 99.9%+ uptime, and real-time collaboration boost productivity.
                Reduced maintenance lets teams focus on business and customers.
              </p>
            </div>

            {/* รูปโลก */}
            <Image
              src={global1}
              alt="global1"
              width={200}
              height={200}
              className="absolute -bottom-10 lg:bottom-10 -right-10 lg:right-24 scale-150 lg:scale-200 !z-30"
            />
            <Image src={global2} alt="global2" width={150} height={150} className="absolute left-0 bottom-14 !z-30" />
            <Image
              src={global3}
              alt="global3"
              width={120}
              height={120}
              className="absolute hidden lg:block right-0 bottom-[20rem] !z-30"
            />
            <div className="bg-g-box-speed w-full h-full absolute top-0 left-0 !z-[20]" />
          </motion.div>
        </div>
        <div className="w-full flex flex-col-reverse gap-8 md:gap-11  h-max">
          <motion.div variants={fadeInUp} className="p-[57px] space-y-6 rounded-3xl border border-white/20 bg-[radial-gradient(48.77%_44.41%_at_51.18%_-3.02%,_#071738_0%,_#020816_100%)]">
            <Image src={security} alt="reduce" width={58} height={58} />
            <div className="text-white space-y-4">
              <h5 className="text-2xl lg:text-3xl">Security</h5>
              <p className="text-base lg:text-lg text-body">
                Safeguard your business against data breaches and hardware issues, ensuring that your data is never
                inaccessible. Information is stored in the Cloud using highly secured data centers with around-the-clock
                monitoring and threat detection, protecting your data from security breaches.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="w-full aspect-[12/16] p-[57px] space-y-6  rounded-3xl border border-white/20 overflow-hidden"
            style={{
              backgroundImage: `url(${boxBg.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <Image src={powerful} alt="powerful" width={58} height={58} />
            <div className="text-white space-y-4">
              <h5 className="text-2xl lg:text-3xl">Native, Fast & Powerful</h5>
              <p className="text-base lg:text-lg text-body">
                Cloud technology offers flexible scaling, adjusting resources to match demand. This optimizes costs and
                ensures performance, leading to efficient and successful operations.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ChooseCloud
