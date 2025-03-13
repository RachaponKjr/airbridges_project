import ChooseCloud from './_components/choose-cloud'
import CloudServices from './_components/cloud-services'
import DetailCloud from './_components/detail-cloud'
import Hero from './_components/hero'
import Platfroms from './_components/platforms'

export default function Home() {
  return (
    <main>
      <Hero />
      <ChooseCloud />
      <Platfroms />
      <CloudServices />
      <DetailCloud />
    </main>
  )
}
