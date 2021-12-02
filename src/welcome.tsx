import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import { Button, Divider } from 'antd'

const Welcome = () => {
	return (
		<>
			<div className="welcome-body">
				<a className="visual-link" href="#CreativeLounge"></a>
				<div className="header-content">
					<div style={{ verticalAlign: 'middle', display: 'flex', margin: 'auto' }}>
						<div style={{ display: 'grid' }}>
							<span className="header-content-text">용감한 슬라임은 커뮤니티에서의 인기도를 기반으로 NFT를 제작,</span>
							<span className="header-content-text">기여자에게는 해당 NFT의 수익금이 분배되는 특별한 프로젝트입니다.</span>
							<span className="header-content-text">발매 기념 에어드랍 이벤트</span>
							<br/><br/>
							<span className="header-content-text">2021. 12. 08. - 2021. 12. 10.</span>
							<Button style={{ zIndex: "100" }}>Airdrop event</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Welcome
