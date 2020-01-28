import React from "react";
import Players from "./Players";
import axios from "axios";
import { useLocalStorage } from "../hooks/useLocalStorage";

class PlayersCards extends React.Component {

    state = {
        players: []
    }

    componentDidMount() {
        axios.get("http://localhost:5000/api/players")
            .then(response => {
                console.log(response);
                this.setState({ ...this.state, players: response.data })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div id="players-cards">
                {this.state.players.map(card => (
                    <Players 
                      key={card.id}
                      name={card.name}
                      country={card.country}
                      searches={card.searches}
                      id={card.id}
                    />
                ))}
            </div>
        )
    }

}

export default PlayersCards;

