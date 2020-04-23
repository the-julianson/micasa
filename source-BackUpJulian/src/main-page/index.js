import React, {Component} from 'react';
import logo from './logo.svg';
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';

class App extends Component {
  //initialize state with property initializers
  state = {};

  // call the fetch Houses somewhere
  // mounting means adding the components to the three DOM
  //not using arrow because calls it and assures this
  componentDidMount() {
    this.fetchHouses();
  }

  // function to fetch Houses
  fetchHouses = () => {
     fetch('/houses.json')
     .then(rsp => rsp.json())
     .then(allHouses => {
       this.allHouses = allHouses;
       this.determineFeaturedHouse();
     })
  }

  // add a function that randomnly selects a house 
  determineFeaturedHouse = () => {
    if (this.allHouses) {
      const randomIndex = Math.floor(Math.random() * this.allHouses.length);
      const featuredHouse = this.allHouses[randomIndex];
      this.setState({ featuredHouse });
    };
  }



  render() {
    return (
      <div className="container">
        <Header subtitle="Providing houses worldwide"/>
        <FeaturedHouse house={this.state.featuredHouse}/>
      </div>
    );
  }
}

export default App;
