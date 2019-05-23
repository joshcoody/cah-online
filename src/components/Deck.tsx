import * as React from "react";
import { CardProps as Card } from "./Card";

interface DeckProps {
  cards: Card[];
}

interface DeckState {
  deck: Card[];
  currentCard?: Card;
  discardPile: Card[];
}

class Deck extends React.Component<DeckProps, DeckState> {
  constructor(props: DeckProps) {
    super(props);
    this.state = {
      deck: this.props.cards,
      discardPile: []
    };
  }
  componentDidMount() {
    this.drawCard();
  }
  drawCard = () => {
    if (this.state.deck && this.state.deck.length > 0) {
      const updatedDeck = [...this.state.deck];
      const nextCard = updatedDeck.shift();
      const discardPile = [...this.state.discardPile];

      if (this.state.currentCard) {
        discardPile.push(this.state.currentCard);
      }

      if (nextCard) {
        this.setState({
          currentCard: nextCard,
          deck: updatedDeck,
          discardPile: discardPile
        });
      }
    }
  };
  render() {
    return (
      <div className="deck">
        {this.state.currentCard && this.state.currentCard.text}
      </div>
    );
  }
}

export default Deck;
