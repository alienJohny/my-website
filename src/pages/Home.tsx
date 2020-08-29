import React from 'react'
import { TabsComponent } from '../components/Home/TabsComponent'
import About from '../components/Home/About'
import { Stack } from '../components/Home/Stack'

export default function Home() {
  return (
    <div className="d-flex flex-column">
      <About />
      <TabsComponent />
      <Stack />
    </div>
  )
}
