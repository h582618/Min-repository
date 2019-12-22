import React, { Component, Fragment } from 'react';
import './App.css';
class App extends Component {

state = {query:'', content: []};
onchangeText = e => {
    this.setState({quarry: e.target.value});
};
onGO = async () => {
    const query = `${this.apiUrl}api_key=${this.apiKey}&query=${this.state.quarry}`;
    let paths = [];
    fetch(query)
        .then(res => res.json())
        .then((data) => {
            this.setState({
                content : data.results
            })
        });
};

onRender = (res) => {
    return res.map(m =>
        <div>
            <img src={this.imageUrl + m.poster_path} />
            <h3>{m.title}</h3>
            <p>{m.vote_average} / 10</p>
        </div>);
};

render() {
    return (
        <div className="App">
            <input type="text" placeholder="Search" value={this.state.quarry} onChange={this.onchangeText}/>
            <button onClick={this.onGO}>GO</button>
            <div className="grid">{this.state.content.length ? this.onRender(this.state.content) : ''}</div>
        </div>
    );
}
}
export default App;