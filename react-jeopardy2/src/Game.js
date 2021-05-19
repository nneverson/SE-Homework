import React, { Component } from 'react';

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = { items: [], isLoaded: true, score: 0 };
		this.toggle = this.toggle.bind(this);
	}
	componentDidMount() {
		fetch('http://jservice.io/api/random')
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					isLoaded: true,
					items: json,
					isToggleOn: true,
				});
			});
	}

	toggle(e) {
		this.setState((state) => ({
			isToggleOn: !state.isToggleOn,
		}));
	}

	addPoints = (e) => {
		this.setState((state) => ({
			score: (state.score += e),
		}));
		fetch('http://jservice.io/api/random')
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					isLoaded: true,
					items: json,
					isToggleOn: true,
				});
			});
	};

	reset = () => {
		this.setState((state) => ({
			score: (state.score = 0),
		}));
		fetch('http://jservice.io/api/random')
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					isLoaded: true,
					items: json,
				});
			});
	};

	render() {
		const { items, isLoaded } = this.state;
		if (!isLoaded) {
			return <div>Loading ...</div>;
		} else {
			return (
				<div className='Game'>
					<h2>Score: {this.state.score} </h2>
					<div>
						<button
							type='button'
							class='btn btn-success'
							onClick={() => this.addPoints(this.state.items[0].value)}>
							add points{' '}
						</button>
						<button
							type='button'
							class='btn btn-warning'
							onClick={() => this.addPoints(-this.state.items[0].value)}>
							subtract points
						</button>
						<button
							type='button'
							class='btn btn-danger'
							onClick={() => this.reset(this.state.items[0].value)}>
							Reset
						</button>
					</div>
					<h2>Let's Play</h2>
					<div>
						<h3>Catagory:</h3>{' '}
						{items.map((item) => (
							<p key={item.id}> {item.category.title}</p>
						))}
					</div>
					<h3>Question:</h3>{' '}
					<div style={{ listStyleTydive: 'none' }}>
						{items.map((item) => (
							<p key={item.id}>{item.question}</p>
						))}
					</div>
					<div>
						<h3>Points:</h3>{' '}
						{items.map((item) => (
							<p key={item.id}> {item.value}</p>
						))}
					</div>
					<div>
						<h3>Answer:</h3>

						{this.state.isToggleOn
							? ''
							: this.state.items.map((item) => (
									<p key={item.id}> {item.answer}</p>
							  ))}

						<button type='button' class='btn btn-dark' onClick={this.toggle}>
							Click to Reveal Question
						</button>
					</div>
				</div>
			);
		}
	}
}
export default Game;
