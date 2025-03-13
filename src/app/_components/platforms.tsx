import React from 'react'

import google from '@/assets/images/google.png'
import aws from '@/assets/images/aws.png'
import az from '@/assets/images/az.png'
import huawel from '@/assets/images/huawel.png'
import Image from 'next/image'
import { BoxBody, BoxContent } from '@/components/ui/box'

function Platfroms() {
    return (
        <section className="bg-[#020816] lg:bg-[radial-gradient(circle_800px_at_bottom_left,#003094_0%,#003094_24%,#020816_100%)] h-max px-4 lg:py-32 lg:p-32 ">
            <div className="flex flex-col justify-start items-center gap-10 lg:gap-20 container mx-auto">
                <div className="space-y-6 flex flex-col items-center pt-14">
                    <div className="border border-white/80 rounded-full px-8 py-3 shadow-[var(--box-shadow-chip)] bg-[linear-gradient(93deg,rgba(255,255,255,0.2),rgba(255,255,255,0.0))]">
                        <span className="text-white">Platforms</span>
                    </div>
                    <div className="text-center">
                        <h3 className="text-white text-5xl">4 Major Cloud Platforms</h3>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4 lg:gap-20 w-full">
                    {[aws, az, google, huawel].map((item, index) => (
                        <div
                            key={index}
                            className="w-full cursor-pointer max-w-full aspect-square grid place-content-center bg-white rounded-full relative"
                        >
                            <Image
                                src={item}
                                alt="cloud-logo"
                                className="absolute inset-0 m-auto w-[60px] md:w-[100px] lg:w-[140px]"
                            />
                        </div>
                    ))}
                </div>
                {/* Box */}
                <BoxBody>
                    <BoxContent>
                        <h3 className="text-white text-2xl">Amazon Web Services</h3>
                        <p className="text-body text-lg">
                            Automation Consultants is an AWS Select partner. With a large team of qualified AWS Solution Architects
                            and specialty AWS experts, Automation Consultants can help you migrate workloads to AWS, design and
                            optimise them in AWS and create automated DevOps solutions in AWS.
                        </p>
                    </BoxContent>
                </BoxBody>
            </div>
        </section>
    )
}

export default Platfroms
