import { get } from 'jquery';
import ServerActions from './actions/ServerActions';

let API = {
    fetchPlayers() {
        console.log("1. in API");

        get("/data/players").done(resp => {
            ServerActions.receivePlayers(resp);
        });
    }
};

export default API;