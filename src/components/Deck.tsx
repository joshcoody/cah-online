import React from 'react';
import Card from "./Card";


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
			discardPile.push(this.state.currentCard);
		}
		
		this.setState({
			currentCard: nextCard,
			deck: updatedDeck,
			discard: discardPile
		});
	}
	render() {
		if (this.state.currentCard) {		
			return (
				<Card type={this.props.type} {...this.state.currentCard} />
			);
		} else {
			return "Drawing a card...";
		}
	}
}

export default Deck;