import ChooseCloud from './_components/choose-cloud'
import CloudServices from './_components/cloud-services'
import Consultants from './_components/consultants'
import CustomerSuccess from './_components/customer-success'
import DetailCloud from './_components/detail-cloud'
import Different from './_components/different'
import Hero from './_components/hero'
import Platfroms from './_components/platforms'
import ProcessWork from './_components/process-work'
import WhatYouWant from './_components/what-you-want'

export default function Home() {
  return (
    <main>
      <Hero />
      <ChooseCloud />
      <Platfroms />
      <CloudServices />
      <DetailCloud />
      <CustomerSuccess />
      <ProcessWork />
      <Different />
      <div className="bg-gradient-blue pb-10 lg:pb-0">
        <Consultants />
        <WhatYouWant />
      </div>
    </main>
  )
}
