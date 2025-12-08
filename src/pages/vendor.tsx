import Basicinfo from '@/components/basicinfo'
import { FAQSection } from '@/components/FAQSection'
import Footer from '@/components/Footer'
import CountdownTimer from '@/components/Footer/CountdownTimer'
import EmailSignup from '@/components/Footer/EmailSignup'
import { Header } from '@/components/Header'
import { OfferingsSection } from '@/components/OfferingsSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class vendor extends Component {
  static propTypes = {}

  render() {
    return (
    <main className="bg-white max-md:pb-[100px]">
    <Header/>
    <div className='w-full h-full bg-gray-300 flex flex-col justify-center items-center text-center '>
        <h6 className='font-bold mt-[200px]'>Become A Vendor</h6>
    <h1 className="text-7xl font-semibold leading-[101px] tracking-[-2.88px] max-md:max-w-full max-md:text-[40px] max-md:leading-[62px] text-justify">
          Turn Your{" "}
          <span style={{
            fontFamily: 'Beauty Swing Personal Use Only, -apple-system, Roboto, Helvetica, sans-serif',
            fontWeight: 400,
            color: 'rgba(96,64,7,1)'
          }}>
            Ideas{" "}
          </span>
          into
          <br />
            <p className='text-center'>income.</p>
        </h1>
        <p className="text-sm">Hallway gives students the tools to sell, showcase, and grow — all in one platform.</p>
    <div className='mb-20'>
    <CountdownTimer/>
    <EmailSignup/>
        </div>
    </div>
    
    <OfferingsSection/>
    <Basicinfo/>
    <TestimonialsSection/>
    <FAQSection />
    <Footer />
    </main>
    )
  }
}

export default vendor