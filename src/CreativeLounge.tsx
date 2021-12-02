import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import CustomHeader from './header/header'
import { Carousel, Col, Divider, Row } from 'antd'
import CustomDivider from './divider'

const CreativeLounge = () => {
	return (
		<>
			<Row>
				<Col span={3}></Col>
				<Col span={18}>
					<div className="body">
						<CustomDivider></CustomDivider>
						<h2 style={{ margin: '30px', fontSize: '26px', fontFamily: 'Gilroy', color: 'white', textAlign: 'center' }}>
							Creative Lounge
						</h2>
						<CustomDivider></CustomDivider>
						<iframe
							src="https://y0unghyuk.github.io/test/"
							width="100%"
							height="950px"
							frameBorder="0"
							style={{ border: '0' }}></iframe>
					</div>
					<div style={{ margin: '40px 10px', fontFamily: 'SeoulNamsanJungM', textAlign: 'center' }}>
						<p style={{ fontSize: '16px', color: 'white' }}>
							크리에이티브 라운지에서 직접 슬라임을 커스텀하고 이미지를 다운로드 하실 수 있습니다.
							<br />
							크리에이티브 라운지의 제작 환경은 모바일이나 타블렛보다는 pc에 최적화되어있습니다.
							<br />
							다운로드 한 이미지를 공식 트위터나 인스타그램에 DM으로 보내면 커뮤니티에 올려 드립니다.
							<br />
							<br />
							제보해주시는 작품은 매일 저녁 6시에 마감하여 순차적으로 업데이트 됩니다.
						</p>
						<h2 style={{ fontSize: '26px', fontWeight: 'bold', marginTop: '20px', color: 'white' }}>
							실시간 인기 투표 진행중인 작품들 보러가기
						</h2>
						
					</div>
				</Col>
				<Col span={3}></Col>
			</Row>
			<Carousel autoplay easing="Receding">
							<div>
								<div style={{ display: 'flex' }}>
									<div className="vote-items">
										<a>
											<img src="kingslime.jpeg" width="149" height="149"></img>
										</a>
									</div>
									<div className="vote-items">
										<a>
											<img src="kingslime.jpeg" width="149" height="149"></img>
										</a>
									</div>
									<div className="vote-items">
										<a>
											<img src="kingslime.jpeg" width="149" height="149"></img>
										</a>
									</div>
									<div className="vote-items">
										<a>
											<img src="kingslime.jpeg" width="149" height="149"></img>
										</a>
									</div>
									<div className="vote-items">
										<a>
											<img src="kingslime.jpeg" width="149" height="149"></img>
										</a>
									</div>
									<div className="vote-items">
										<a>
											<img src="kingslime.jpeg" width="149" height="149"></img>
										</a>
									</div>{' '}
									<div className="vote-items">
										<a>
											<img src="kingslime.jpeg" width="149" height="149"></img>
										</a>
									</div>
									<div className="vote-items">
										<a>
											<img src="kingslime.jpeg" width="149" height="149"></img>
										</a>
									</div>
								</div>
							</div>
							<div>
								<div style={{ display: 'flex' }}>
									<div className="vote-items">
										<a>
											<img src="kingslime.jpeg" width="149" height="149"></img>
										</a>
									</div>
									<div className="vote-items">
										<a>
											<img src="kingslime.jpeg" width="149" height="149"></img>
										</a>
									</div>
									<div className="vote-items">
										<a>
											<img src="kingslime.jpeg" width="149" height="149"></img>
										</a>
									</div>
									<div className="vote-items">
										<a>
											<img src="kingslime.jpeg" width="149" height="149"></img>
										</a>
									</div>
									<div className="vote-items">
										<a>
											<img src="kingslime.jpeg" width="149" height="149"></img>
										</a>
									</div>
									<div className="vote-items">
										<a>
											<img src="kingslime.jpeg" width="149" height="149"></img>
										</a>
									</div>
									<div className="vote-items">
										<a>
											<img src="kingslime.jpeg" width="149" height="149"></img>
										</a>
									</div>
									<div className="vote-items">
										<a>
											<img src="kingslime.jpeg" width="149" height="149"></img>
										</a>
									</div>
								</div>
							</div>
						</Carousel>
		</>
	)
}

export default CreativeLounge
