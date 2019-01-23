import React, { Component } from 'react';
import{getApiData} from './services/personService';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      results: this.getSaveData()
    };
  }
  getSaveData(){
    const userData=localStorage.getItem('userData');
    if(userData !==null){
      return JSON.parse(userData);
    }else{
      this.getPersons();
      return []
    }
  }
  saveData(data){
    localStorage.setItem('userData', JSON.stringify(data));
  }
  getPersons(){
    getApiData()
    .then(data=>{
      const cleanData=data.results.map((item, index)=>{return{...item, id:index}});
      this.setState({
        results: cleanData
      });
      this.saveData(cleanData);

    });
  }
  render() {
    return (
      <div className="app">
      <h1 className="app__title">Buscador de Personas</h1>
        <ul className="app__list">
        {this.state.results.map(item=>{
          return(
            <li className="app__list__item" id={item.id} key={item.id}>
            <div className="person">
            <h2 className="person__name">{`${item.name.first} ${item.name.last}`}</h2>
            <img src={item.picture.medium} alt={`${item.name.first} ${item.name.last}`}/>
            <div className="person__age">{item.dob.age}</div>
            <div className="person__city">{item.location.city}</div>

            </div>
            </li>
          )
        })}
        </ul>
    </div>
    );
  }
}

export default App;
