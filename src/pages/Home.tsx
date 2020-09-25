import React from 'react'
import { TabsComponent } from '../components/Home/TabsComponent'
import About from '../components/Home/About'
import { Stack } from '../components/Home/Stack'
import Sertifications from '../components/Home/Sertifications'

export default function Home() {
  return (
    <div className="d-flex flex-column">
      <About />
      <TabsComponent />
      <Sertifications />
      <Stack />
    </div>
  )
}
