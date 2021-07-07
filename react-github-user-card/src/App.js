import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    card: {},
    followers: [],
  }


  componentDidMount() {
    this.fetchCards();
    this.fetchFollowers();
  }

  fetchCards = () => {
    axios.get('https://api.github.com/users/joseph-vega12')
      .then(res => {
        const name = res.data;
        console.log(name);
        this.setState({
          card:res.data
        })
      })
      .catch(err => console.log(err))
  }

  fetchFollowers = () => {
    axios.get('https://api.github.com/users/joseph-vega12/followers')
      .then(res => {
        const name = res.data;
        console.log(name);
        this.setState({
          followers:res.data
        })
      })
      .catch(err => console.log(err))
  }



  render() {
    return (
      <div className="container">
      <div className="card">
        <h2>{this.state.card.name}</h2>
        <h2>{this.state.card.login}</h2>
      </div>
      <div className="followers">
        {this.state.followers.map(follower =>
        <div>
        <img width="200" src={follower.avatar_url}/>
        <li>{follower.login}</li>
        </div>
          )}
      </div>
      </div>
    );
  }
}
export default App;
