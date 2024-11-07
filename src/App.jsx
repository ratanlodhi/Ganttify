import React from 'react'

import Nav from './components/Nav'
import Hero from './components/Hero'
import Proof from './components/Proof'
import Features from './components/Features'
import Footer from './components/Footer'
import CustomerTestimonials from './components/CustomerTestimonials'
import ContactUs from './components/ContactUs'
import PricingPlans from './components/PricingPlans'
const App = () => {
  return (
    <>
    <Nav/>
    <Hero/>
    <Proof/>
    <Features/>
    <PricingPlans/>
    <CustomerTestimonials/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default App