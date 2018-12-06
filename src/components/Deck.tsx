import React from 'react';

class Deck extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			deck: props.cards,
			currentCard: null,
			discardPile: []
		};
	}
	componentDidMount() {
		this.drawCard();
	}
	drawCard = () => {
		let updatedDeck = [...this.state.deck];
		let nextCard = updatedDeck.shift();
		let discardPile = [...this.state.discardPile];
		
		if (this.state.currentCard) {
			
		}
		
		this.setState({
			currentCard: nextCard,
			deck: updatedDeck,
			discard: discardPile
		});
	}
	render() {
		
	}
}

export default Deck;