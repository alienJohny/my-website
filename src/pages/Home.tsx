import React from 'react'
import { TabsComponent } from '../components/Home/TabsComponent'
import About from '../components/Home/About'

export default function Home() {
  return (
    <div className="d-flex flex-column">
      <About />
      <TabsComponent />
      <div>
        c
      </div>
    </div>
  )
}
