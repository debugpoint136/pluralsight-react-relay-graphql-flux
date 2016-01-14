import React from 'react';
import API from '../API';
import PlayerStore from '../Stores/PlayerStore';

let _getAppState = () => {
    return { players : PlayerStore.getAll() };
}

export default class Main extends React.Component {
    constructor(props){
        super(props);

        this.state = _getAppState();
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount() {
        API.fetchPlayers();
        PlayerStore.on("change", this.onChange);
    }

    componentWillMount() {
      PlayerStore.removeListener("change", this.onChange);
    }

    onChange() {
        console.log('4. Inside View . . . ');
        this.setState(_getAppState());
    }

  render() {
      let content = this.state.players.map(player => {
         return <li key={player._id}>
                <a href={player.firstname}>{player.lastname}</a>
             </li>;
      });
    return (
      <div>
          <h3>Names</h3>
              <ul>
                  { content }
              </ul>
      </div>
    );
  }
}

