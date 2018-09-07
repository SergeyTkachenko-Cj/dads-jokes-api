import React, {Component} from 'react';
import './style.css';

class App extends Component {
    state = {
        dadJokes: false
    }

    newJoke = () => {
        fetch("https://icanhazdadjoke.com/", {
            headers : { 'Accept': 'application/json'}
        })
        .then(i => i.json())
        .then(i => this.setState({ dadJokes: i.joke }))
    }

    componentDidMount = () => {
        this.newJoke();
    }

    render() {
        const joke = this.state.dadJokes || 'loading...';
        return (
            <div>
                <div className="btn_cover">
                    <button onClick={this.newJoke} className="smile_btn">
                        <span role="img" aria-label="smiley">&#128517;</span>
                    </button>
                    <div className="smile_btn_tooltip">next joke</div>
                </div>
                <div>{"''"+ joke +"''"}</div>
            </div>
        )
    }
}

export default App;