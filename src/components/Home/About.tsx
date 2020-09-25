import React from 'react'
import { Typography, Avatar } from 'antd'

const { Title, Text } = Typography

export default function About() {
  return (
    <div className="container d-flex flex-row justify-content-start mb-4 mt-5">
      <Avatar size={100} src="https://avatars3.githubusercontent.com/u/22350702?s=460&u=2ac53aa39a009b4645621e88f7d8f210fa29431d&v=4" />
      <div className="d-flex flex-column justify-content-center ml-4">
        <Title level={3} style={{ fontFamily: 'Patua One' }}>Artur Yumaev</Title>
        <Text>Software Engineer</Text>
      </div>
      
    </div>
  )
}
