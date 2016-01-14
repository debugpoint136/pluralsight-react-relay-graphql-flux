import AppDispatcher from "../AppDispatcher";
import { ActionTypes } from "../Constants";
import { EventEmitter } from "events";

let _players = [];


class PlayerStore extends EventEmitter {
    constructor(props) {
        super(props);

        AppDispatcher.register(action => {
           switch( action.actionType ) {
               case ActionTypes.RECEIVE_PLAYERS:
                   console.log("3. In Store . . .");
                   // do something about it
                   _players = action.players;
                   this.emit('change');
                   break;
               default:
                   // do nothing
           }
        });
    }
    getAll() {
        return _players;
    }
}

export default new PlayerStore();