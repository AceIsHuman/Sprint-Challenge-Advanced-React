import React from 'react';
import { Card } from 'semantic-ui-react';

import PlayerCard from './PlayerCard';

class PlayersList extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(res => this.setState({ ...this.state, players: res }))
      .catch(err => console.error(err.response))
  }

  render() {
    return (
      <Card.Group centered>
        {this.state.players.map(player => (
          <PlayerCard key={player.id} player={player} />
      ))}
      </Card.Group>
    )
  }
}

export default PlayersList;