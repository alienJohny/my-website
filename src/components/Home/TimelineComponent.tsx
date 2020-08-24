import React from 'react'
import { Timeline, Space, Typography } from 'antd'
import { Event } from '../../objects/interfaces'

const { Text, Title } = Typography

interface TimelineComponentProps {
  data: Array<Event>;
}

export const TimelineComponent = ({ data }: TimelineComponentProps) => (
  <Timeline>
    {data.map((event, index) => (
      <Timeline.Item key={index}>
        <Title level={4}>{event.title}</Title>
        <Space direction="vertical">
          <Text type="secondary">{event.time}</Text>
          <Text>{event.desc}</Text>
        </Space>
      </Timeline.Item>
    ))}
  </Timeline>
)
