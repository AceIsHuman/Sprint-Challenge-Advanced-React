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

  render() {
    return (
      <Card.Group>
        {this.state.players.map(player => (
          <PlayerCard key={player.id} player={player} />
      ))}
      </Card.Group>
    )
  }
}

export default PlayersList;