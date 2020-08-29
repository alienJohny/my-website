import React from 'react'
import { Collapse, Typography, List } from 'antd'

const { Panel } = Collapse
const { Title } = Typography

const frontendStack = [
  'TypeScript + React.js + Redux',
  'AntDesign',
  'Formik',
  'Boostrap',
  'Material UI',
]
const backendStack = [
  'Python3',
  'C# (.NET)',
  'Webpack',
]

const devopsStack = [
  'Linux/Windows + GIT',
  'Heroku',
  'Travis CI',
  'Docker',
]

export const Stack = () => (
  <div className="p-3">
    <Title level={4}>This is what i like to use as my dev stack:</Title>
    <Collapse defaultActiveKey={['1']} ghost>
      <Panel header="Frontend" key="1">
        <List
          size="small"
          bordered
          dataSource={frontendStack}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </Panel>
      <Panel header="Backend" key="2">
        <List
          size="small"
          bordered
          dataSource={backendStack}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </Panel>
      <Panel header="Devops" key="3">
        <List
          size="small"
          bordered
          dataSource={devopsStack}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </Panel>
    </Collapse>
  </div>
)
