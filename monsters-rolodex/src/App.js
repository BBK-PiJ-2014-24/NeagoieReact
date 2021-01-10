import React from 'react';
import {CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends React.Component {

  state = {
    monsters: [],
    searchField: ''
  };

  changeText(){
    this.setState({string: "GoodBye World"});
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  filterMonsters(){


  }
  


  render() {

    const {monsters, searchField} = this.state;
    console.log(monsters);
    console.log(monsters.forEach((m, index) => console.log(index, m.name)));
    const  filteredMonsters = monsters.filter(
      m => m.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox 
          placeholder="Search Monsters"
          handleChange={(e)=> this.setState({searchField: e.target.value})}
        />
        <CardList monsters={filteredMonsters} /> 
      </div>
    );
  }
}
export default App;
