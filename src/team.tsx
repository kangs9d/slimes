import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import CustomHeader from './header/header'
import { Col, Divider, Row } from 'antd'
import CustomDivider from './divider'

const Team = () => {
	return (
		<>
			<Row>
				<Col span={3}></Col>
				<Col span={18}>
					<div className="body">
						<CustomDivider></CustomDivider>
						<h2 style={{ margin: '30px', fontSize: '26px', fontFamily: 'Gilroy', color: 'white', textAlign: 'center' }}>
							Team
						</h2>
						<CustomDivider></CustomDivider>
						<Row>
							<Col span={6}>
								<div style={{ margin: '50px 10px' }}>
									<img src="./kingslime.jpeg" width="300" height="300"></img>
								</div>
							</Col>
							<Col span={12} style={{ color: 'white' }}>
								<div style={{ margin: '50px 10px', fontFamily: 'SeoulNamsanJungM', textAlign: 'center' }}>
									<h2 style={{ color: 'white', fontWeight: 'bold', fontSize: '26px' }}>슬라임 세상의 무자비한 폭군, 킹슬라임</h2>
									<p style={{ fontSize: '16px' }}>
									모든 건 다 내 뜻대로 해야 직성이 풀리는 <br />
									부산 사나이! 언뜻 보면 제멋대로인 것 같지만 <br />
									알고보면 누구보다 깐깐한 원칙주의자?! <br />
									블록체인과 메타버스 같은 가상세계보다는<br />
									먹고, 마시고, 즐기는 감각세계를 더 추구하는<br />
									이시대 마지막 로마인이다.<br />
										<br />
										전반적인 기획과 함께 프로젝트 리더를 담당 중<br />
									</p>
								</div>
							</Col>
							<Col span={6}>
								<div style={{ margin: '50px 10px' }}>
									<img src="./kingslime.jpeg" width="300" height="300"></img>
								</div>
							</Col>
						</Row>
						<Row>
							<Col span={6}>
								<div style={{ margin: '50px 10px' }}>
									<img src="./bossslime.jpeg" width="300" height="300"></img>
								</div>
							</Col>
							<Col span={12} style={{ color: 'white' }}>
								<div style={{ margin: '50px 10px', fontFamily: 'SeoulNamsanJungM', textAlign: 'center' }}>
									<h2 style={{ color: 'white', fontWeight: 'bold', fontSize: '26px' }}>슬라임 세상의 보스를 꿈꾸는, 보스 슬라임</h2>
									<p style={{ fontSize: '16px' }}>
									영화 [Her]와 [Ready Player One]을 보고 난 후부터<br />
									인터넷 인간이 되기를 꿈꿔온 가상현실 마니아다.<br />
									하고 싶은 게 많아도 너무 많아서 탈인 보스 슬라임의<br />
									다음 목표는 다가오는 미래에 자기만의 지하 슬라임 세계를<br />
									구축해 조직의 보스가 되는 것이다.<br />
									물론, 지금은 용감한 슬라임 프로젝트의 콘텐츠를<br />
									기획하고 커뮤니티 운영을 위한 각종 기획을 담당하고 있다.<br />
									딴소리를 할 때도 많지만 가끔 예리하다.<br />
									</p>
								</div>
							</Col>
							<Col span={6}>
								<div style={{ margin: '50px 10px' }}>
									<img src="./bossslime.jpeg" width="300" height="300"></img>
								</div>
							</Col>
						</Row>
						<Row>
							<Col span={6}>
								<div style={{ margin: '50px 10px' }}>
									<img src="./slimegod.jpeg" width="300" height="300"></img>
								</div>
							</Col>
							<Col span={12} style={{ color: 'white' }}>
								<div style={{ margin: '50px 10px', fontFamily: 'SeoulNamsanJungM', textAlign: 'center' }}>
									<h2 style={{ color: 'white', fontWeight: 'bold', fontSize: '26px' }}>온화한 미소 뒤 감춰둔 야망, 슬라임갓</h2>
									<p style={{ fontSize: '16px' }}>
									슬라임 프로젝트의 핵심 중의 핵심이다.<br />
									전반적인 아이디어부터 일러스트, 개발까지 혼자<br />
									다 총괄해서 제작했다고 해도 과언이 아니다.<br />
									가장 큰 미스테리는 킹 슬라임과 보스 슬라임과<br />
									슬라임갓이 함께 일을 하는 이유.<br />
									가끔 슬라임갓을 볼 때 이 사람은 하루가<br />
									48시간인건가 싶을 정도로 남들보다 뭔가 많이 해낸다.<br />
									그래서, 그는 남들로부터 '그저 갓'이라 불린다.<br />
									</p>
								</div>
							</Col>
							<Col span={6}>
								<div style={{ margin: '50px 10px' }}>
									<img src="./slimegod.jpeg" width="300" height="300"></img>
								</div>
							</Col>
						</Row>
					</div>
				</Col>
				<Col span={3}></Col>
			</Row>
		</>
	)
}

export default Team
