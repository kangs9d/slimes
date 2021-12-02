import { Button, Col, Layout, Menu, Row } from 'antd'
import { TwitterOutlined } from '@ant-design/icons'

const { Header } = Layout

const CustomHeader = () => {
	const onClickTwitterHandler = () => {
		window.location.href = 'https://twitter.com/brave_slimes'
	}
	return (
		<Header className="header">
			<Row>
				<Col span={12}>
					<div className="logo" onClick={() => (window.location.href = '/')}></div>
				</Col>
				<Col span={12}>
					<Menu mode="horizontal" disabledOverflow={true} style={{ float: 'right' }}>
						<Menu.Item key="1">Intro</Menu.Item>
						<Menu.Item key="2">Roadmap</Menu.Item>
						<Menu.Item key="3">Creative Lounge</Menu.Item>
						<Menu.Item key="4" icon={<TwitterOutlined />} onClick={() => onClickTwitterHandler()}></Menu.Item>
					</Menu>
				</Col>
			</Row>
		</Header>
	)
}

export default CustomHeader
