import React from 'react';
import Nav from "./components/Nav";
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: false
		}
	}

	render() {
		return (
			<header className="">
				<Nav />
				<div className="filler">
					jfdsljfa
					<p>asfddffdgwrieom</p><p>asfddffdgwrieom</p><p>asfddffdgwrieom</p><p>asfddffdgwrieom</p><p>asfddffdgwrieom</p><p>asfddffdgwrieom</p>
				</div>
			</header>
		);
	}
}

export default App;
