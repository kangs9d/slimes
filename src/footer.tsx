import { Button, Col, Layout, Menu, Row } from 'antd'
import { AudioOutlined, MessageOutlined, TwitterOutlined } from '@ant-design/icons'
import { Footer } from 'antd/lib/layout/layout'

const { Header } = Layout

const CustomFooter = () => {
	const onClickTwitterHandler = () => {
		window.location.href = 'https://twitter.com/brave_slimes'
	}

	const onClickKakaoHandler = () => {
		window.location.href = 'https://open.kakao.com/o/guH3kWMd'
	}

	const onClickDiscordHandler = () => {
		window.location.href = 'https://discord.gg/dWWNyGyC'
	}

	return (
		<Footer style={{ background: 'black', marginTop: '100px' }}>
			<Row>
				<Col span={6}>
					<p style={{ fontSize: '16px', color: 'white', fontFamily: 'Gilroy' }}>All Copyrights reserved by level 999.</p>
				</Col>
				<Col span={18}>
					<div style={{float: 'right'}}>
						<Button onClick={() => onClickTwitterHandler()} icon={<TwitterOutlined />} style={{backgroundColor: "black", color: "white", border: "none"}} ></Button>
						<Button onClick={() => onClickKakaoHandler()} icon={<MessageOutlined />} style={{backgroundColor: "black", color: "white", border: "none"}} ></Button>
						<Button onClick={() => onClickDiscordHandler()} icon={<AudioOutlined />} style={{backgroundColor: "black", color: "white", border: "none"}} ></Button>
					</div>
				</Col>
			</Row>
		</Footer>
	)
}

export default CustomFooter
