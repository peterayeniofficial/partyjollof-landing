'use client'
import { EmailOptin } from '@/components/email-optin'
import ReelsPage from '@/components/reels'
import { BackgroundBeams } from '@/components/ui/background-beam'
import { LampContainer } from '@/components/ui/lamp'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    
    <section
      id="home"
      className="relative overflow-hidden pt-[120px] md:pt-[130px] lg:pt-[160px]"
    >
      <div className="container">
     

        <div className="-mx-4 flex flex-wrap items-center antialiased">
  
          <div className="w-full px-4">
            <div
              className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center z-10"
              data-wow-delay=".2s"
            >
              <h1
                className="mb-0 text-4xl font-bold leading-snug text-white sm:text-7xl sm:leading-snug lg:text-9xl lg:leading-[1.2] tracking-tighter"
              >
                Party Jollof
              </h1>
              <p
                className="mx-auto mb-9 max-w-[600px] font-medium text-base text-white sm:text-lg sm:leading-[1.44]"
              >
                Discover African Cinema like Never Before on PartyJollof! Dive into critic and audience insights, latest trailers, news, and ratings. Join the journey of unparalleled movie exploration now!
              </p>
              <ul className="mb-10 flex gap-5 flex-wrap items-center justify-center relative z-10">
                <li>
                  <EmailOptin />
                  <p className='mt-2 text-base text-white text-xs'>Brought to you by <span className='underline'><a href='https://www.linkedin.com/company/fuelmyhustle' target='_blank'>FuelMyHustle</a></span></p>

                </li>


              </ul>
           


            </div>
            <BackgroundBeams />

            <ReelsPage />
          </div>
         
        </div>
      </div>
    </section>
   

   
  )
}
