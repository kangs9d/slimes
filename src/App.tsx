import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import CustomHeader from './header/header'
import Welcome from './welcome'
import CreativeLounge from './CreativeLounge'
import Roadmap from './roadmap'
import Team from './team'
import CustomFooter from './footer'

const App = () => {
	return (
		<>
		<div className="body">
			<CustomHeader></CustomHeader>
			<Welcome></Welcome>
			<Roadmap></Roadmap>
			<Team></Team>
			<CreativeLounge></CreativeLounge>
			<CustomFooter></CustomFooter>
		</div>
		</>
	)
}

export default App
