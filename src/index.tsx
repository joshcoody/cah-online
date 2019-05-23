import * as React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query, QueryResult } from "react-apollo";
import gql from "graphql-tag";
import Card, { CardProps } from "./components/Card";
import Deck from "./components/Deck";

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjp0db5obl45t01564n7l9jnk"
});

const shuffle = (a: CardProps[]) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <Hello name="CodeSandbox" />
      <h2>Start editing to see some magic happen {"\u2728"}</h2>
      <Query
        query={gql`
          query GetCards($blackOffset: Int!, $whiteOffset: Int!) {
            blackCards: allCards(filter: { type: BLACK }, skip: $blackOffset) {
              choices
              text
            }
            whiteCards: allCards(
              filter: { type: WHITE }
              first: 30
              skip: $whiteOffset
            ) {
              text
            }
          }
        `}
        variables={{ blackOffset: 0, whiteOffset: 0 }}
      >
        {({ loading, error, data }: QueryResult) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          let blackCards = shuffle(data.blackCards);
          let whiteCards = shuffle(data.whiteCards);
          return (
            <div>
              <Deck cards={blackCards} />
              <Deck cards={whiteCards} />
            </div>
          );
        }}
      </Query>
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));
