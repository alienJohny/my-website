import React from 'react'
import {
  Table,
  Typography,
  Space,
  Avatar,
  Image
} from 'antd';

const { Title, Text, Link } = Typography

interface DataDescription {
  credentialId?: string;
  verificationLink?: string;
  name: string | JSX.Element;
}

interface Data {
  key: string;
  issuingOrganization: JSX.Element | string;
  issueDate: string;
  description: DataDescription;
  imageLink: string;
}

const columns = [
  {
    title: 'Issuing Organization',
    dataIndex: 'issuingOrganization',
    key: 'issuingOrganization',
    render: (text: string) => {
      return <a>{text}</a>
    },
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    render: (text: string, record: Data) => {
      return (
        <Space direction="vertical">
          <Text strong>Name:</Text>
          {record.description.name}
          {record.description.credentialId &&
            <Text>
              <Text strong>
                Credential ID:&nbsp;
              </Text>
              {record.description.credentialId}
            </Text>
          }
          {record.description.verificationLink &&
            <Link href={record.description.verificationLink} target="_blank">
              Verification Link
            </Link>
          }
        </Space>
      )
    },
  },
  {
    title: 'Issue Date',
    dataIndex: 'issueDate',
    key: 'issueDate',
  },
  {
    title: 'Image',
    dataIndex: 'imageLink',
    key: 'imageLink',
    render: (text: string) => (
      <Image
        width={100}
        src={require('./../../../static/img/' + text)}
      />
    ),
  },
];

const data: Array<Data> = [
  {
    key: '1',
    issuingOrganization: (
      <Space align="center">
        <Avatar shape="square" size="large" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-logo-square.png?auto=format%2Ccompress&dpr=1" />
        <Link href="https://www.coursera.org/" target="_blank">
          Coursera
        </Link>
      </Space>
    ),
    issueDate: 'Sep 2020',
    description: {
      credentialId: 'PJJ7MZQT63VS',
      verificationLink: 'https://www.coursera.org/account/accomplishments/certificate/PJJ7MZQT63VS',
      name: 'JavaScript, part 1: basics and functions. Moscow Institute of Physics and Technology, Yandex.',
    },
    imageLink: 'Coursera PJJ7MZQT63VS-1.png'
  },
];

export default function Sertifications() {
  return (
    <div className="p-3">
      <Title level={4}>Licenses & Certifications</Title>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}
