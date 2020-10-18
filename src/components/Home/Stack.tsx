import React from 'react'
import { Collapse, Typography, List } from 'antd'

const { Panel } = Collapse
const { Title } = Typography

const devStack: Array<{ header: string, data: Array<string> }> = [
  {
    header: 'Frontend',
    data: [
      'TypeScript + React.js + Redux',
      'AntDesign',
      'Formik',
      'Boostrap',
      'Material UI',
    ]
  },
  {
    header: 'Backend',
    data: [
      'Python3',
      'C# (.NET)',
      'Webpack',
    ]
  },
  {
    header: 'DevOps',
    data: [
      'Linux/Windows + GIT',
      'Heroku',
      'Travis CI',
      'Docker',
    ]
  }

]

export const Stack = (): JSX.Element => (
  <div className="p-3">
    <Title level={4}>This is what i like to use as my dev stack:</Title>
    <Collapse defaultActiveKey={['1']} ghost>
      {
        devStack
          .map((obj, index) => (
            <Panel header={obj.header} key={index}>
              <List
                size="small"
                bordered
                dataSource={obj.data}
                renderItem={item => <List.Item>{item}</List.Item>}
              />
            </Panel>
          ))
      }
    </Collapse>
  </div>
)
