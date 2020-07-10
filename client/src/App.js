import React from 'react';
import Nav from "./components/Nav";
import Home from "./pages/Home";
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
			<header>
				<Nav />
				<Home />
			</header>
		);
	}
}

export default App;
