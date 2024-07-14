import React from 'react'
import SneakerSection from '../components/landing-sections/Hero'
import BrandsSection from '../components/landing-sections/OurBrands'
import DealsSection from '../components/landing-sections/DealsSection'
import StatisticsSection from '../components/landing-sections/StatsSection'
import TestimonialsSection from '../components/landing-sections/TestimonialsSection'

export default function Home() {
  return (
    <div>
      <SneakerSection />
      <BrandsSection />
      <DealsSection />
      <StatisticsSection />
      <TestimonialsSection />
    </div>
  )
}
