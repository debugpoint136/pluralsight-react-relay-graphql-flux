import { post } from 'jquery';
import ServerActions from './actions/ServerActions';

let API = {
    fetchPlayers() {
        post("/graphql", {
            query: `{
            players {
                _id,
                firstname,
                lastname,
                address
                }
             }`
        }).done(resp => {
            ServerActions.receivePlayers(resp.data.players);
        });
    }
};

export default API;