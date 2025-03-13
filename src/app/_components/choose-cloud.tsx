import Image from 'next/image'
import React from 'react'

import reduce from '@/assets/svg/icon/reduce.svg'
import powerful from '@/assets/svg/icon/powerful.svg'
import speed from '@/assets/svg/icon/speed.svg'
import security from '@/assets/svg/icon/security.svg'

import boxBg from '@/assets/images/box-bg.png'

function ChooseCloud() {
  return (
    <section className="bg-bg h-max px-4 lg:py-32 lg:p-32 flex flex-col justify-start items-center">
      <div className="space-y-6 flex flex-col items-center py-14 container mx-auto">
        <div className="border border-white/80 rounded-full px-8 py-3 shadow-[var(--box-shadow-chip)] bg-[linear-gradient(93deg,rgba(255,255,255,0.2),rgba(255,255,255,0.0))]">
          <span className="text-white">Why Choose Cloud?</span>
        </div>
        <div className="text-center space-y-6">
          <h3 className="text-white text-5xl">Your Ultimate Cloud Solution</h3>
          <span className="text-body text-xl">Discover the benefits cloud has to offer.</span>
        </div>
      </div>
      <div className='w-full h-max flex flex-col md:flex-row gap-8 md:gap-11 container mx-auto'>
        <div className='w-full flex flex-col gap-8 md:gap-11  h-max'>
          <div className='p-[57px] bg-box-gradient space-y-6 rounded-3xl'>
            <Image src={reduce} alt="reduce" width={58} height={58} />
            <div className="text-white space-y-4">
              <h5 className="text-3xl">Reduce Costs</h5>
              <p className="text-lg">
                Cloud migration cuts hardware, maintenance, and installation costs, while robust disaster recovery
                minimizes disruptions. Atlassian Cloud enhances security with features like SAML SSO, SCIM, and advanced
                authentication, simplifying organizational protection.
              </p>
            </div>
          </div>
          <div className='w-full aspect-[12/16] p-[57px] space-y-6  rounded-3xl border border-white/20 bg-[radial-gradient(48.77%_44.41%_at_51.18%_-3.02%,_#071738_0%,_#020816_100%)]'>
            <Image src={speed} alt="speed" width={58} height={58} />
            <div className="text-white space-y-4">
              <h5 className="text-3xl">Speed to market</h5>
              <p className="text-lg text-body">
                Cloud agility: automatic upgrades, 99.9%+ uptime, and real-time collaboration boost productivity. Reduced maintenance lets teams focus on
                business and customers.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col-reverse gap-8 md:gap-11  h-max'>
          <div className='p-[57px] space-y-6 rounded-3xl border border-white/20 bg-[radial-gradient(48.77%_44.41%_at_51.18%_-3.02%,_#071738_0%,_#020816_100%)]'>
            <Image src={security} alt="reduce" width={58} height={58} />
            <div className="text-white space-y-4">
              <h5 className="text-3xl">Security</h5>
              <p className="text-lg">
                Safeguard your business against data breaches and hardware issues, ensuring that your data is never inaccessible. Information is stored in the Cloud using highly secured data centers with around-the-clock monitoring and threat detection, protecting your data from security breaches.
              </p>
            </div>
          </div>
          <div className='w-full aspect-[12/16] p-[57px] space-y-6  rounded-3xl border border-white/20 overflow-hidden'
            style={{
              backgroundImage: `url(${boxBg.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <Image src={powerful} alt="powerful" width={58} height={58} />
            <div className="text-white space-y-4">
              <h5 className="text-3xl">Native, Fast & Powerful</h5>
              <p className="text-lg text-body">
                Cloud technology offers flexible scaling, adjusting resources to match demand. This optimizes costs and ensures performance, leading to efficient and successful operations.
              </p>
            </div>
          </div>
        </div>
      </div>




      <div className="hidden grid-cols-2 grid-rows-3 gap-12 w-full container">
        <div className="w-full p-14 bg-box-gradient space-y-9 rounded-3xl">
          <Image src={reduce} alt="reduce" width={58} height={58} />
          <div className="text-white space-y-4">
            <h5 className="text-3xl">Reduce Costs</h5>
            <p className="text-lg">
              Cloud migration cuts hardware, maintenance, and installation costs, while robust disaster recovery
              minimizes disruptions. Atlassian Cloud enhances security with features like SAML SSO, SCIM, and advanced
              authentication, simplifying organizational protection.
            </p>
          </div>
        </div>
        <div
          className="w-full row-span-2 border border-white/20 rounded-3xl p-14 space-y-9"
          style={{
            backgroundImage: `url(${boxBg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <Image src={powerful} alt="reduce" width={58} height={58} />
          <div className="text-white space-y-4">
            <h5 className="text-3xl">Native, Fast & Powerful</h5>
            <p className="text-2xl text-body">
              Cloud technology offers flexible scaling, adjusting resources to match demand. This optimizes costs and
              ensures performance, leading to efficient and successful operations.
            </p>
          </div>
        </div>
        <div className="w-full row-span-2 bg-red-500"></div>
        <div className="w-full bg-red-500"></div>
      </div>
    </section>
  )
}

export default ChooseCloud
