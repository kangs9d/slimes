import './App.css'
import 'antd/dist/antd.css'
import { Col, Row } from 'antd'
import CustomDivider from './divider'

const ProjectRoadmap = () => {
	return (
		<>
			<Row style={{ background:'black'}}>
				<Col span={3}></Col>
				<Col span={18}>
					<div className="body section" style={{ backgroundColor: 'black' }}>
						
						<div style={{ margin: '100px 10px', fontFamily: 'NeoDunggeunmo' }}>
							<CustomDivider></CustomDivider>
							<h2
								style={{
									margin: '30px',
									fontSize: '26px',
									fontFamily: 'NeoDunggeunmo',
									color: 'white',
									textAlign: 'center',
								}}>
								Project Roadmap
							</h2>
							<CustomDivider></CustomDivider>
							<p style={{ fontSize: '16px', color: 'white', marginTop: '30px', textAlign: 'center' }}>
								용감한 슬라임 제작자들은 슬라임 세계관을
								<br />
								더욱 더 확장시켜 더 많은 사람들의 삶에 슬.며.들.
								<br />
								아주 위대한 계획을 가지고 있습니다.
								<br />
								<br />
								하지만 우선은 초기 배포한 1,000개의 슬라임 NFT에게
								<br />
								새로운 보금지갑을 찾아주는게 먼저겠죠?
								<br />
								이를 부스트-업! 하기 위한 로드맵은 이렇습니다.
								<br />
								<br />
								<div style={{ display: 'flex' }}>
									<Row>
										<Col span={6}>
											<div>
												<img src="/roadmap1.png" style={{ filter: 'brightness(15%)', width: '100%', padding: '5%' }}></img>
												<p style={{ fontSize: "36px", color: "white" }}>25%</p>
												<p>Unity 기반 Game Store 에셋 무료 출시 (2D / 3D)</p>
											</div>
										</Col>
										<Col span={6}>
											<div>
												<img src="/roadmap2.png" style={{ filter: 'brightness(40%)', width: '100%', padding: '5%' }}></img>
												<p style={{ fontSize: "36px", color: "white" }}>50%</p>
												<p>메타버스 기반 게임 로블록스 / 제페토 내 미니게임 런칭</p>
											</div>
										</Col>
										<Col span={6}>
											<div>
												<img src="/roadmap3.png" style={{ filter: 'brightness(65%)', width: '100%', padding: '5%' }}></img>
												<p style={{ fontSize: "36px", color: "white" }}>75%</p>
												<p>메타버스 내 용감한 슬라임 IP 기반의 브랜드 런칭</p>
											</div>
										</Col>
										<Col span={6}>
											<div>
												<img src="/roadmap4.png" style={{ width: '100%', padding: '5%' }}></img>
												<p style={{ fontSize: "36px", color: "white" }}>100%</p>
												<p>2세대 NFT 출시 및 에어드랍 이벤트</p>
											</div>
										</Col>
									</Row>
								</div>
							</p>
						</div>
					</div>
				</Col>
				<Col span={3}></Col>
			</Row>
		</>
	)
}

export default ProjectRoadmap
