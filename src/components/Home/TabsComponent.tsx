import React from 'react'
import { Tabs, Typography, Tag, Space } from 'antd'
import { TimelineComponent } from './TimelineComponent'
import { Event, WorkingPeriod } from '../../objects/interfaces'

const { Link } = Typography;
const { TabPane } = Tabs

const calculateWorkTimeExp = (dateStart: Date, dateEnd?: Date): WorkingPeriod => {
  const dateNow: Date = new Date()
  const diff = new Date(((dateEnd ? dateEnd : dateNow).getTime()) - dateStart.getTime())
  const workingExp: WorkingPeriod = {
    months: diff.getUTCMonth().toString(),
    days: diff.getUTCDate().toString()
  }
  return workingExp
}

function formatStr(str: string, ...val: string[]) {
  for (let index = 0; index < val.length; index++) {
    str = str.replace(`{${index}}`, val[index]);
  }
  return str;
}

const getLink = (text: string, path: string, adds?: string | JSX.Element, addsEnd?: string | JSX.Element,): JSX.Element => (
  <Space align="center" direction="horizontal" className="flex-wrap">
    {adds}
    <Link href={path} target="_blank">
      {text}
    </Link>
    {addsEnd}
  </Space>
) 

const education: Array<Event> = [
  {
    time: 'Aug 2020', title: 'React JS. Practical course 2020 (includes Hooks, Classes, Redux)',
    desc: 'Udemy online course by Vladilen Minin',
    now: true
  },
  {
    time: 'Aug-Sept 2017',
    title: getLink('Digital Technologies School', 'https://digitaltech.school/', 'Course at '),
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
    time: formatStr(
      'July 2020 - Now ({0} mo. {1} days)',
      calculateWorkTimeExp(new Date(2020, 6, 10)).months,
      calculateWorkTimeExp(new Date(2020, 6, 10)).days,
    ),
    title: getLink(
      'System Global Services',
      'https://www.sgsdt.com',
      'Frontend Developer at ',
      <Tag color="green" style={{ marginBottom: '4px' }}>Working now</Tag>
    ),
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
    title: getLink('“Korolev Cup BMSTU 2017”', 'https://bmstu.ru/mstu/news/?newsid=4229', '2nd place at All-Russian championship of engineering cases '),
    desc: 'Case from Bosch Rexroth. The team with me as a team leader took the 2nd place, presenting a sugar biscuit production scheme, a full analysis of production components and a sales optimization model.',
    now: true
  },
]

const tabs: Array<{ header: string, data: Array<Event> }> = [
  {
    header: 'Education',
    data: education,
  },
  {
    header: 'Work Experience',
    data: workExperience,
  },
  {
    header: 'Achievements',
    data: achievements,
  },
]

export const TabsComponent = (): JSX.Element => (
  <div className="p-3">
    <Tabs defaultActiveKey="1" tabPosition={'left'}>
      {
        tabs.map((obj, index) => (
          <TabPane tab={obj.header} key={index}>
            <TimelineComponent data={obj.data} />
          </TabPane>
        ))
      }
    </Tabs>
  </div>
)
