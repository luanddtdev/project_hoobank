import React from 'react'
import { Footer, Navbar } from './components'
import { Billing, Business, CardDeal, Client, Cta, Feedback, Hero, Stat } from './pages'

const App = () => {
  return (
    <div className='bg-primary'>
      <Navbar />
      <Hero />
      <Stat />
      <Business />
      <Billing />
      <CardDeal />
      <Feedback />
      <Client />
      <Cta />
      <Footer />
    </div>
  )
}

export default App