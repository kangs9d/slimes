import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import CustomHeader from './header/header'
import { Col, Divider, Row } from 'antd'
import CustomDivider from './divider'

const Roadmap = () => {
	return (
		<>
			<Row>
				<Col span={3}></Col>
				<Col span={18}>
					<div className="body">
						<CustomDivider></CustomDivider>
						<h2 style={{ margin: '30px', fontSize: '26px', fontFamily: 'Gilroy', color: 'white', textAlign: 'center' }}>
							Roadmap
						</h2>
						<CustomDivider></CustomDivider>
						<Row>
							<Col span={8}>
								<div style={{ margin: '90px 20px' }}>
									<img src="./roadmap.gif"></img>
								</div>
							</Col>
							<Col span={16} style={{ color: 'white' }}>
								<div style={{ margin: '100px 10px', fontFamily: 'SeoulNamsanJungM' }}>
									<h2 style={{ color: 'white', fontSize: '26px' }}>용감한 슬라임</h2>
									<p style={{ fontSize: '16px' }}>
										주의하세요, 이 슬라임들은 용감합니다. <br />
										만분의 일의 확률로 디지털 세상에 탄생한 이 슬라임에 주목하세요! <br />
										이 슬라임으로 뭘 할 수 있냐고요? <br />
										<br />
										어.. 일단, 귀엽습니다. <br />
										당신의 트위터, 인스타그램, 카카오 메신저를 깜찍함으로 물들이기에 충분하죠. <br />
										이 슬라임을 가지고 있다는 것은, 당신에게는 남들과는 다른 크리에이터 영혼을 가졌다는 걸 의미하죠.{' '}
										<br />
										크리에이터의 영혼에 약간의 드립력을 곁들여서 말이죠 ;) <br />
										<br />
										용감한 슬라임은 모자, 귀, 눈, 입, 몸통에 악세서리 착용이 가능한 픽셀 NFT 프로젝트입니다. <br />
										너무 단순해서 놀라셨다면, 더 놀라셔도 좋습니다. 용감한 슬라임은 커뮤니티 기반의 크리에이티브 NFT로,{' '}
										<br />
										직접 제작에 참여한 이미지가 커뮤니티에서의 인기도를 기반으로 NFT로 제작되고, <br />
										기여자에게는 해당 NFT의 수익금이 분배되는 특별한 프로젝트입니다.
									</p>
								</div>
							</Col>
						</Row>
						<div style={{ margin: '100px 10px', fontFamily: 'SeoulNamsanJungM' }}>
							<h2 style={{ color: 'white', fontSize: '26px' }}>Project Roadmap</h2>
							<p style={{ fontSize: '16px', color: 'white' }}>
								용감한 슬라임 제작자들은 슬라임 세계관을 더욱 더 확장시켜 더 많은 사람들의 삶에 슬며들고자 합니다.
								<br />
								하지만 우선은 초기 배포한 1,000개의 슬라임 NFT에게 새로운 보금지갑을 찾아주는게 먼저겠죠? 쿠..쿡..
								<br />
								초기 1,000 마리 슬라임들의 판매 과정에 따른 로드맵은 이래용!
								<br />
								<br />
								25% : Unity 기반 Game Store 에셋 무료 출시 (2D / 3D)
								<br />
								50% : 메타버스 기반 게임 로블록스 / 제페토 내 미니게임 런칭
								<br />
								75% : 메타버스 내 용감한 슬라임 IP 기반의 브랜드 런칭
								<br />
								100% : 2세대 NFT 출시 및 에어드랍 이벤트
								<br />
							</p>
						</div>
					</div>
				</Col>
				<Col span={3}></Col>
			</Row>
		</>
	)
}

export default Roadmap
