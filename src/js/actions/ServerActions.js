import AppDispatcher from '../AppDispatcher';
import { ActionTypes } from '../Constants';

let ServerActions = {
    receivePlayers(players) {
        console.log('2. In ServerActions . . . ');
        AppDispatcher.dispatch({
            actionType: ActionTypes.RECEIVE_PLAYERS,
            players: players
        });
    }
};

export default ServerActions;