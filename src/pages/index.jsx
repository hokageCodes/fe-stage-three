import React from 'react'
import SneakerSection from '../components/landing-sections/Hero'
import BrandsSection from '../components/landing-sections/OurBrands'
import DealsSection from '../components/landing-sections/DealsSection'

export default function Home() {
  return (
    <div>
      <SneakerSection />
      <BrandsSection />
      <DealsSection />
    </div>
  )
}
