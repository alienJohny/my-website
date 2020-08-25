import React from 'react'
import { Tabs } from 'antd'
import { TimelineComponent } from './TimelineComponent'
import { Event } from '../../objects/interfaces'

const { TabPane } = Tabs

const education: Array<Event> = [
  {
    time: 'Aug 2020', title: 'React JS. Practical course 2020 (includes Hooks, Classes, Redux)',
    desc: 'Udemy online course by Vladilen Minin',
    now: true
  },
  {
    time: 'Aug-Sept 2017',
    title: 'Digital Technologies School',
    desc: '“Data Science / Python / Machine Learning” offline course',
    now: true
  },
  {
    time: 'Sept 2016 - Sept 2021',
    title: 'Bauman Moscow State Technical University',
    desc: 'Bachelor degree in Software Engineering',
    now: true,
  },
  {
    time: 'Oct 2015',
    title: 'Computer Training Center at Bauman University',
    desc: 'Certificate of Achievement accredits that I have successfully completed the course “Programming and Databases”',
    now: true
  },
]

const workExperience: Array<Event> = [
  {
    time: 'July 2020 - Now',
    title: 'Frontend-Developer at System Global Services',
    desc: '',
    now: true
  },
  {
    time: 'Oct. 2017 - Apr. 2018',
    title: 'Programmer-Intern at PoliceSoft, LTD',
    desc: 'I developed a machine learning model for an industrial video surveillance system. The tasks included the search and analysis of existing methods for solving the problem, namely, neural networks, reference vector machines, and decision trees. The resulting Python system made it possible to simplify and speed up the assembly of the project.',
    now: true
  },
]

const achievements: Array<Event> = [
  {
    time: '2018',
    title: 'Winner in CHTPZ together with BMSTU Digital Game',
    desc: 'I developed a model for optimizing pipe testing at the ChTPZ plant. The problem was that testing was carried out after the production of pipes. A model has been proposed to predict the likelihood of marriage at the production stage.',
    now: true
  },
  {
    time: '2017',
    title: '2nd place at All-Russian championship of engineering cases “Korolev Cup BMSTU 2017”',
    desc: 'Case from Bosch Rexroth. The team with me as a team leader took the 2nd place, presenting a sugar biscuit production scheme, a full analysis of production components and a sales optimization model.',
    now: true
  },
]

export const TabsComponent = () => (
  <div className="p-3">
    <Tabs defaultActiveKey="1" tabPosition={'left'}>
      <TabPane tab={'Education'} key={0}>
        <TimelineComponent data={education} />
      </TabPane>
      <TabPane tab={'Work Experience'} key={1}>
        <TimelineComponent data={workExperience} />
      </TabPane>
      <TabPane tab={'Achievements'} key={2}>
        <TimelineComponent data={achievements} />
      </TabPane>
    </Tabs>
  </div>
)
